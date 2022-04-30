import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, layers, image } = props;
  let { ordered } = props;

  //vytvoření elementu drink-list:
  const drinksList = document.createElement('div');
  drinksList.classList.add('drinks-list');

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
  `;

  //vytvoření layers v třídě drink__info:
  const drinkInfo = drink.querySelector('.drink__info');
  layers.forEach((layer) => {
    let newLayer = Layer(layer);
    drinkInfo.appendChild(newLayer);
  });

  //vytváření order buttonu:
  const drinkControls = document.createElement('div');
  drinkControls.classList.add('drink__controls');

  drinkControls.innerHTML += `<button class="order-btn">Objednat</button>`;

  const orderBtn = drinkControls.querySelector('.order-btn');
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

  drinksList.appendChild(drink);
  drinksList.appendChild(drinkControls);
  return drinksList;
};

//html struktura drink:
/*
<div class="drink">
            <div class="drink__product">
              <div class="drink__cup">
                <img
                  src="https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png"
                />
              </div>
              <div class="drink__info">
                <h3>Cappuccino</h3>
                <!-- <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #feeeca"
                  ></div>
                  <div class="layer__label">mléčná pěna</div>
                </div>
                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #fed7b0"
                  ></div>
                  <div class="layer__label">teplé mléko</div>
                </div>

                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #613916"
                  ></div>
                  <div class="layer__label">espresso</div>
                </div>
                -->
              </div>
*/
