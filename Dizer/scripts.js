document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById("urlInput");
  const loadButton = document.getElementById("loadButton");
  const myFrame = document.getElementById("myFrame");

  loadButton.addEventListener('click', function() {
    myFrame.src = urlInput.value;
  });

  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString(, { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    document.getElementById("clock").innerHTML = time;
  }

  setInterval(updateClock, 1000);
});
