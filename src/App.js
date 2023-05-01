import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const icons = Array.from(document.querySelectorAll("svg"));
    const container = document.querySelector(".App");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // alert(containerWidth);

    icons.forEach((icon) => {
      // Assigning a random starting position and set the style
      const xPos = Math.random() * containerWidth;
      const yPos = Math.random() * containerHeight;
      // console.log(xPos);
      // console.log(yPos);
      icon.style.left = `${xPos}px`;
      icon.style.top = `${yPos}px`;

      // Set a random speed and direction
      const xSpeed = 2;
      // const ySpeed = 16;

      // Move the icon on each animation frame
      function moveIcon() {
        // let currentXPos = parseInt(icon.style.left, 10);
        // let currentYPos = icon.style.top.replace("px", "");
        // console.log("current Y: " + currentYPos);
        // currentYPos += ySpeed;
        // console.log("new Y: " + currentYPos);
        // icon.style.top = `${currentYPos}px`;

        let currentXPos = parseInt(icon.style.left);
        console.log("current X: " + currentXPos);

        if (currentXPos > containerWidth + 50) {
          currentXPos = -50;
        } else {
          currentXPos += xSpeed;
        }
        console.log("new X: " + currentXPos);
        icon.style.left = `${currentXPos}px`;
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
    </div>
  );
}

export default App;
