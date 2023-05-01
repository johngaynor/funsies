import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseClock, faPoo } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const icons = Array.from(document.querySelectorAll("svg"));
    const container = document.querySelector(".App");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // alert(containerWidth);

    icons.forEach((icon, index) => {
      // Assigning a random starting position and set the style
      const xPos = Math.random() * containerWidth;
      const yPos = Math.random() * containerHeight;
      icon.style.left = `${xPos}px`;
      icon.style.top = `${yPos}px`;

      const direction = Math.floor(Math.random() * 4);
      // console.log("index: " + index + " number: " + direction);

      // Set a random speed and direction
      var xSpeed = 0.25;
      var ySpeed = 0.5;

      // Set direction - 0: SE, 1: SW, 2: NW, 3: NE
      switch (direction) {
        case 0:
          break;
        case 1:
          xSpeed = -xSpeed;
          break;
        case 2:
          // xSpeed = -xSpeed;
          // ySpeed = -Math.abs(ySpeed);
          break;
        case 3:
          ySpeed = -ySpeed;
          icon.style.color = "red";
          break;
      }

      // Move the icon on each animation frame
      function moveIcon() {
        // get current positions
        let currentXPos = parseFloat(icon.style.left);
        let currentYPos = parseFloat(icon.style.top);

        // changing xPos
        if (currentXPos > containerWidth + 50) {
          currentXPos = -50;
        } else if (currentXPos < -50) {
          currentXPos = containerWidth + 50;
        } else {
          currentXPos += xSpeed;
        }

        // changing yPos
        if (currentYPos > containerHeight + 50) {
          currentYPos = -50;
        } else if (currentYPos < -50) {
          currentYPos = containerHeight + 50;
        } else {
          currentYPos += ySpeed;
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
    <div className="App">
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
      <FontAwesomeIcon icon={faPoo} />
    </div>
  );
}

export default App;
