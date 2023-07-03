const mainClock = document.querySelector(".clock-wrap span");
const amPm = document.querySelector(".AM-PM");
const secondsTime = document.querySelector(".time-seconds");

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  mainClock.innerText = `${hours}:${minutes}`;
  secondsTime.innerText = `${seconds}`;
  if (Number(hours) <= 12) {
    amPm.innerText = "AM";
  } else {
    amPm.innerText = "PM";
  }
}

setInterval(getTime, 1000);
