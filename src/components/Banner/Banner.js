import banner from '../../../public/img/banner.jpeg';
import './banner.scss';

export function Banner() {
  const section = document.createElement('section');
  section.classList.add('banner');
  section.innerHTML = `
        <img src="${banner}" alt="banner" class="banner__image"/>
       
      <h1 class="banner__heading">Поставщик услуг цифровой трансформации и кибербезопасности</h1>
      <button>На сайт</button>
     
    `;
  return section;
}
