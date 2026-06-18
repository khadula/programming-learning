let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let timer = null;

function start() {
    if (!isRunning) {
        isRunning = true;

        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        elapstedTime = Date.now() - startTime;
        clearInterval(timer);
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("time").textContent = `00:00:00:00`;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // convert milliseconds to hours
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    // convert ms to minutes
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);   // % 60 so it resets once it hits 60

    // convert ms to minutes
    let seconds = Math.floor(elapsedTime / 1000 % 60);

    // make ms more readable
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}



const startButton = document.getElementById('start');
startButton.addEventListener('click', start);

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stop);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);