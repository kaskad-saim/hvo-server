const otsekatel = document.querySelector('.mnemo__klapan-img img');
const otsekatelGazaTop = document.querySelector('.mnemo__otsekatel-top');
const otsekatelGazaBot = document.querySelector('.mnemo__otsekatel-bot');

const klapanBorderTop = (param, color) => {
  param.style = `border-left: 15px solid ${color}`;
};

const klapanBorderBottom = (param, color) => {
  param.style = `border-right: 15px solid ${color}`;
};

const green = 'green';
const red = 'red';




if (otsekatel.src == 'http://techsite6/KASKAD/images/true.gif') {
  klapanBorderTop(otsekatelGazaTop, green);
  klapanBorderBottom(otsekatelGazaBot, green);
} else {
  klapanBorderTop(otsekatelGazaTop, red);
  klapanBorderBottom(otsekatelGazaBot, red);
}

const otsekatel2 = document.querySelector('.mnemo__klapan-img img');
const otsekatel2GazaTop = document.querySelector('.mnemo__otsekatel2-top');
const otsekatel2GazaBot = document.querySelector('.mnemo__otsekatel2-bot');

if (otsekatel2.src == 'http://techsite6/KASKAD/images/true.gif') {
  klapanBorderTop(otsekatel2GazaTop, green);
  klapanBorderBottom(otsekatel2GazaBot, green);
} else {
  klapanBorderTop(otsekatel2GazaTop, red);
  klapanBorderBottom(otsekatel2GazaBot, red);
}

const svecha = document.querySelector('.mnemo__klapan-img img');
const svechaTop = document.querySelector('.mnemo__svecha-top');
const svechaBot = document.querySelector('.mnemo__svecha-bot');

if (svecha.src == 'http://techsite6/KASKAD/images/false.gif') {
  klapanBorderTop(svechaTop, green);
  klapanBorderBottom(svechaBot, green);
} else {
  klapanBorderTop(svechaTop, red);
  klapanBorderBottom(svechaBot, red);
}

const zapalnik = document.querySelector('.mnemo__zapalnik-img img');
const zapalnikTop = document.querySelector('.mnemo__zapalnik-top');
const zapalnikBot = document.querySelector('.mnemo__zapalnik-bot');

if (zapalnik.src == 'http://techsite6/KASKAD/images/true.gif') {
  klapanBorderTop(zapalnikTop, green);
  klapanBorderBottom(zapalnikBot, green);
} else {
  klapanBorderTop(zapalnikTop, red);
  klapanBorderBottom(zapalnikBot, red);
}

// ---------------------Аварийная сигнализация--------------------

// Давление воздуха низко

const davlVozduhNizko = document.querySelector('.davl-vozduh-nizko-img img');
const davlVozduhNizkoBg = document.querySelector('.davl-vozduh-nizko');

if (davlVozduhNizko.src == 'http://techsite6/KASKAD/images/true.gif') {
  davlVozduhNizkoBg.style.backgroundColor = '#db5454 ';
} else {
  davlVozduhNizkoBg.style.backgroundColor = '#635b5b';
}

// Санкционированный останов котла

const ruchnoiOstanovKotla = document.querySelector('.ruchnoi-ostanov-kotla-img img');
const ruchnoiOstanovKotlaBg = document.querySelector('.ruchnoi-ostanov-kotla');

if (ruchnoiOstanovKotla.src == 'http://techsite6/KASKAD/images/true.gif') {
  ruchnoiOstanovKotlaBg.style.backgroundColor = '#db5454';
} else {
  ruchnoiOstanovKotlaBg.style.backgroundColor = '#635b5b';
}

// Давление газа низко

const davlGazNizko = document.querySelector('.davl-gaz-nizko-img img');
const davlGazNizkoBg = document.querySelector('.davl-gaz-nizko');

if (davlGazNizko.src == 'http://techsite6/KASKAD/images/true.gif') {
  davlGazNizkoBg.style.backgroundColor = '#db5454';
} else {
  davlGazNizkoBg.style.backgroundColor = '#635b5b';
}

// Давление газа высоко

const davlGazVisoko = document.querySelector('.davl-gaz-visoko-img img');
const davlGazVisokoBg = document.querySelector('.davl-gaz-visoko');

