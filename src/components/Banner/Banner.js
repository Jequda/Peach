import banner from '../../../public/img/banner.jpeg';
import './banner.scss';

export function Banner() {
  const section = document.createElement('section');
  section.classList.add('banner');
  section.innerHTML = `
        <img src="${banner}" alt="banner" class="banner__image"/>
       
      <h1 class="banner__title">Поставщик услуг цифровой трансформации и кибербезопасности</h1>
      <button id="siteButton">На сайт</button>
     
    `;


  // Добавляем секцию в DOM
  document.body.appendChild(section);

  // Функция для изменения текста кнопки
  function updateButtonText() {
    const button = document.getElementById('siteButton');
    if (window.matchMedia("(max-width: 319px)").matches) {
      button.textContent = "На сайт";
    } else {
      button.textContent = "Наш сайт";
    }
  }

  // Вызываем функцию сразу после загрузки
  updateButtonText();

  // Добавляем обработчик события для изменения текста кнопки при изменении размера окна
  window.addEventListener('resize', updateButtonText);
  return section;
}
