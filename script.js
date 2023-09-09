

const currentTime = new Date();
const day = currentTime.getDay();
const weeks = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
const week = weeks[day];


const weekElement = document.getElementById("Week");
weekElement.innerHTML = week;


setInterval(() => {
    const now = Date.now();
    const utc_Time = now

    const utcTimeElement = document.getElementById("utcTime");
    utcTimeElement.innerHTML = utc_Time;

}, 500);


















