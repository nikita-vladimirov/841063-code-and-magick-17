'use strict';

var columnX = 155;
var columnY = 80;
var columnWidth = 40;
var columnHeight = 150;
var columnGap = 50;
var fontX = 240;

var cloudСoordinatesX = [120, 100, 520, 500, 520, 100];
var cloudСoordinatesY = [135, 270, 270, 135, 10, 10];

function getMaxValue(t) {
  var maxValue = t[0];

  for (var i = 0; i < t.length; i++) {
    if (t[i] > maxValue) {
      maxValue = t[i];
    }
  }
  return maxValue;
}

function drawCloud(ctx, startX, startY, step, colorCloud) {
  // startX - начальное значение для x
  // startY - начальное значение для y
  // step - отступ для тени
  // colorCloud - цвет заливки

  ctx.fillStyle = colorCloud;
  ctx.beginPath();
  ctx.moveTo(startX + step, startY + step);
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(cloudСoordinatesX[i] + step, cloudСoordinatesY[i] + step);
  }
  ctx.stroke();
  ctx.fill();
}

function getColorShade(colorRed, colorGreen, colorBlue) {
  var colorShade = 'rgba' + '(' +
                   colorRed + ', ' +
                   colorGreen + ', ' +
                   colorBlue + ', ' +
                   Math.random().toFixed(1) + ')';
  return colorShade;
}

function splitLine(winText) {
  return winText.split('\n');
}

function drawWinText(ctx, winText, lineX, lineY) {
  var structuredWinText = splitLine(winText);
  for (var i = 0; i < structuredWinText.length; i++) {
    ctx.fillText(structuredWinText[i], lineX, lineY * (i + 1));
  }
}

function getRectParameters(i, maxTime, times) {
  // Вычисление координаты x
  var rectX = columnX + (columnWidth + columnGap) * i;

  // Вычисление координаты y
  var rectY = columnY + columnHeight - columnHeight * times[i] / maxTime;

  // Ширина столбца
  var rectWidth = columnWidth;

  // Вычисление высоты столбца
  var rectHeight = (columnHeight * times[i]) / maxTime;

  return {
    rectX: rectX,
    rectY: rectY,
    rectWidth: rectWidth,
    rectHeight: rectHeight
  };
}

function drawRect(ctx, rectParameters) {
  return ctx.fillRect(rectParameters.rectX, rectParameters.rectY, rectParameters.rectWidth, rectParameters.rectHeight);
}

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, 100, 10, 10, 'rgba(0, 0, 0, 0.7)'); // Рисуем тень
  drawCloud(ctx, 100, 10, 0, '#ffffff'); // Рисуем облако

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  drawWinText(ctx, 'Ура вы победили!\nСписок результатов:', 150, 20);

  var maxTime = getMaxValue(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], columnX + (columnWidth + columnGap) * i, fontX);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getColorShade(0, 0, 255);
    }

    var rectParameters = getRectParameters(i, maxTime, times);
    drawRect(ctx, rectParameters);
  }
};
