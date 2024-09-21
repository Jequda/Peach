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
        <canvas id="mapCanvas" width="1290" height="650" style="background-image: url('${map}'); background-size: cover;"></canvas>
    </div>
  `;

  const cities = {
    all: [
      { name: 'Москва', lat: 21.7558, lon: -135.9173 },
      { name: 'Санкт-Петербург', lat: 48.9343, lon: -133.9086 },
      { name: 'Новосибирск', lat: -49.0302, lon: -22.9206 },
      { name: 'Екатеринбург', lat: -9.8389, lon: -80.6005 },
      { name: 'Н. Новгород', lat: 16.3243, lon: -121.0027 },
      { name: 'Калининград', lat: 51.9343, lon: -166.9086 },
      { name: 'Ярославль', lat: 29.7558, lon: -123.9173 },
      { name: 'Воронеж', lat: 14.7558, lon: -151.4173 },
      { name: 'Белгород', lat: 4.7558, lon: -151.4173 },
      { name: 'Ростов-на-Дону', lat: -4.7558, lon: -154.4173 },
      { name: 'Волгоград', lat: -20.7558, lon: -147.4173 },
      { name: 'Краснодар', lat: -24.7558, lon: -163.4173 },
      { name: 'Самара', lat: -2.3243, lon: -122.0027 },
      { name: 'Казань', lat: -1.3243, lon: -103.0027 },
      { name: 'Уфа', lat: -13.3243, lon: -102.0027 },
      { name: 'Оренбург', lat: -20.3243, lon: -112.0027 },
      { name: 'Ижевск', lat: 2.8389, lon: -79.6005 },
      { name: 'Челябинск', lat: -20.8389, lon: -81.6005 },
      { name: 'Пермь', lat: 0.1389, lon: -63.6005 },
      { name: 'Сургут', lat: -3.8389, lon: -48.6005 },
      { name: 'Тюмень', lat: -19.8389, lon: -54.6005 },
      { name: 'Омск', lat: -54.0302, lon: -39.9206 },
      { name: 'Томск', lat: -49.9302, lon: -2.9206 },
      { name: 'Красноярск', lat: -49.0302, lon: 12.9206 },
      { name: 'Иркутск', lat: -59.0302, lon: 28.9206 },
      { name: 'Хабаровск', lat: -60.0302, lon: 118.9206 },
      { name: 'Владивосток', lat: -84.0302, lon: 114.9206 },
    ],
    Москва: [{ name: 'Москва', lat: 21.7558, lon: -135.9173 }],
    Центр: [{ name: 'Ярославль', lat: 29.7558, lon: -123.9173 }, { name: 'Воронеж', lat: 14.7558, lon: -151.4173 }, { name: 'Белгород', lat: 4.7558, lon: -151.4173 }],
    'Северо-Запад': [{ name: 'Санкт-Петербург', lat: 48.9343, lon: -133.9086 }, { name: 'Калининград', lat: 51.9343, lon: -166.9086 }],
    Юг: [{ name: 'Ростов-на-Дону', lat: -4.7558, lon: -154.4173 },
    { name: 'Волгоград', lat: -20.7558, lon: -147.4173 },
    { name: 'Краснодар', lat: -24.7558, lon: -163.4173 }],
    Волга: [{ name: 'Н. Новгород', lat: 16.3243, lon: -121.0027 }, { name: 'Самара', lat: -2.3243, lon: -122.0027 },
    { name: 'Казань', lat: -1.3243, lon: -103.0027 },
    { name: 'Уфа', lat: -13.3243, lon: -102.0027 },
    { name: 'Оренбург', lat: -20.3243, lon: -112.0027 }],
    Урал: [{ name: 'Ижевск', lat: 2.8389, lon: -79.6005 },
    { name: 'Челябинск', lat: -20.8389, lon: -81.6005 },
    { name: 'Пермь', lat: 0.1389, lon: -63.6005 },
    { name: 'Сургут', lat: -3.8389, lon: -48.6005 },
    { name: 'Тюмень', lat: -19.8389, lon: -54.6005 }, { name: 'Екатеринбург', lat: -9.8389, lon: -80.6005 }],
    Сибирь: [{ name: 'Омск', lat: -54.0302, lon: -39.9206 },
    { name: 'Томск', lat: -49.9302, lon: -2.9206 },
    { name: 'Красноярск', lat: -49.0302, lon: 12.9206 },
    { name: 'Иркутск', lat: -59.0302, lon: 28.9206 }, { name: 'Новосибирск', lat: -49.0302, lon: -22.9206 }],
    'Дальний восток': [{ name: 'Хабаровск', lat: -60.0302, lon: 118.9206 },
    { name: 'Владивосток', lat: -84.0302, lon: 114.9206 }]
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