if (davlGazVisoko.src == 'http://techsite6/KASKAD/images/true.gif') {
  davlGazVisokoBg.style.backgroundColor = '#db5454';
} else {
  davlGazVisokoBg.style.backgroundColor = '#635b5b';
}

// Уровень в барабане котла низок

const urovenNizko = document.querySelector('.uroven-nizko-img img');
const urovenNizkoBg = document.querySelector('.uroven-nizko');

if (urovenNizko.src == 'http://techsite6/KASKAD/images/true.gif') {
  urovenNizkoBg.style.backgroundColor = '#db5454';
} else {
  urovenNizkoBg.style.backgroundColor = '#635b5b';
}

// Уровень в барабане котла высок

const urovenVisoko = document.querySelector('.uroven-visoko-img img');
const urovenVisokoBg = document.querySelector('.uroven-visoko');

if (urovenVisoko.src == 'http://techsite6/KASKAD/images/true.gif') {
  urovenVisokoBg.style.backgroundColor = '#db5454';
} else {
  urovenVisokoBg.style.backgroundColor = '#635b5b';
}

// Факел горелки погас

const fakelPogas = document.querySelector('.fakel-pogas-img img');
const fakelPogasBg = document.querySelector('.fakel-pogas');

if (fakelPogas.src == 'http://techsite6/KASKAD/images/true.gif') {
  fakelPogasBg.style.backgroundColor = '#db5454';
} else {
  fakelPogasBg.style.backgroundColor = '#635b5b';
}

// Разрежение мало

const razrezhMalo = document.querySelector('.razrezh-malo-img img');
const razrezhMaloBg = document.querySelector('.razrezh-malo');

if (razrezhMalo.src == 'http://techsite6/KASKAD/images/true.gif') {
  razrezhMaloBg.style.backgroundColor = '#db5454';
} else {
  razrezhMaloBg.style.backgroundColor = '#635b5b';
}

//Дымосос отключен

const fanOff = document.querySelector('.fan-off-img img');
const fanOffBg = document.querySelector('.fan-off');

if (fanOff.src == 'http://techsite6/KASKAD/images/true.gif') {
  fanOffBg.style.backgroundColor = '#db5454';
} else {
  fanOffBg.style.backgroundColor = '#635b5b';
}

// --------------------Индикация работы котла--------------------

// Котел остановлен

const ostanovKotla = document.querySelector('.ostanov-kotla-img img');
const ostanovKotlaBg = document.querySelector('.ostanov-kotla');

if (ostanovKotla.src == 'http://techsite6/KASKAD/images/true.gif') {
  ostanovKotlaBg.style.backgroundColor = '#db5454';
} else {
  ostanovKotlaBg.style.backgroundColor = '#635b5b';
}

// Режим вентиляции

const ventKotla = document.querySelector('.vent-kotla-img img');
const ventKotlaBg = document.querySelector('.vent-kotla');

if (ventKotla.src == 'http://techsite6/KASKAD/images/true.gif') {
  ventKotlaBg.style.backgroundColor = 'green';
} else {
  ventKotlaBg.style.backgroundColor = '#635b5b';
}

// Розжиг запальника

const rozhigZapalnika = document.querySelector('.rozhig-zap-img img');
const rozhigZapalnikaBg = document.querySelector('.rozhig-zap');

if (rozhigZapalnika.src == 'http://techsite6/KASKAD/images/true.gif') {
  rozhigZapalnikaBg.style.backgroundColor = 'green';
} else {
  rozhigZapalnikaBg.style.backgroundColor = '#635b5b';
}

// Режим стабилизации запальника

const stabZapalnika = document.querySelector('.stab-zap-img img');
const stabZapalnikaBg = document.querySelector('.stab-zap');

if (stabZapalnika.src == 'http://techsite6/KASKAD/images/true.gif') {
  stabZapalnikaBg.style.backgroundColor = 'green';
} else {
  stabZapalnikaBg.style.backgroundColor = '#635b5b';
}

// Розжиг горелки

const rozhigGorelki = document.querySelector('.rozhig-gorelki-img img');
const rozhigGorelkiBg = document.querySelector('.rozhig-gorelki');

if (rozhigGorelki.src == 'http://techsite6/KASKAD/images/true.gif') {
  rozhigGorelkiBg.style.backgroundColor = 'green';
} else {
  rozhigGorelkiBg.style.backgroundColor = '#635b5b';
}

