$(document).ready(function(){

var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");

		ctx.strokeStyle = '#00ffff';
		ctx.lineWidth = 15;
		ctx.shadowBlur= 15;
		ctx.shadowColor = '#00ffff'

		function degToRad(degree){
			var factor = Math.PI/180;
			return degree*factor;
		}

		function renderTime(){
		
			var xmas_d = new Date("2015/12/24 00:00:00");
			var now = new Date();			
			var calc = new Date(xmas_d.getTime() - now.getTime());

			var today = now.toDateString();
			var time = now.toLocaleTimeString();
			var hrs = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();
			var mil = now.getMilliseconds();
			var mil2 = 1000-now.getMilliseconds();
			var smoothsec = sec+(mil/1000);
			var smoothmin = min+(smoothsec/60);
			var time2 = (24*(calc.getDate()-1))+(24-calc.getHours()+1)+":"+calc.getMinutes()+":"+calc.getSeconds()+"";

			
			//Background
			gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
			gradient.addColorStop(0, "#03303a");
			gradient.addColorStop(1, "#000");
			ctx.fillStyle = gradient;
			//ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
			ctx.fillRect(0, 0, 500, 500);
			//Hours
			ctx.beginPath();
			ctx.arc(250,250,200, degToRad(270), degToRad((hrs*30)-90));
			ctx.stroke();
			//Minutes
			ctx.beginPath();
			ctx.arc(250,250,170, degToRad(270), degToRad((smoothmin*6)-90));
			ctx.stroke();
			//Seconds
			ctx.beginPath();
			ctx.arc(250,250,140, degToRad(270), degToRad((smoothsec*6)-90));
			ctx.stroke();
			
			
			if(calc.getUTCMonth()==0){
				//Date
				ctx.font = "25px Helvetica";
				ctx.fillStyle = 'rgba(00, 255, 255, 1)'
				ctx.fillText("残り時間", 200, 250);
				//Time
				ctx.font = "25px Helvetica Bold";
				ctx.fillStyle = 'rgba(00, 255, 255, 1)';
				ctx.fillText(time2+":"+mil2, 170, 280);
			}else{
				//Date
				ctx.font = "25px Helvetica";
				ctx.fillStyle = 'rgba(00, 255, 255, 1)'
				ctx.fillText("クリスマスが", 180, 250);

				//Time
				ctx.font = "25px Helvetica Bold";
				ctx.fillStyle = 'rgba(00, 255, 255, 1)';
				ctx.fillText("始まりました", 180, 285);
			}
			

		}
		
		
		setInterval(renderTime, 40);
});