try {
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
    davlVozduhNizkoBg.style.backgroundColor = '#db5454';
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
} catch (err) {
  console.log('Нет показаний');
}

// --------------------Модальное окно--------------------

const btnModal = document.querySelector('.btn-modal');
const modalBackground = document.querySelector('.modal-js');
const modalClose = document.querySelector('.mnemo__modal-close');
const modalActive = document.querySelector('.mnemo__modal-active');

const accordionBtn = document.querySelectorAll('.modal__accordion');
const accordionTitle = document.querySelectorAll('.modal__accordion-title');
const accordionContent = document.querySelectorAll('.modal__accordion-content');

btnModal.addEventListener('click', () => {
  modalBackground.classList.add('enabled');
  modalActive.classList.add('enabled');
});

modalClose.addEventListener('click', () => {
  modalBackground.classList.remove('enabled');
  modalActive.classList.remove('enabled');
});

modalBackground.addEventListener('click', (event) => {
  if (event.target === modalBackground) {
    modalBackground.classList.remove('enabled');
    modalActive.classList.remove('enabled');
  }
});

const dropDownDescrNull = (array) => {
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    el.style.maxHeight = null;
  }
};

for (let i = 0; i < accordionTitle.length; i++) {
  const el = accordionTitle[i];

  el.addEventListener('click', (e) => {
    e.preventDefault();
    let contentNext = el.nextElementSibling;
    let contentBack = el.previousElementSibling;

    const formValue = (form, nameInput) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = form.querySelector(`[name="password-${nameInput}"]`);
        const value = {
          password: password.value,
        };
        if (value.password === '123456') {
          dropDownDescrNull(accordionContent);
          contentNext.style.maxHeight = contentNext.scrollHeight + 'px';
          contentBack.classList.remove('active');
        } else {
          console.log('incorrect');
        }
      });
    };

    if (contentNext.style.maxHeight) {
      dropDownDescrNull(accordionContent);
    } else {
      dropDownDescrNull(accordionContent);
      contentNext.style.maxHeight = contentNext.scrollHeight + 'px';
    }

    if (!el.classList.contains('enabled')) {
      for (let i = 0; i < accordionTitle.length; i++) {
        let item = accordionTitle[i];
        item.classList.remove('enabled');
      }
      el.classList.add('enabled');
    } else {
      el.classList.remove('enabled');
    }
  });
}

//включение/отключение всплывающих подсказок
const hoverNoneBtn = document.querySelector('.hover-none-btn');
const hoverElemParam = document.querySelectorAll('.mnemo__param-box--container');
const hoverElemParamLevel = document.querySelector('.mnemo__uroven-box');
const hoverLevelParam = document.querySelector('.mnemo__uroven');
const hoverAllParam = document.querySelectorAll('.all__param');
const enabledHover = 'enabled-hover';

const toggleBtnText = (btn) => {
  btn.innerHTML =
    btn.innerHTML == 'Выключить всплывающие подсказки'
      ? 'Включить всплывающие подсказки'
      : 'Выключить всплывающие подсказки';
};

const forEach = (array, classHover) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    item.classList.toggle(classHover);
  }
};

hoverNoneBtn.addEventListener('click', () => {
  forEach(hoverElemParam, enabledHover);
  forEach(hoverAllParam, enabledHover);
  hoverElemParamLevel.classList.toggle('enabled-hover--level');
  hoverLevelParam.classList.toggle('enabled-hover--level');
  toggleBtnText(hoverNoneBtn);
});

//пароль на скачивание
// const downloadPassword = document.querySelector('.download-password');
// const downloadPasswordForm = document.querySelector('.modal-content__form-kontroller');
// const downloadPasswordMay = document.querySelector('.modal-content__form-btn--kontroller');
// const downloadDisplay = document.querySelector('.modal-content__link-container--display');
// const downloadPasswordFormlabel = document.querySelector('.modal-content__form-label');
// const downloadPasswordFormInput = document.querySelector('.modal-content__form-input');

// downloadPassword.addEventListener('click', (e) => {
//   e.preventDefault();
//   downloadPassword.classList.add('active');
//   downloadPasswordForm.classList.add('active');
//   downloadDisplay.style.display = 'none';
// });

// const formData = (e) => {
//   e.preventDefault();

//   const formPassword = downloadPasswordForm.querySelector('[name="kontroller-proga-password"]');

//   const value = {
//     formPassword: formPassword.value,
//   };
//   if (value.formPassword === '123456') {
//     downloadPasswordForm.classList.remove('active');
//     downloadPasswordMay.classList.add('active');
//     downloadDisplay.style.display = 'flex';
//   } else {
//     downloadPasswordFormlabel.classList.add('active');
//     downloadPasswordFormInput.classList.add('error');
//   }

// };

// downloadPasswordForm.addEventListener('submit', formData);



// new function on password
// const linkMK500 = document.querySelector('.password-form__link-mk500');
// const passwordFormMK500 = document.querySelector('.password-form-mk500');
// const passwordWindowMK500 = document.querySelector('.password-window-mk500');
// const passwordMK500 = '123456';
// const passwordInputMK500 = document.querySelector('.password-input-mk500');
// const passwordLabelMK500 = document.querySelector('.password-label-mk500');

// const downloadPasswordMK500 = document.querySelector('.download-password-mk500');

// downloadPasswordMK500.addEventListener('click', (e) => {
//   e.preventDefault();
//   downloadPasswordMK500.classList.add('active');
//   passwordFormMK500.classList.add('active');
//   linkMK500.classList.add('active')
// });

// const formValue = (content, form, passwordWindow, passwordValue, nameInput, labelBox, inputBox) => {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const password = form.querySelector(`[name="password-${nameInput}"]`);
//     const value = {
//       password: password.value,
//     };

//     if (value.password === passwordValue) {
//       passwordWindow.classList.add('active');
//       content.classList.add('active');
//     } else {
//       labelBox.classList.add('active');
//       inputBox.classList.add('error');
//     }
//   });
// };

// formValue(linkMK500, passwordFormMK500, passwordWindowMK500, passwordMK500, 1, passwordInputMK500, passwordLabelMK500);
