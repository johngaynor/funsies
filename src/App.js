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

      var xSpeed = 1;
      var ySpeed = 1;

      // console.log(xSpeed);
      // console.log(ySpeed);

      console.log("old xSpeed: " + xSpeed);
      console.log("old ySpeed: " + ySpeed);

      // Set a random speed and direction
      if (direction === 0) {
        xSpeed = Math.abs(xSpeed);
        ySpeed = Math.abs(ySpeed);
      } else if (direction === 1) {
        icon.style.color = "blue";
        xSpeed = -Math.abs(xSpeed);
        ySpeed = Math.abs(ySpeed);
      } else if (direction === 2) {
        icon.style.color = "green";
        xSpeed = -Math.abs(xSpeed);
        ySpeed = -Math.abs(ySpeed);
      } else if (direction === 3) {
        icon.style.color = "yellow";
        xSpeed = Math.abs(xSpeed);
        ySpeed = -Math.abs(ySpeed);
      }

      console.log("new xSpeed: " + xSpeed);
      console.log("new ySpeed: " + ySpeed);

      // Move the icon on each animation frame
      function moveIcon() {
        // get current positions
        let currentXPos = parseFloat(icon.style.left);
        let currentYPos = parseFloat(icon.style.top);
        console.log("currentXPos: " + currentXPos);
        console.log("currentYPos: " + currentYPos);

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

      // moveIcon();
      // moveIcon();
      // moveIcon();
      // moveIcon();

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
    </div>
  );
}

export default App;
