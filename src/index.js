import './style.css';
import { Drink } from './Drink/index.js';

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
//pův kód:
/*
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
*/
//tvorba drinku:

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

//const drinkList = document.querySelector('.drinks-list');

const menuList = document.querySelector('#menu-list');
drinks.forEach((drink) => {
  let newDrink = Drink(drink);
  menuList.appendChild(newDrink);
});

/*

*/
