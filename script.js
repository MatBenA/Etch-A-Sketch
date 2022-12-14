const container = document.querySelector(".container");
const cells = []; //array that will contain all the cells
let mouseDown = false;

let columns = 20; //default number of columns
let cellNumber = columns ** 2; //number of cells = columns²

//changes the number of columns in the grid

/* 
creates all the divs that will go into the painting
grid and appends them into the dom */
createGrid();
function createGrid() {
  //changes the number of columns in the grid
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  //creates the cells
  for (let i = 0; i < cellNumber; i++) {
    cells.push(document.createElement("div"));
    cells[i].setAttribute("class", "cell");
    cells[i].style.backgroundColor = "white";
    container.appendChild(cells[i]);
  }

  paintCells();
}

//removes all the cell divs from the DOM
function removeGrid() {
  for (let i = 0; i < cellNumber; i++) {
    container.removeChild(cells[i]);
  }
}

// This is to know if a mouse button is being pressed over the container
container.addEventListener("mousedown", () => (mouseDown = true));
container.addEventListener("mouseup", () => (mouseDown = false));

// adds event listener to every cell to paint them
paintCells();
function paintCells() {
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
}
//sets the reset button and calls the function that clears the grid
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", clearGrid);

//function to clear the grid
function clearGrid() {
  for (let i = 0; i < cellNumber; i++) {
    cells[i].style.backgroundColor = "white";
  }
}

//button to change grid size
const gridSize = document.querySelector(".grid-size");
gridSize.addEventListener("click", resizeGrid);

//removes the all the grid cells and creates a new grid with the number of columns given
function resizeGrid() {
  let limit = false;
  do {  
    switch (limit) {
      case false:
        columns = prompt("Insert new grid size:");
        break;
      case true:
        columns = prompt("ERROR: The limit is 100 \n Insert new grid size:");
        break;
    }
    limit = true;
  } while (columns > 100);  //This while is to set a max limit to the input
  
  columns = parseInt(columns); //transforms from string to integer

  clearGrid();
  removeGrid();

  cellNumber = columns ** 2; //number of cells = columns²

  createGrid();
}
