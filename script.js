// 1. Create number of divs per side needed for square.
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

function createSquare(noPerSide=16) {
    squareSize = calcSquareSize(noPerSide)
    for (i = 0; i < noPerSide; i++){
        const divHorizontal = document.createElement("div");
        divHorizontal.style.display = "flex";
        for (j = 0; j < noPerSide; j++){
            const divVertical = document.createElement("div");
            divVertical.classList.add("square");
            divVertical.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
            divHorizontal.appendChild(divVertical);}
        container.appendChild(divHorizontal)}
}

function addHoverEffect(){
    const squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach(div => div.addEventListener("mouseenter", () => div.classList.add("hover")))
}

function calcSquareSize(squaresPerSide, containerSize=960, borderWidth=1) {
    const squareSize = Math.floor((containerSize - (2 * borderWidth * squaresPerSide)) / squaresPerSide)
    return squareSize
}

createSquare();
addHoverEffect();

function createNewSquare(){
    let noOfSquares = parseInt(prompt("Choose the length of the square sides:"));
    if (noOfSquares > 100) {
        noOfSquares = parseInt(prompt("Choose 100 or fewer squares:"));}
    container.replaceChildren();
    createSquare(noOfSquares);
    addHoverEffect();
}

button.addEventListener("click", createNewSquare)