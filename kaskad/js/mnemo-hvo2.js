// Автоматическая шкала уровня в ёмкостях

const levelObj = (minScale, maxScale, current, maxSize, level, levelPercent, minSet, maxSet) => {
  let totalScale = maxScale - minScale;
  let valueFromMin = current - minScale;
  let percentage = (valueFromMin / totalScale) * 100;
  let px = (maxSize * percentage) / 100;
  levelPercent.innerHTML = parseFloat(percentage.toFixed(0));
  level.style.height = px + 'px';

  if (levelPercent.innerHTML <= minSet || levelPercent.innerHTML >= maxSet) {
    level.style.backgroundColor = 'red';
  }
};

const levelTitanE21 = document.querySelector('.column-e2-1__percent-titan');
const valueTitanE21Current = document.querySelector('.titan-e2-1-value').innerHTML;
const levelTitanE21Percent = document.querySelector('.titan-span-e2-1');

const levelMidaE21 = document.querySelector('.column-e2-1__percent-mida');
const valueMidaE21Current = document.querySelector('.mida-e2-1-value').innerHTML;
const levelMidaE21Percent = document.querySelector('.mida-span-e2-1');

const levelTitanE22 = document.querySelector('.column-e2-2__percent-titan');
const valueTitanE22Current = document.querySelector('.titan-e2-2-value').innerHTML;
const levelTitanE22Percent = document.querySelector('.titan-span-e2-2');

const levelMidaE22 = document.querySelector('.column-e2-2__percent-mida');
const valueMidaE22Current = document.querySelector('.mida-e2-2-value').innerHTML;
const levelMidaE22Percent = document.querySelector('.mida-span-e2-2');

let screenWidth = window.innerWidth;

if ((levelTitanE21, valueTitanE21Current, levelTitanE21Percent)) {
  levelObj(0, 1600, valueTitanE21Current, 88, levelTitanE21, levelTitanE21Percent, 0, 100);
  if (screenWidth < 1280) {
    levelObj(0, 1600, valueTitanE21Current, 75, levelTitanE21, levelTitanE21Percent, 0, 100);
  }
}

if ((levelMidaE21, valueMidaE21Current, levelMidaE21Percent)) {
  levelObj(0, 1600, valueMidaE21Current, 88, levelMidaE21, levelMidaE21Percent, 0, 100);
  if (screenWidth < 1280) {
    levelObj(0, 1600, valueMidaE21Current, 75, levelMidaE21, levelMidaE21Percent, 0, 100);
  }
}

if ((levelTitanE22, valueTitanE22Current, levelTitanE22Percent)) {
  levelObj(0, 1600, valueTitanE22Current, 88, levelTitanE22, levelTitanE22Percent, 0, 100);
  if (screenWidth < 1280) {
    levelObj(0, 1600, valueTitanE22Current, 75, levelTitanE22, levelTitanE22Percent, 0, 100);
  }
}

if ((levelMidaE22, valueMidaE22Current, levelMidaE22Percent)) {
  levelObj(0, 1600, valueMidaE22Current, 88, levelMidaE22, levelMidaE22Percent, 0, 100);
  if (screenWidth < 1280) {
    levelObj(0, 1600, valueMidaE22Current, 75, levelMidaE22, levelMidaE22Percent, 0, 100);
  }
}

// Вкл/откл анимации насосов

const pumpingFunc = (pump, pumpHz) => {
  if (pumpHz.innerHTML >= 5) {
    pump.style.animationPlayState = 'running';
  } else {
    pump.style.animationPlayState = 'paused';
  }
};

const pump41 = document.querySelector('.mnemo__gif-pump-4-1 img');
const pump41Hz = document.querySelector('.n4-1-hz span');

pumpingFunc(pump41, pump41Hz);

const pump42 = document.querySelector('.mnemo__gif-pump-4-2 img');
const pump42Hz = document.querySelector('.n4-2-hz span');

pumpingFunc(pump42, pump42Hz);

const pump51 = document.querySelector('.mnemo__gif-pump-5-1 img');
const pump51Hz = document.querySelector('.n5-1-hz span');

pumpingFunc(pump51, pump51Hz);

const pump52 = document.querySelector('.mnemo__gif-pump-5-2 img');
const pump52Hz = document.querySelector('.n5-2-hz span');

pumpingFunc(pump52, pump52Hz);

const pump61 = document.querySelector('.mnemo__gif-pump-6-1 img');
const pump61Hz = document.querySelector('.n6-1-hz span');

pumpingFunc(pump61, pump61Hz);

const pump62 = document.querySelector('.mnemo__gif-pump-6-2 img');
const pump62Hz = document.querySelector('.n6-2-hz span');

pumpingFunc(pump62, pump62Hz);

const pump63 = document.querySelector('.mnemo__gif-pump-6-3 img');
const pump63Hz = document.querySelector('.n6-3-hz span');

pumpingFunc(pump63, pump63Hz);

// Исполнительный механизм

const klapanBorderLeft = (param, color) => {
  param.style = `border-left: 12px solid ${color}`;
};

const klapanBorderRight = (param, color) => {
  param.style = `border-right: 12px solid ${color}`;
};

const im2Left = document.querySelector('.mnemo__im2-left');
const im2Right = document.querySelector('.mnemo__im2-right');
const im2Value = document.querySelector('.im2-value');

const green = 'green';
const red = 'red';

if (im2Value.innerHTML >= 5) {
  klapanBorderLeft(im2Left, green);
  klapanBorderRight(im2Right, green);
} else {
  klapanBorderLeft(im2Left, red);
  klapanBorderRight(im2Right, red);
}