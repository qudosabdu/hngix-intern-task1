

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


    // const localTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    // const localTimeElement = document.getElementById("localTime");
    // localTimeElement.innerHTML = localTime;
    // const difference = utc_Time - localTime;
    // const differenceElement = document.getElementById("difference");
    // differenceElement.innerHTML = difference;

}, 500);


















