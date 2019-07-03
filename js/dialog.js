'use srtict';

var setup = document.querySelector('.setup');
var upload = document.querySelector('.upload');

upload.addEventListener('mousedown', function (evt) {
 evt.preventDefault();

 var moves = false;

 var startCoords = {
  x: evt.clientX,
  y: evt.clientY,
 }

 var onMouseMove = function (moveEvt) {
  moveEvt.preventDefault();

  moves = true; // Флаг меняется если окно двигается

  var shift = {
   x: startCoords.x - moveEvt.clientX,
   y: startCoords.y - moveEvt.clientY
  }
  
  startCoords = {
   x: moveEvt.clientX,
   y: moveEvt.clientY
  };

  setup.style.top = (setup.offsetTop - shift.y) + 'px';
  setup.style.left = (setup.offsetLeft - shift.x) + 'px';
 };

 var onMouseUp = function (upEvt) {
  if (moves) {
   var onClickPreventDefault = function (evt) {
     evt.preventDefault();
     upload.removeEventListener('click', onClickPreventDefault)
   };
   upload.addEventListener('click', onClickPreventDefault);
  };
  
  startCoords = {
   x: upEvt.clientX,
   y: upEvt.clientY
  };

  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
 };

 document.addEventListener('mousemove', onMouseMove);
 document.addEventListener('mouseup', onMouseUp);
})
