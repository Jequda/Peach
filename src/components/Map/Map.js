import map from '../../../public/img/map.jpeg';
import './map.scss';

export function Map() {
  const section = document.createElement('section');
  section.classList.add('map');
  section.innerHTML = `
    <div class="offices">
    <div class="offices__overlay hidden"></div>
      <div>
       <div class="offices__title-container">
        <p class="offices__title">Офисы Softline</p>
        <div class="offices__arrow">
          <span class="offices__arrow-top"></span>
          <span class="offices__arrow-bottom"></span>
        </div>
        </div>
           <div class="offices__popup hidden">
          <div class="region">
          <span class="region-name">Москва</span>
        </div>
          <div class="region">
          <span class="region-name">Центр</span>
          <ul class="cities">
            <li>Воронеж</li>
            <li>Ярославль</li>
            <li>Белгород</li>
          </ul>
        </div>
          <div class="region">
          <span class="region-name">Северо-Запад</span>
          <ul class="cities">
            <li>Санкт-Петербург</li>
            <li>Калининград</li>
          </ul>
        </div>
          <div class="region">
          <span class="region-name">Юг</span>
          <ul class="cities">
            <li>Ростов-на-Дону</li>
            <li>Краснодар</li>
            <li>Волгоград</li>
          </ul>
        </div>
          <div class="region">
          <span class="region-name">Волга</span>
          <ul class="cities">
            <li>Казань</li>
            <li>Самара</li>
            <li>Уфа</li>
            <li>Оренбург</li>
            <li>Нижний Новгород</li>
          </ul>
        </div>
          <div class="region">
          <span class="region-name">Урал</span>
          <ul class="cities">
            <li>Екатеринбург</li>
            <li>Челябинск</li>
            <li>Пермь</li>
            <li>Сургут</li>
            <li>Тюмень</li>
            <li>Ижевск</li>
          </ul>
        </div>
          <div class="region">
          <span class="region-name">Сибирь</span>
          <ul class="cities">
            <li>Новосибирск</li>
            <li>Омск</li>
            <li>Томск</li>
            <li>Красноярск</li>
            <li>Иркутск</li>
          </ul>
        </div>
          <div class="region">
          <span class="region-name">Дальний Восток</span>
          <ul class="cities">
            <li>Хабаровск</li>
            <li>Владивосток</li>
          </ul>
        </div>
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
        <canvas id="mapCanvas" width="1290" height="650"  style="background-image: url('${map}'); background-repeat: no-repeat;"></canvas>
    </div>
  `;

  const cities = {
    all: [
      { name: 'Москва', lat: 26.7558, lon: -139.2173 },
      { name: 'Ярославль', lat: 33.7558, lon: -128.9173 },
      { name: 'Воронеж', lat: 19.7558, lon: -152.4173 },
      { name: 'Белгород', lat: 11.7558, lon: -153.4173 },
      { name: 'Санкт-Петербург', lat: 51.9343, lon: -136.9086 },
      { name: 'Калининград', lat: 54.9343, lon: -167.9086 },
      { name: 'Ростов-на-Дону', lat: 0.0558, lon: -156.4173 },
      { name: 'Волгоград', lat: -10.7558, lon: -149.4173 },
      { name: 'Краснодар', lat: -14.7558, lon: -166.4173 },
      { name: 'Н. Новгород', lat: 16.3243, lon: -125.0027 },
      { name: 'Самара', lat: 4.3243, lon: -127.0027 },
      { name: 'Казань', lat: 5.3243, lon: -110.0027 },
      { name: 'Уфа', lat: -3.3243, lon: -109.0027 },
      { name: 'Оренбург', lat: -12.3243, lon: -118.0027 },
      { name: 'Ижевск', lat: 7.8389, lon: -85.6005 },
      { name: 'Челябинск', lat: -11.8389, lon: -88.6005 },
      { name: 'Пермь', lat: 0.1389, lon: -63.6005 },
      { name: 'Сургут', lat: -3.8389, lon: -48.6005 },
      { name: 'Тюмень', lat: -19.8389, lon: -54.6005 },
      { name: 'Екатеринбург', lat: -2.8389, lon: -88.6005 },
      { name: 'Омск', lat: -42.0302, lon: -49.9206 },
      { name: 'Томск', lat: -37.9302, lon: -17.9206 },
      { name: 'Красноярск', lat: -37.0302, lon: -0.9206 },
      { name: 'Иркутск', lat: -48.0302, lon: 15.9206 },
      { name: 'Новосибирск', lat: -37.0302, lon: -34.9206 },
      { name: 'Хабаровск', lat: -50.0302, lon: 94.9206 },
      { name: 'Владивосток', lat: -70.0302, lon: 91.9206 },
    ],
    Москва: [{ name: 'Москва', lat: 26.7558, lon: -139.2173 },],
    Центр: [{ name: 'Ярославль', lat: 33.7558, lon: -128.9173 },
    { name: 'Воронеж', lat: 19.7558, lon: -152.4173 },
    { name: 'Белгород', lat: 11.7558, lon: -153.4173 },],
    'Северо-Запад': [{ name: 'Санкт-Петербург', lat: 51.9343, lon: -136.9086 },
    { name: 'Калининград', lat: 54.9343, lon: -167.9086 },],
    Юг: [{ name: 'Ростов-на-Дону', lat: 0.0558, lon: -156.4173 },
    { name: 'Волгоград', lat: -10.7558, lon: -149.4173 },
    { name: 'Краснодар', lat: -14.7558, lon: -166.4173 },],
    Волга: [{ name: 'Н. Новгород', lat: 16.3243, lon: -125.0027 },
    { name: 'Самара', lat: 4.3243, lon: -127.0027 },
    { name: 'Казань', lat: 5.3243, lon: -110.0027 },
    { name: 'Уфа', lat: -3.3243, lon: -109.0027 },
    { name: 'Оренбург', lat: -12.3243, lon: -118.0027 },],
    Урал: [{ name: 'Ижевск', lat: 7.8389, lon: -85.6005 },
    { name: 'Челябинск', lat: -11.8389, lon: -88.6005 },
    { name: 'Пермь', lat: 0.1389, lon: -63.6005 },
    { name: 'Сургут', lat: -3.8389, lon: -48.6005 },
    { name: 'Тюмень', lat: -19.8389, lon: -54.6005 },
    { name: 'Екатеринбург', lat: -2.8389, lon: -88.6005 },],
    Сибирь: [{ name: 'Омск', lat: -42.0302, lon: -49.9206 },
    { name: 'Томск', lat: -37.9302, lon: -17.9206 },
    { name: 'Красноярск', lat: -37.0302, lon: -0.9206 },
    { name: 'Иркутск', lat: -48.0302, lon: 15.9206 },
    { name: 'Новосибирск', lat: -37.0302, lon: -34.9206 },],
    'Дальний восток': [{ name: 'Хабаровск', lat: -50.0302, lon: 94.9206 },
    { name: 'Владивосток', lat: -70.0302, lon: 91.9206 },]
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

  const title = section.querySelector('.offices__title-container');
  const popup = section.querySelector('.offices__popup');
  const overlay = section.querySelector('.offices__overlay');

  title.addEventListener('click', () => {
    popup.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });

  const regions = section.querySelectorAll('.region');

  regions.forEach(region => {
    const regionName = region.querySelector('.region-name');
    regionName.addEventListener('click', () => {
      region.classList.toggle('open');
    });
  });

  return section;
}
