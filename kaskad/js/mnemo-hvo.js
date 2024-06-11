const pumpingFunc = (pump, pumpHz) => {
  if (pumpHz.innerHTML >= 5) {
    pump.src = 'http://Techsite6/kaskad/images/fan-run.gif';
    console.log('true');
  } else {
    pump.src = 'http://Techsite6/kaskad/images/fan-stop.png';
    console.log('false');
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
