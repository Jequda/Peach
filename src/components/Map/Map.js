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
        <p class="offices__nav-item active" data-region="all">Все</p>
        <p class="offices__nav-item" data-region="Москва">Москва</p>
        <p class="offices__nav-item" data-region="Центр">Центр</p>
        <p class="offices__nav-item" data-region="Северо-Запад">Северо-Запад</p>
        <p class="offices__nav-item" data-region="Юг">Юг</p>
        <p class="offices__nav-item" data-region="Волга">Волга</p>
        <p class="offices__nav-item" data-region="Урал">Урал</p>
        <p class="offices__nav-item" data-region="Сибирь">Сибирь</p>
        <p class="offices__nav-item" data-region="Дальний восток">Дальний восток</p>
      </nav>
    </div> 
    <div class="map__container">
        <canvas id="mapCanvas" width="1290" height="600" style="background-image: url('${map}'); background-size: cover;"></canvas>
    </div>
  `;

  const cities = {
    all: [
      { name: 'Москва', lat: 15.7558, lon: -135.9173 },
      { name: 'Санкт-Петербург', lat: 45.9343, lon: -133.9086 },
      { name: 'Новосибирск', lat: -60.0302, lon: -22.9206 },
      { name: 'Екатеринбург', lat: -18.8389, lon: -78.6005 },
      { name: 'Н. Новгород', lat: 5.3243, lon: -121.0027 },
      { name: 'Калининград', lat: 48.9343, lon: -166.9086 },
      { name: 'Ярославль', lat: 24.7558, lon: -123.9173 },
      { name: 'Воронеж', lat: 9.7558, lon: -151.4173 },
    ],
    Москва: [{ name: 'Москва', lat: 55.7558, lon: 37.6173 }],
    Центр: [{ name: 'Нижний Новгород', lat: 56.3243, lon: 44.0027 }],
    'Северо-Запад': [{ name: 'Санкт-Петербург', lat: 59.9343, lon: 30.3086 }],
    Юг: [],
    Волга: [],
    Урал: [{ name: 'Екатеринбург', lat: 56.8389, lon: 60.6005 }],
    Сибирь: [{ name: 'Новосибирск', lat: 55.0302, lon: 82.9206 }],
    'Дальний восток': []
  };

  const mapCanvas = section.querySelector('#mapCanvas');
  const ctx = mapCanvas.getContext('2d');

  const mapWidth = mapCanvas.width;
  const mapHeight = mapCanvas.height;

  const mapLongitudeStart = -180;
  const mapLongitudeEnd = 180;
  const mapLatitudeStart = 90;
  const mapLatitudeEnd = -90;

  function convertGeoToPixel(lat, lon) {
    const x = ((lon - mapLongitudeStart) / (mapLongitudeEnd - mapLongitudeStart)) * mapWidth;
    const y = ((mapLatitudeStart - lat) / (mapLatitudeStart - mapLatitudeEnd)) * mapHeight;
    return { x, y };
  }

  function drawPoints(region) {
    ctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);

    const selectedCities = cities[region] || [];

    selectedCities.forEach(city => {
      const { lat, lon, name } = city;

      const { x, y } = convertGeoToPixel(lat, lon);

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#444444';
      ctx.fill();

      ctx.fillStyle = '#444444';
      ctx.font = '600 12px Proxima Nova Condensed';

      const textWidth = ctx.measureText(name).width;
      ctx.fillText(name, x - textWidth / 2, y + 20);
    });
  }
  drawPoints('all');

  const navItems = section.querySelectorAll('.offices__nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      const region = item.getAttribute('data-region');

      drawPoints(region);
    });
  });

  return section;
}
