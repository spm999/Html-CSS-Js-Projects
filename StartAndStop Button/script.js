const counterId = document.getElementById('counter');
let counter = 0;
let intervalChange;

const startCounter = function () {
    intervalChange = setInterval(function () {
        counter++;
        counterId.innerHTML = counter;
    }, 2000);
}

const stopCounter = function () {
    clearInterval(intervalChange);
}

document.querySelector('#start').addEventListener('click', function () {
    startCounter(); // Start the counter when the start button is clicked
});

document.querySelector('#stop').addEventListener('click', function () {
    stopCounter(); // Stop the counter when the stop button is clicked
});
