import "./App.css";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseClock, faPoo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useSyncExternalStore } from "react";

function App() {
  useEffect(() => {
    const icons = document.querySelectorAll("svg");
    const container = document.querySelector(".App");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    icons.forEach((icon) => {
      // Assigning a random starting position and set the style
      const xPos = Math.random() * containerWidth;
      const yPos = Math.random() * containerHeight;
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

        var xSpeed = 2;
        var ySpeed = 2;

        // switch statement to handle directions -> this will get deleted soon
        switch (currentDirection) {
          case 0:
            icon.style.color = "red";
            break;
          case 1:
            icon.style.color = "blue";
            break;
          case 2:
            icon.style.color = "green";
            break;
          case 3:
            icon.style.color = "yellow";
            break;
        }

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
    <div className="App">
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
    </div>
  );
}

export default App;
