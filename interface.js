let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});

canvas2 = document.getElementById("canvas_information")
ctx = canvas2.getContext('2d')
ctx.fillStyle = "rgb(0, 0, 0)"
ctx.font = "32px Arial"
ctx.strokeText("73.4% Glock 17", 10, 40)
ctx.strokeText("12.8% Sig Sauer P220", 10, 90)
ctx.fillText("73.4% Glock 17", 10, 40)
ctx.fillText("12.8% Sig Sauer P220", 10, 90)
