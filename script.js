

const currentTime = new Date();
const day = currentTime.getDay();
const weeks = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
const week = weeks[day];


const weekElement = document.getElementById("Week");
weekElement.innerHTML = week;

const localTime = currentTime.toLocaleTimeString();

setInterval(() => {
    const now = new Date();
    const utc_Time = now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
    const utcTimeElement = document.getElementById("utcTime");
    utcTimeElement.innerHTML = utc_Time;

    const localTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    const localTimeElement = document.getElementById("localTime");
    localTimeElement.innerHTML = localTime;
    // const difference = utc_Time - localTime;
    // const differenceElement = document.getElementById("difference");
    // differenceElement.innerHTML = difference;

}, 1000);


















