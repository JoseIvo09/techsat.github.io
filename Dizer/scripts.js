document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById("urlInput");
  const loadButton = document.getElementById("loadButton");
  const myFrame = document.getElementById("myFrame");

  if (loadButton) {
    loadButton.addEventListener('click', function() {
      if (myFrame && urlInput) {
        myFrame.src = urlInput.value;
      }
    });
  }

  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    const clock = document.getElementById("clock");
    if (clock) {
      clock.innerHTML = time;
    }
  }

  setInterval(updateClock, 1000);
});
