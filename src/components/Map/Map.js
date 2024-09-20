import map from '../../../public/img/map.jpeg';
import './map.scss';

export function Map() {
    const section = document.createElement('section');
    section.classList.add('map');
    section.innerHTML = `
      <div class="offices">
      <div> 
          <p class="offices__title">Офисы Softline</p>
<div class="arrow-2">
    <span class="arrow-2-top"></span>
    <span class="arrow-2-bottom"></span>
</div> 
</div> 
        <nav class="offices__nav">
          <p class="offices__nav-item">Все</p>
          <p class="offices__nav-item">Москва</p>
          <p class="offices__nav-item">Центр</p>
          <p class="offices__nav-item">Северо-Запад</p>
          <p class="offices__nav-item">Юг</p>
          <p class="offices__nav-item">Волга</p>
          <p class="offices__nav-item">Урал</p>
          <p class="offices__nav-item">Сибирь</p>
          <p class="offices__nav-item">Дальний восток</p>
        </nav>
     </div> 
      <div offices__map-container>
        <img offices__map src="${map}" alt="map" />
      </div>

    `;
    return section;
}
