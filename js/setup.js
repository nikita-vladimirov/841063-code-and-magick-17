'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

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
