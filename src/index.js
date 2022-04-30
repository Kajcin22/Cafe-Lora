import './style.css';
import { Layer } from '../src/Layer/index.js';

console.log('funguju!');

//rozbalování hamburger menu:
const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', (e) => {
  nav.classList.toggle('nav-closed');
});

//skrývání menu po kliknutí:
const hideNav = () => {
  nav.classList.add('nav-closed');
};

const navItems = nav.querySelectorAll('a');
navItems.forEach((item) => item.addEventListener('click', hideNav));

//objednávání:

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = false;

orderBtn.addEventListener('click', (e) => {
  let btn = e.target;

  if (ordered) {
    btn.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup', 'drink__cup--selected');
    ordered = false;
  } else {
    btn.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup', 'drink__cup--selected');
    ordered = true;
  }
});

//tvorba layers:

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const drinkInfo = document.querySelector('.drink__info');
layers.forEach((layer) => {
  let newLayer = Layer(layer);
  return drinkInfo.appendChild(newLayer);
});

//for cycle:
/* 
for (let i = 0; i < layers.length; i++) {
  let newLayer = Layer(layers[i]);
  drinkInfo.appendChild(newLayer);
}*/

//delší kód:
/*
const layer1 = Layer({
  color: '#feeeca',
  label: 'mléčná pěna',
});
console.log(layer1);

const layer2 = Layer({
  color: '#fed7b0',
  label: 'teplé mléko',
});
console.log(layer2);

const layer3 = Layer({
  color: '#613916',
  label: 'espresso',
});
console.log(layer3);
const drinkInfo = document.querySelector('.drink__info');
drinkInfo.appendChild(layer1);
drinkInfo.appendChild(layer2);
drinkInfo.appendChild(layer3);
*/
