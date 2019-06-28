'use strict';

function getRandomValue(min, max) {
  var randomValue = min + Math.random() * (max + 1 - min);
  randomValue = Math.floor(randomValue);
  return randomValue;
}

var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var name = wizardFirstNames[getRandomValue(0, wizardFirstNames.length - 1)] + ' ' + wizardLastNames[getRandomValue(0, wizardLastNames.length - 1)];

var coatColorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var coatColor = coatColorList[getRandomValue(0, coatColorList.length - 1)];

var eyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
var eyesColor = coatColorList[getRandomValue(0, eyesColorList.length - 1)];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

similarWizardTemplate.querySelector('.setup-similar-label').textContent = name;
similarWizardTemplate.querySelector('.wizard-coat').style.fill = coatColor;
similarWizardTemplate.querySelector('.wizard-eyes').style.fill = eyesColor;

var fragment = document.createDocumentFragment();
fragment.appendChild(similarWizardTemplate);

document.querySelector('.setup-similar-list').appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

var setupWindow = document.querySelector('.setup');
var buttonOpenSetup = document.querySelector('.setup-open');
var buttonCloseSetup = document.querySelector('.setup-close');
var buttonSubmit = document.querySelector('.setup-submit');

var toggleSetupWindow = function (button) {
  button.addEventListener('click', function () {
    setupWindow.classList.toggle('hidden');
  });
};

document.addEventListener('keydown', function (evt) {
  if (document.activeElement.className === 'setup-open-icon' && evt.keyCode === 13) {
    setupWindow.classList.remove('hidden');
  } else if (evt.keyCode === 27 && document.activeElement.className !== 'setup-user-name') {
    setupWindow.classList.add('hidden');
  } else if (evt.keyCode === 13 && document.activeElement.className === 'setup-close') {
    setupWindow.classList.add('hidden');
  } else if (evt.keyCode === 13) {
    buttonSubmit.click();
  }
});

toggleSetupWindow(buttonOpenSetup);
toggleSetupWindow(buttonCloseSetup);

var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var fireBall = document.querySelector('.setup-fireball-wrap');

var fireBallColorList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

wizardCoat.addEventListener('click', function () {
  var wizardCoatColor = coatColorList[getRandomValue(0, coatColorList.length - 1)];
  wizardCoat.style.fill = wizardCoatColor;
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  wizardCoatInput.value = wizardCoatColor;
});
wizardEyes.addEventListener('click', function () {
  var wizardEyesColor = eyesColorList[getRandomValue(0, eyesColorList.length - 1)];
  wizardEyes.style.fill = wizardEyesColor;
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  wizardEyesInput.value = wizardEyesColor;
});

fireBall.addEventListener('click', function () {
  var fireBallColor = fireBallColorList[getRandomValue(0, fireBallColorList.length - 1)];
  fireBall.style.backgroundColor = fireBallColor;
  fireBall.querySelector('input').value = fireBallColor;
});