// Режим стабилизации горелки

const stabGorelki = document.querySelector('.stab-gorelki-img img');
const stabGorelkiBg = document.querySelector('.stab-gorelki');

if (stabGorelki.src == 'http://techsite6/KASKAD/images/true.gif') {
  stabGorelkiBg.style.backgroundColor = 'green';
} else {
  stabGorelkiBg.style.backgroundColor = '#635b5b';
}

// Рабочий режим

const workMode = document.querySelector('.work-mode-img img');
const workModeBg = document.querySelector('.work-mode');

if (workMode.src == 'http://techsite6/KASKAD/images/true.gif') {
  workModeBg.style.backgroundColor = 'green';
} else {
  workModeBg.style.backgroundColor = '#635b5b';
}

// --------------------Автоматическая шкала уровня в котле--------------------

const level = (level, current, levelPercent, fullPx) => {
  const minValue = -100;
  const maxValue = 100;
  let valuePercent = ((current - minValue) / (maxValue - minValue)) * 100;
  let valuePx = (valuePercent * fullPx) / 100;
  levelPercent.innerHTML = Math.floor(valuePx);
  level.style.height = valuePx + 'px';

  if (valuePx >= 72.25) {
    level.style.backgroundColor = 'red';
  }
  if (valuePx <= 12.45) {
    level.style.backgroundColor = 'red';
  }
};

const levelKotel = document.querySelector('.column-kotel__percent');
const valueKotelCurrent = document.querySelector('.uroven-v-barabane-kotla-value').innerHTML;
const levelKotelPercent = document.querySelector('.column-kotel__span-1');

let screenWidth = window.innerWidth;

if ((levelKotel, valueKotelCurrent, levelKotelPercent)) {
  level(levelKotel, valueKotelCurrent, levelKotelPercent, 85);
}

if (screenWidth < 1280) {
  level(levelKotel, valueKotelCurrent, levelKotelPercent, 80);
}

//включение/отключение всплывающих подсказок
const hoverNoneBtn = document.querySelector('.hover-none-btn');
const hoverElemParam = document.querySelectorAll('.mnemo__param-box--container');
const hoverElemParamLevel = document.querySelector('.mnemo__uroven-box');
const hoverLevelParam = document.querySelector('.mnemo__uroven');
const hoverAllParam = document.querySelectorAll('.all__param');

const toggleBtnText = () => {
  hoverNoneBtn.innerHTML =
    hoverNoneBtn.innerHTML == 'Выключить всплывающие подсказки'
      ? 'Включить всплывающие подсказки'
      : 'Выключить всплывающие подсказки';
};

hoverNoneBtn.addEventListener('click', () => {
  for (let i = 0; i < hoverElemParam.length; i++) {
    const item = hoverElemParam[i];
    item.classList.toggle('enabled-hover');
  }
  for (let i = 0; i < hoverAllParam.length; i++) {
    const item = hoverAllParam[i];
    item.classList.toggle('enabled-hover');
  }
  hoverElemParamLevel.classList.toggle('enabled-hover--level');
  hoverLevelParam.classList.toggle('enabled-hover--level');
  toggleBtnText();
});

// --------------------Модальное окно--------------------

const btnModal = document.querySelector('.btn-modal');
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(windowInnerWidth);
const bodyElementHTML = document.querySelector('body');
const modalBackground = document.querySelector('.modal-js');
const modalClose = document.querySelector('.mnemo__modal-close');
const modalActive = document.querySelector('.mnemo__modal-active');

// const bodyMargin = () => {
//   bodyElementHTML.style.marginRight = '-' + scrollbarWidth + 'px';
// };

// bodyMargin();

btnModal.addEventListener('click', () => {
  modalBackground.classList.add('enabled');
  modalActive.classList.add('enabled');
  // modalActive.style.left = 'calc(50% - ' + (175 - scrollbarWidth / 2) + 'px)';
});

modalClose.addEventListener('click', function () {
  modalBackground.classList.remove('enabled');
  modalActive.classList.remove('enabled');
});

modalBackground.addEventListener('click', function (event) {
  if (event.target === modalBackground) {
    modalBackground.classList.remove('enabled');
    modalActive.classList.remove('enabled');
  }
});
