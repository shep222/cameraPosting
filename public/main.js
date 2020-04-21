// const player = document.getElementById('player');
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// const captureButton = document.getElementById('capture');
const picArray = [];

var path = ["addressArea", "amountOwed", "cameraSection", "photos","last", "thankYou"];

var currentPosition = "addressArea";

function chooseFile() {
    document.getElementById('input').click()
}

function nextScreen() {
  document.getElementById(currentPosition).style.display = "none";
  var pos = path.indexOf(currentPosition);
  document.getElementById(path[pos + 1]).style.display = "block";
  currentPosition = path[pos + 1];
}

function lastScreen() {
  document.getElementById(currentPosition).style.display = "none";
  var pos = path.indexOf(currentPosition);
  document.getElementById(path[pos - 1]).style.display = "block";
  currentPosition = path[pos - 1];
}




// const constraints = {
//    // video: true
//   video: {facingMode: {exact: 'environment'}}
// }
//
// navigator.mediaDevices.getUserMedia(constraints)
//   .then((stream) => {
//     player.srcObject = stream;
//   });
//
//
//   function blink() {
//     document.getElementById('videoContainer').style.display = 'none';
//     document.getElementById('videoContainer2').style.display = 'block';
//
//      setTimeout(function() {
//         document.getElementById('videoContainer').style.display = 'block';
//         document.getElementById('videoContainer2').style.display = 'none';
//      }, 600);
//   }
