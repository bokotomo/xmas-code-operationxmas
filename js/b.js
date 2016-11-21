/*
$(document).ready(function(){
	alert();
	var ctx_r = $('<canvas>').get(0).getContext('2d');
  $('body').append(ctx_r.canvas);
  ctx_r.canvas.height = 400;
  ctx_r.canvas.width = 600;
  $(ctx_r.canvas).css({
    position: 'absolute',
    top: '0'
  });
  var Blood = function(x,y,r,s){
    this.x = x;
    this.y = y;
    this.r = r;
    this.cy = y;
    this.speed = s;
  };
  Blood.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x +1,this.cy,this.r,0,Math.PI*2);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();   
  };
  var bloodDrops = [
    new Blood(  4,70,  1,  2),
    new Blood( 15,74,  1,1.5),
    new Blood( 49,72,1.5,  1),
    new Blood( 68,74,  2,1.7),
    new Blood(106,68,  1,1.3),
    new Blood(134,71,  1,1.9),
    new Blood(164,71,  1,1.4),
    new Blood(212,76,1.3,1.1),
    new Blood(263,72,1.8,0.7),
    new Blood(270,75,1.4,1.3),
    new Blood(311,72,1.8,1.2),
    new Blood(317,75,1.4,0.9),
    new Blood(363,68,0.8,1.3),
    new Blood(408,70,1.2,1.6),
    new Blood(466,67,0.8,1.3),
    new Blood(500,71,  1,1.2),
    new Blood(512,74,1.7,1.5),
    new Blood(546,74,1.7,0.8),
  ]
  var loop2 = function(){
    setTimeout(loop, 10)
    ctx_r.fillStyle = 'rgba(0,0,0,0.1)';
    ctx_r.fillRect(0,0,600,400);
    for(var i = 0; i < bloodDrops.length; ++i){
      bloodDrops[i].cy += bloodDrops[i].speed;
      if(bloodDrops[i].cy > 600) 
        bloodDrops[i].cy = bloodDrops[i].y;
      bloodDrops[i].draw();
    }
  };
  loop2();
  
 });
*/
  