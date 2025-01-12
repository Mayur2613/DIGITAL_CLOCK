// script.js

function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();  // Get current time
    let hours = now.getHours();  // Get current hours
    let minutes = now.getMinutes();  // Get current minutes
    let seconds = now.getSeconds();  // Get current seconds
  
    // Add leading zero to single digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Display the time
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display time immediately when the page loads
  updateClock();
  