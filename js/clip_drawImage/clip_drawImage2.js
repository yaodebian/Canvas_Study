//创建心形相框
window.onload = function() {
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;
  var context = canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, 800, 600);

  //drawImage测试
  // var img = new Image();
  // img.src = "../imgs/clip_drawImage/clip_drawImage2.jpg";
  // img.onload = function() {
  //   context.drawImage(img, 200, 50);
  // }

  context.beginPath();
  context.moveTo(400, 260);
  context.bezierCurveTo(450, 220, 450, 300, 400, 315);
  context.bezierCurveTo(350,300,350,220,400,260);
  context.clip();
  context.closePath();

  var img = new Image();
  img.src = "../imgs/clip_drawImage/clip_drawImage2.jpg";
  img.onload = function(){
      context.drawImage(img,348,240,100,100);
  }
}