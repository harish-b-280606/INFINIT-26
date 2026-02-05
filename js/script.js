const countDownDate = new Date("Mar 13, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = countDownDate - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  document.getElementById("countdown").innerText =
    `Event starts in: ${d} Days ${h} Hours`;
}, 1000);
