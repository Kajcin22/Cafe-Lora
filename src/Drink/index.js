import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, ordered, layers, image } = props;

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
  `;

  const drinkInfo = drink.querySelector('.drink__info');
  layers.forEach((layer) => {
    let newLayer = Layer(layer);
    drinkInfo.appendChild(newLayer);
  });
  console.log(drink);
  return drink;
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
