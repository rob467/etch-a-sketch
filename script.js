// 1. Create number of divs per side needed for square.
const container = document.querySelector(".container");

function createSquare(noPerSide=16) {
    for (i = 0; i < noPerSide; i++){
        const divHorizontal = document.createElement("div");
        for (j = 0; j < noPerSide; j++){
            const divVertical = document.createElement("div");
            divVertical.classList.add("square");
            divHorizontal.appendChild(divVertical);}
        container.appendChild(divHorizontal)}
}

createSquare();


// 3. Add hover effect when mouse hovers across grid divs.

const squareDivs = document.querySelectorAll(".square")

squareDivs.forEach(div => div.addEventListener("mouseenter", () => div.classList.toggle("hover")))
// 4. Add button that lets user select number of divs per side.
