const content = document.querySelector(".content");



const cells = [];
for(i = 0; i < 256; i++){
    cells.push(document.createElement("div"));
    cells[i].classList.add("cell");
    content.appendChild(cells[i]);
}

//256 cells
