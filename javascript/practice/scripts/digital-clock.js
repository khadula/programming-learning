function updateClock() {
    // get the current date and the hours, minutes, seconds
    const now = new Date();

    // get hours and convert from military time
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    // pad start is to set some spacing and put 0 before single digit numbers
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();

const clockInterval = setInterval (() => {
    updateClock();
}, 1000);