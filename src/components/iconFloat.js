import styles from "./iconFloat.css";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faCodeCommit,
  faDumbbell,
  faCodeFork,
  faCodeMerge,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useSyncExternalStore } from "react";

export default function IconFloat(props) {
  useEffect(() => {
    const icons = document.querySelectorAll("svg");
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const numIcons = icons.length;
    const spacingX = containerWidth / (numIcons + 1);

    icons.forEach((icon, index) => {
      // Assigning a random starting position and set the style
      const yPos = Math.random() * (containerHeight * 0.8) + 50;
      const xPos = (index + 1) * spacingX - 50 / 2;
      const direction = Math.floor(Math.random() * 4);
      icon.setAttribute("direction", direction);
      icon.style.left = `${xPos}px`;
      icon.style.top = `${yPos}px`;

      // 0: SE, 1: SW, 2: NW, 3: NE

      // Move the icon on each animation frame
      function moveIcon() {
        // get current positions
        let currentXPos = parseFloat(icon.style.left);
        let currentYPos = parseFloat(icon.style.top);
        let currentDirection = parseInt(icon.getAttribute("direction"));

        var xSpeed = 0.1;
        var ySpeed = 0.05;

        function changeDirection(direction) {
          // changing xPos, containerWidth - 100 depends on the size of the icon
          if (currentXPos > containerWidth - 100) {
            if (direction === 0) {
              direction = 1;
            }
            if (direction === 3) {
              direction = 2;
            }
          } else if (currentXPos < 0) {
            if (direction === 1) {
              direction = 0;
            }
            if (direction === 2) {
              direction = 3;
            }
          }
          // changing yPos
          if (currentYPos > containerHeight - 100) {
            if (direction === 0) {
              direction = 3;
            }
            if (direction === 1) {
              direction = 2;
            }
          } else if (currentYPos < 0) {
            if (direction === 2) {
              direction = 1;
            }
            if (direction === 3) {
              direction = 0;
            }
          }

          return direction;
        }

        currentDirection = changeDirection(currentDirection);
        icon.setAttribute("direction", currentDirection);

        currentXPos +=
          currentDirection === 0 || currentDirection === 3
            ? Math.abs(xSpeed)
            : -Math.abs(xSpeed);
        currentYPos +=
          currentDirection <= 1 ? Math.abs(ySpeed) : -Math.abs(ySpeed);

        function checkCollision(icon1, icon2) {
          const rect1 = icon1.getBoundingClientRect();
          const rect2 = icon2.getBoundingClientRect();

          return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
          );
        }

        // check for collisions with other icons
        const otherIcons = Array.from(icons).filter((i) => i !== icon);
        for (let otherIcon of otherIcons) {
          if (checkCollision(icon, otherIcon)) {
            let iconDirection = parseInt(icon.getAttribute("direction"));
            let otherIconDirection = parseInt(
              otherIcon.getAttribute("direction")
            );

            if (currentDirection === 0 || currentDirection === 2) {
              icon.setAttribute("direction", 3);
              otherIcon.setAttribute("direction", 1);
            } else {
              icon.setAttribute("direction", 2);
              otherIcon.setAttribute("direction", 0);
            }
            break;
          }
        }

        // update the icon position
        icon.style.left = `${currentXPos}px`;
        icon.style.top = `${currentYPos}px`;
      }

      function animate() {
        requestAnimationFrame(animate);
        moveIcon();
      }

      animate();
    });
  }, []);

  return (
    <>
      {props.icons.map((icon, index) => {
        const faIcon = {
          faCode,
          faCodeBranch,
          faCodeCommit,
          faDumbbell,
          faCodeFork,
          faCodeMerge,
          faCodePullRequest,
        }[icon];
        return (
          <>
            <FontAwesomeIcon icon={faIcon} key={index} />
          </>
        );
      })}
    </>
  );
}
