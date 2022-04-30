import './style.css';

console.log('funguju!');
const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', (e) => {
  nav.classList.toggle('nav-closed');
  //nav.querySelectorAll('a').add('nav-closed');
});

const hideNav = () => {
  nav.classList.add('nav-closed');
};
const navItems = nav.querySelectorAll('a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', hideNav);
}
