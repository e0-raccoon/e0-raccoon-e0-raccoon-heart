window.onload = function() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    
    // Function to draw the heart
    function drawHeart() {
      ctx.beginPath();
      ctx.moveTo(400, 300);
      ctx.fillStyle = 'red';
      
      // Left part of heart
      ctx.bezierCurveTo(400, 100, 100, 100, 400, 400);
      
      // Right part of heart
      ctx.bezierCurveTo(700, 100, 400, 100, 400, 300);
      
      ctx.fill();
    }
  
    // Function to display message
    function displayMessage() {
      ctx.font = "24px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Love you <3", canvas.width / 2, 100);
    }
  
    // Draw the heart and display the message
    drawHeart();
    displayMessage();
  };
  