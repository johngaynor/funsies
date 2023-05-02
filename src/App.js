import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseClock, faPoo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useSyncExternalStore } from "react";
import { INDEX_SIZE_ERR } from "domexception";

function App() {
  useEffect(() => {
    const icons = document.querySelectorAll("svg");
    const container = document.querySelector(".App");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight - 100;
    // alert(containerWidth);

    icons.forEach((icon, index) => {
      console.log(index);
      // Assigning a random starting position and set the style
      const xPos = Math.random() * containerWidth;
      const yPos = Math.random() * containerHeight;
      icon.style.left = `${xPos}px`;
      icon.style.top = `${yPos}px`;

      const direction = Math.floor(Math.random() * 4);

      var xSpeed = 0;
      // var ySpeed = 0;

      switch (direction) {
        case 0:
          icon.style.color = "red";
          xSpeed = 1;
          console.log("red index: " + index);
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
      }

      // Move the icon on each animation frame
      function moveIcon() {
        // get current positions
        let currentXPos = parseFloat(icon.style.left);
        let currentYPos = parseFloat(icon.style.top);
        currentXPos += xSpeed;
        // currentYPos += ySpeed;

        // changing xPos
        // if (currentXPos > containerWidth + 50) {
        //   currentXPos = -50;
        // } else if (currentXPos < -50) {
        //   currentXPos = containerWidth + 50;
        // } else {
        //   currentXPos += xSpeed;
        // }

        // changing yPos
        // if (currentYPos > containerHeight + 50) {
        //   currentYPos = -50;
        // } else if (currentYPos < -50) {
        //   currentYPos = containerHeight + 50;
        // } else {
        //   currentYPos += ySpeed;
        // }

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
    </div>
  );
}

export default App;
