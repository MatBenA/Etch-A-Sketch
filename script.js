const content = document.querySelector(".content");

/* content.addEventListener('mouseover', () => {
    content.style.backgroundColor = "red";
});

content.addEventListener('mouseout', () => {
    content.style.backgroundColor = "beige";
}); */


const cells = [];
for(i = 0; i < 256; i++){
    cells.push(document.createElement("div"));
    cells[i].classList.add("cell");
    content.appendChild(cells[i]);

    colorCell(i);
}

function colorCell(cellNumber){
    cells[cellNumber].addEventListener("mouseover", () =>{
        cells[cellNumber].style.backgroundColor = "red";
    })

/*     cells[cellNumber].addEventListener("mouseout", () =>{
        cells[cellNumber].style.backgroundColor = "beige";
    }) */
}

//256 cells
