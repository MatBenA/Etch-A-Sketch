const content = document.querySelector(".content");
const cells = [];

//creates all the divs that will go into the painting grid and appends them into the dom
for(i = 0; i < 256; i++){
    cells.push(document.createElement("div"));
    cells[i].classList.add("cell");
    content.appendChild(cells[i]);

    //calls the function in charge of painting the grid
    paint(i);
}

/* Colors the cells when the mouse is over them*/
function colorCell(cellNumber){
    cells[cellNumber].addEventListener("mouseover", () =>{
        cells[cellNumber].style.backgroundColor = "red";
    })
}

/* Checks if a mouse button is being pressed over the conteiner,
   if thats true then execute the colorCell() function */
function paint(cellNumber){
    content.addEventListener("mousedown",() => colorCell(cellNumber));
}

//256 cells
