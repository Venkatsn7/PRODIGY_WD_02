// JavaScript for Stopwatch Functionality
let timer;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function() {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    updateDisplay();
    document.getElementById('lap-times').innerHTML = "<h2>Lap Times</h2>";
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapTimesDiv = document.getElementById('lap-times');
        lapTimesDiv.innerHTML += `<div>${lapTime}</div>`;
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    const [hours, minutes, seconds] = formatTime(elapsedTime).split(':');
    display.innerHTML = `<span class="time-part hours">${hours}</span>:<span class="time-part minutes">${minutes}</span>:<span class="time-part seconds">${seconds}</span>`;
}

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
