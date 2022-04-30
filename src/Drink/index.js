import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, layers, image } = props;
  let { ordered } = props;

  //vytvoření elementu drink:
  const drink = document.createElement('div');
  drink.classList.add('drink');

  drink.innerHTML += `
  <div class="drink__product">
    <div class="drink__cup">
      <img
        src="${image}"
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  `;

  //vytvoření layers v třídě drink__info:
  const drinkInfo = drink.querySelector('.drink__info');
  layers.forEach((layer) => {
    let newLayer = Layer(layer);
    drinkInfo.appendChild(newLayer);
  });

  //vytvoření order buttonu:
  const orderBtn = drink.querySelector('.order-btn');
  const drinkCup = drink.querySelector('.drink__cup');

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

  console.log(drink);

  return drink;
};
