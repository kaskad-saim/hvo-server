const pumpingFunc = (pump, pumpHz) => {
  if (pumpHz.innerHTML >= 5) {
    pump.style.animationPlayState = 'running';
  } else {
    pump.style.animationPlayState = 'paused';
  }
};

const pump11 = document.querySelector('.mnemo__gif-pump-1-1 img');
const pump11Hz = document.querySelector('.n1-1-hz span');

pumpingFunc(pump11, pump11Hz);

const pump12 = document.querySelector('.mnemo__gif-pump-1-2 img');
const pump12Hz = document.querySelector('.n1-2-hz span');

pumpingFunc(pump12, pump12Hz);

const pump21 = document.querySelector('.mnemo__gif-pump-2-1 img');
const pump21Hz = document.querySelector('.n2-1-hz span');

pumpingFunc(pump21, pump21Hz);

const pump22 = document.querySelector('.mnemo__gif-pump-2-2 img');
const pump22Hz = document.querySelector('.n2-2-hz span');

pumpingFunc(pump22, pump22Hz);

// Исполнительный механизм
const klapanBorderLeft = (param, color) => {
  param.style = `border-left: 10px solid ${color}`;
};

const klapanBorderRight = (param, color) => {
  param.style = `border-right: 10px solid ${color}`;
};

const im1Left = document.querySelector('.mnemo__im1-left');
const im1Right = document.querySelector('.mnemo__im1-right');
const im1Value = document.querySelector('.im1-value');

const green = 'green';
const red = 'red';

if (im1Value.innerHTML >= 5) {
  klapanBorderLeft(im1Left, green);
  klapanBorderRight(im1Right, green);
} else {
  klapanBorderLeft(im1Left, red);
  klapanBorderRight(im1Right, red);
}

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

const levelE11 = document.querySelector('.column-e1-1__percent');
const valueE11Current = document.querySelector('.e1-1-value').innerHTML;
const levelE11Percent = document.querySelector('.span-e1-1');

const levelE12 = document.querySelector('.column-e1-2__percent');
const valueE12Current = document.querySelector('.e1-2-value').innerHTML;
const levelE12Percent = document.querySelector('.span-e1-2');

let screenWidth = window.innerWidth;

if ((levelE11, valueE11Current, levelE11Percent)) {
  levelObj(0, 1600, valueE11Current, 88, levelE11, levelE11Percent, 0, 100);
  if (screenWidth < 1280) {
    levelObj(0, 1600, valueE11Current, 70, levelE11, levelE11Percent, 0, 100);
  }
}

if ((levelE12, valueE12Current, levelE12Percent)) {
  levelObj(0, 1600, valueE12Current, 88, levelE12, levelE12Percent, 0, 100);
  if (screenWidth < 1280) {
    levelObj(0, 1600, valueE12Current, 70, levelE12, levelE12Percent, 0, 100);
  }
}
