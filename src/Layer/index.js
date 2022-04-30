import './style.css';
export const Layer = (props) => {
  const { color, label } = props;

  const layer = document.createElement('div');
  layer.classList.add('layer');
  console.log(layer);
  layer.innerHTML += `<div class="layer__color" style="background-color: ${color}"></div>
  <div class="layer__label">${label}</div>`;

  return layer;
};

/* struktura layer:

 <div class="layer">
    <div class="layer__color" style="background-color: #fed7b0"></div>
    <div class="layer__label">teplé mléko</div>
  </div> 
 
 */
