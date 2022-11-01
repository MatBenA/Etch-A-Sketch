const container = document.querySelector(".container");
const cells = []; //array that will contain all the cells
let mouseDown = false;
let columns = 60; //number of columns
let cellNumber = columns ** 2;  //number of cells = columns²



//changes the number of columns in the grid
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

// adds event listener to every cell to paint them
for (let i = 0; i < cellNumber; i++) {
  
  //paints the cell if the mouse is over it and if a mouse button is being pressed
  cells[i].addEventListener("mouseover", () => {
    if (mouseDown) {
      cells[i].style.backgroundColor = "purple";
    }
  });

  //paints the cell when clicked
  cells[i].addEventListener(
    "click",
    () => (cells[i].style.backgroundColor = "purple")
  );
}

//sets the reset button and calls the function that clears the grid
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetFunc);

//function to clear the grid
function resetFunc(){
  for (let i = 0; i < cellNumber; i++){
    cells[i].style.backgroundColor = "transparent";
  }
}
