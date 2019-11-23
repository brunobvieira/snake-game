window.onload = function() {
  const canvas = document.getElementById("snake");
  const context = canvas.getContext("2d");




  let snake = new Snake(context, 10);
  snake.draw();
};
