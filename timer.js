document.addEventListener("DOMContentLoaded", function() {
  const countElement = document.getElementById('counter');
  let countValue = Number(countElement.textContent);

  function updateClock() {
    countValue++;
    countElement.textContent = countValue;
  }

  updateClock();
  window.setInterval(updateClock, 1800);
});
