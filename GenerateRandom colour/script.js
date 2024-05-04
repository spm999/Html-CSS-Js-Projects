const body = document.body;
let colourInterval;
// Generate a random color
function getRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct and return the random color in RGB format
    return `rgb(${red}, ${green}, ${blue})`;
}

const startRandomColourGenerate = function () {
    colourInterval = setInterval(function () {
        body.style.backgroundColor = getRandomColor()
    }, 1000)
}

const stopRandomColourGenerate = function () {
    clearInterval(colourInterval)
}

document.getElementById('start').addEventListener('click', function () {
    startRandomColourGenerate();
})

document.getElementById('stop').addEventListener('click', function () {
    stopRandomColourGenerate();

})