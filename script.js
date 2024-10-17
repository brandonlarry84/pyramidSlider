
document.getElementById("heightRange").addEventListener("input", determineHeightAndThenDrawPyramid);


document.getElementById("brickSymbol").addEventListener("change", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
    const height = parseInt(document.getElementById("heightRange").value);
    const brickSymbol = document.getElementById("brickSymbol").value;
    
    
    document.getElementById("heightValue").textContent = height;

    
    document.getElementById("pyramid").innerHTML = "";

    
    createPyramid(height, brickSymbol);
}

function createPyramid(height, brickSymbol) {
    const pyramidDiv = document.getElementById("pyramid");

    for (let row = 1; row <= height; row++) {
        let numOfSpaces = height - row;
        let numOfBricks = row;

        
        let rowStr = " ".repeat(numOfSpaces) + brickSymbol.repeat(numOfBricks);

        
        const lineElement = document.createElement("p");
        lineElement.style.whiteSpace = "pre";
        lineElement.textContent = rowStr;
        pyramidDiv.appendChild(lineElement);
    }
}