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

//tvorba drinku:

const drinksList = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.results.forEach((drink) => {
      let newDrink = Drink(drink);
      drinksList.appendChild(newDrink);
    });
  });

/*
pův objekt:
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
*/
