noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(400, 300);

canvas = createCanvas(400, 300);
canvas.position(420, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background("yellow");

document.getElementById("square_slide").innerHTML = "Width And Height of a Square will be = "+ difference +"px";
Fill("#F90093");
stroke("F90093");
square(noseX, noseY, difference);
}

function modelLoaded(){
console.log("poseNet is initialised");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX +" noseY = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWrist = " + leftWristX + " rightWristX = "+ rightWristX + " differance" + difference);

}
}
