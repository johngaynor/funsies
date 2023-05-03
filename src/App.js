import "./App.css";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseClock, faPoo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useSyncExternalStore } from "react";

function App() {
  // const [iconDirection, setIconDirection] = useState(0);

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

        var xSpeed = 0.5;
        var ySpeed = 0.1;

        // switch statement to handle directions
        switch (currentDirection) {
          case 0:
            icon.style.color = "red";
            xSpeed = Math.abs(xSpeed);
            ySpeed = Math.abs(ySpeed);
            break;
          case 1:
            icon.style.color = "blue";
            xSpeed = -Math.abs(xSpeed);
            ySpeed = Math.abs(ySpeed);
            break;
          case 2:
            icon.style.color = "green";
            xSpeed = -Math.abs(xSpeed);
            ySpeed = -Math.abs(ySpeed);
            break;
          case 3:
            icon.style.color = "yellow";
            xSpeed = Math.abs(xSpeed);
            ySpeed = -Math.abs(ySpeed);
            break;
        }

        // var changedDirection = currentDirection;
        // changing xPos, containerWidth - 100 depends on the size of the icon
        if (currentXPos > containerWidth - 100) {
          if (currentDirection === 0) {
            currentDirection = 1;
          }
          if (currentDirection === 3) {
            currentDirection = 2;
          }
        } else if (currentXPos < 0) {
          if (currentDirection === 1) {
            currentDirection = 0;
          }
          if (currentDirection === 2) {
            currentDirection = 3;
          }
        }
        // changing yPos
        if (currentYPos > containerHeight - 100) {
          if (currentDirection === 0) {
            currentDirection = 3;
          }
          if (currentDirection === 1) {
            currentDirection = 2;
          }
        } else if (currentYPos < 0) {
          if (currentDirection === 2) {
            currentDirection = 1;
          }
          if (currentDirection === 3) {
            currentDirection = 0;
          }
        }

        icon.setAttribute("direction", currentDirection);

        currentXPos += xSpeed;
        currentYPos += ySpeed;

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
      {/* <FontAwesomeIcon icon={faPoo} />
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
      <FontAwesomeIcon icon={faPoo} /> */}
    </div>
  );
}

export default App;
