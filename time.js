let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let counter_down = setInterval(() => {
  let sec = seconds.innerHTML;
  sec--;
  seconds.innerHTML = sec.toString().padStart(2, "0");
  if (sec < 0) {
    seconds.innerHTML = 60;
    let min = minutes.innerHTML;
    min--;
    minutes.innerHTML = min.toString().padStart(2, "0");
  }
  if (minutes.innerHTML < 0) {
    minutes.innerHTML = 60;
    let hour = hours.innerHTML;
    hour--;
    hours.innerHTML = hour.toString().padStart(2, "0");
  }
  if (hours.innerHTML < 0) {
    hours.innerHTML = 24;
    let day = days.innerHTML;
    day--;
    days.innerHTML = day.toString().padStart(2, "0");
  }
}, 1000);
