/**lineCap 线条帽子*/
// window.onload = function() {
//   var canvas = document.getElementById("canvas");
//   canvas.width = 800;
//   canvas.height = 600;
//   var context = canvas.getContext("2d");

//   context.lineWidth = 50;
//   context.strokeStyle = "#1BAAAA";

//   context.beginPath();
//   context.moveTo(100, 100);
//   context.lineTo(700, 100);
//   context.lineCap = "butt";
//   context.stroke();

//   context.beginPath();
//   context.moveTo(100, 300);
//   context.lineTo(700, 300);
//   context.lineCap = "round";
//   context.stroke();

//   context.beginPath();
//   context.moveTo(100, 500);
//   context.lineTo(700, 500);
//   context.lineCap = "square";
//   context.stroke();

//   context.lineWidth = 3;
//   context.strokeStyle = "black";

//   context.beginPath();
//   context.moveTo(100, 0);
//   context.lineTo(100, 600);
//   context.moveTo(700, 0);
//   context.lineTo(700, 600);
//   context.stroke();
// }


/**lineJoin 线条的的连接处*/
// window.onload = function() {
//   var canvas = document.getElementById("canvas");
//   canvas.width = 800;
//   canvas.height = 600;
//   var context = canvas.getContext("2d");

//   context.beginPath();
//   context.moveTo(100, 100);
//   context.lineTo(300, 300);
//   context.lineTo(100, 500);
//   context.lineJoin = "miter";
//   context.lineWidth = 20;
//   context.strokeStyle = "red";
//   context.stroke();

//   context.beginPath();
//   context.moveTo(300, 100);
//   context.lineTo(500, 300);
//   context.lineTo(300, 500);
//   context.lineJoin = "bevel";
//   context.lineWidth = 20;
//   context.strokeStyle = "blue";
//   context.stroke();

//   context.beginPath();
//   context.moveTo(500, 100);
//   context.lineTo(700, 300);
//   context.lineTo(500, 500);
//   context.lineJoin = "round";
//   context.lineWidth = 20;
//   context.strokeStyle = "black";
//   context.stroke();
// }


/**其实当我们设置lineJoin为miter时，会解锁一个属性miterLimit 
 * miterLimit：设置最大斜接长度，如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示
*/
// window.onload = function() {
//   var canvas = document.getElementById("canvas");
//   canvas.width = 800;
//   canvas.height = 600;
//   var context = canvas.getContext("2d");


//   context.beginPath();
//   context.moveTo(100, 100);
//   context.lineTo(300, 300);
//   context.lineTo(100, 400);
//   context.lineJoin = "miter";
//   context.miterLimit = 1;
//   context.lineWidth = 20;
//   context.strokeStyle = "red";
//   context.stroke();
// }


/**高级线段绘制举栗 */
window.onload = function() {
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;
  var context = canvas.getContext("2d");

  // // 实例1: 圆形端点,斜角连接,在画布左上角
  // context.beginPath();
  // context.moveTo(0,0);
  // context.lineTo(180,0);
  // context.lineTo(180,180);
  // context.lineJoin = 'bevel';
  // context.lineCap = 'round';
  // context.lineWidth = 10;
  // context.strokeStyle = "red";
  // context.stroke();

  // // 实例2: 圆形端点,斜角连接,不在画布左上角
  // context.beginPath();
  // context.moveTo(300,200);
  // context.lineTo(480,200);
  // context.lineTo(480,380);
  // context.lineJoin = 'bevel';
  // context.lineCap = 'round';
  // context.lineWidth = 10;
  // context.strokeStyle = "blue";
  // context.stroke();

  // // 实例3: 平直端点,圆形连接,不在画布左上角
  // context.beginPath();
  // context.moveTo(600,400);
  // context.lineTo(780,400);
  // context.lineTo(780,580);
  // context.lineJoin = 'round';
  // context.lineCap = 'butt';
  // context.lineWidth = 10;
  // context.strokeStyle = "black";
  // context.stroke();

  //实例4：线段绘制原理探究，线宽根据线段的绘制轨迹向两边均匀扩展
  // context.beginPath();
  // context.moveTo(100,400);
  // context.lineTo(200,400);
  // context.lineTo(200,500);
  // context.lineTo(100,500);
  // context.lineTo(100,400);
  // context.lineCap = 'butt';
  // context.lineWidth = 10;
  // context.strokeStyle = "black";
  // context.stroke();

  // context.beginPath();
  // context.moveTo(100,400);
  // context.lineTo(200,400);
  // context.lineTo(200,500);
  // context.lineTo(100,500);
  // context.lineTo(100,400);
  // context.lineCap = 'butt';
  // context.lineWidth = 1;
  // context.strokeStyle = "#fff";
  // context.stroke();
}