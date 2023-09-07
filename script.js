

const currentTime = new Date();
const day = currentTime.getDay();
const weeks = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
const week = weeks[day];
console.log(week);


const weekElement = document.getElementById("Week");
weekElement.innerHTML = week;

const localTime = currentTime.toLocaleTimeString();

setInterval(() => {
    const now = new Date();
    const utc_Time = now.toISOString().slice(11, 19);
    const localTime = now.toLocaleTimeString();
    const localTimeElement = document.getElementById("localTime");
    localTimeElement.innerHTML = localTime;
    const utcTime = document.getElementById("utcTime")
    utcTime.innerHTML = utc_Time;
}, 1000);










