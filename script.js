const container = document.querySelector(".container");
const cells = []; //array that will contain all the cells
let mouseDown = false;
let columns = 60;
let cellNumber = columns**2;

container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

/* 
creates all the divs that will go into the painting
grid and appends them into the dom */
for (let i = 0; i < cellNumber; i++) {
  cells.push(document.createElement("div"));
  cells[i].setAttribute("draggable", "false");
  container.appendChild(cells[i]);
}

// This is to know if a mouse button is being pressed over the container
container.addEventListener("mousedown", () => (mouseDown = true));
container.addEventListener("mouseup", () => (mouseDown = false));

for (let i = 0; i < cellNumber; i++) {
  cells[i].addEventListener("mouseover", () => {
    if (mouseDown) {
      cells[i].style.backgroundColor = "red";
    }
  });
  
  cells[i].addEventListener(
    "click",
    () => (cells[i].style.backgroundColor = "red")
  );
}
