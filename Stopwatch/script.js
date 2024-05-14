let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    startTime = Date.now() - (lapCount > 1 ? localStorage.getItem("time") : 0);
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
  lapCount = 1;
  document.getElementById("laps").innerHTML = "";
  isRunning = false;
  localStorage.clear();
}

function lap() {
  if (isRunning) {
    const lapTime = Date.now() - startTime;
    const formattedTime = formatTime(lapTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount++}: ${formattedTime}`;
    document.getElementById("laps").appendChild(lapItem);
    localStorage.setItem("time", lapTime);
  }
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor(time % 1000);

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(3, "0");

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
