//canvas的clip API接口使用
window.onload = function() {
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;
  var context =canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, 800, 600);

  //在屏幕上绘制一个大方块
  context.fillStyle = "black";
  context.fillRect(10, 10, 200, 200);
  //保存这之前的canvas绘制状态
  context.save();
  context.beginPath();

  //裁剪画布从(0,0)点至(50, 50)的正方形（canvas画布是根据画布状态进行构画的，前面的状态不会改变，下面的操作可以理解为向之后的状态进行裁剪操作）
  context.rect(0, 0, 50, 50);
  //之后的canvas绘制图案只有裁剪区域能够呈现
  context.clip();

  //红色圆
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.arc(100, 100, 100, 0, Math.PI * 2, false);
  //整圆
  context.stroke();
  context.closePath();

  //恢复之前保存的绘制状态，但是之前受裁剪区影响的绘制图案不会恢复正常状态
  context.restore();

  //再次裁剪整个画布
  context.beginPath();
  context.rect(0, 0, 500, 500);
  context.clip();

  //绘制一个没有裁剪的蓝线
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.arc(100,100,50,0,Math.PI * 2,false);
  //整圆
  context.stroke();
  context.closePath();
}