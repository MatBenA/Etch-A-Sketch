const container = document.querySelector(".container");

const cells = [];
for(i = 0; i < 256; i++){
    cells.push(document.createElement("div"));
    cells[i].classList.add("cell");
    container.appendChild(cells[i]);
}
//256 cells