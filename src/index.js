import './style.css';

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
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', hideNav);
}

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
