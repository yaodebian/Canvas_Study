//对canvas画布进行裁剪，并将裁剪区的图像转成base64编码格式进行返回
window.onload = function() {
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;
  var context =canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, 800, 600);

   //裁剪图像
   function clipImage(context, x1, y1, x2, y2){
    context.rect(x1, y1, x2, y2);
    context.clip();
  }

  //获取canvas画布相应区域的图像信息，并返回其base64格式的图像
  function getBase64Image(context, x1, y1, x2, y2) {
    var dataImg = context.getImageData(x1, y1, x2, y2);
    var canvas2 = document.createElement("canvas");
    var context2 = canvas2.getContext("2d");
    var width = Math.abs(x1 - x2);
    var height = Math.abs(y1 - y2);
    canvas2.width = width;
    canvas2.height = height;
    context2.putImageData(dataImg, 0, 0, 0, 0, width, height);
    var res = canvas2.toDataURL('image/jpeg');
    return res;
  }

  //首先确定裁剪区域，这样才能裁剪图像
  clipImage(context, 0, 0, 100, 100);

  //首先先向canvas画布中绘制一张图片
  var img = new Image();
  img.src = "../imgs/clip_drawImage/clip_drawImage1.jpg";
  img.onload = function () {
    //绘制图像
    context.drawImage(img, 0, 0);
    //获取base64格式图像信息
    var imgBase64 = getBase64Image(context, 0, 0, 100, 100);
    
    //现在我们来验证获取到的Base64格式图像
    var imgElement = document.createElement('img');
    imgElement.src = imgBase64;
    var box = document.getElementById('canvas-wrap');
    box.appendChild(imgElement);
  }
}
