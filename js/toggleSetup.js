'use strict';

var addToggleSetupWindow = function (button) {
  button.addEventListener('click', function () {
    setupWindow.classList.toggle('hidden');
  });
};

var setupWindow = document.querySelector('.setup');
var buttonOpenSetup = document.querySelector('.setup-open');
var buttonCloseSetup = document.querySelector('.setup-close');

document.addEventListener('keydown', function (evt) {
  var activeElementClass = document.activeElement.className;
  var buttonSubmit = document.querySelector('.setup-submit');
  if (activeElementClass === 'setup-open-icon' && evt.keyCode === 13) {
    setupWindow.classList.remove('hidden');
  } else if (evt.keyCode === 27 && activeElementClass !== 'setup-user-name') {
    setupWindow.classList.add('hidden');
  } else if (evt.keyCode === 13 && activeElementClass === 'setup-close') {
    setupWindow.classList.add('hidden');
  } else if (evt.keyCode === 13) {
    buttonSubmit.click();
  }
});

addToggleSetupWindow(buttonOpenSetup);
addToggleSetupWindow(buttonCloseSetup);
