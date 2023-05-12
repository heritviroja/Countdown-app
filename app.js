const endDate = "01 January 2024 12:00 AM ";
const inputs = document.querySelectorAll("input");

document.getElementById("end-date").innerText = endDate;

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  const days = Math.floor(diff / 86400);
  const hours = Math.floor((diff - days * 86400) / 3600);
  const minutes = Math.floor((diff - days * 86400 - hours * 3600) / 60);
  const seconds = Math.floor(diff - days * 86400 - hours * 3600 - minutes * 60);
  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;
}

clock();

setInterval(() => {
  clock();
}, 1000);
