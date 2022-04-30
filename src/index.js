import './style.css';

console.log('funguju!');
const navBtn = document.querySelector('#nav-btn');

navBtn.addEventListener('click', (e) => {
  document.querySelector('nav').classList.toggle('nav-closed');
});
