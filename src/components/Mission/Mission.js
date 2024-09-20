import backgroundImage from '../../../public/img/background.jpeg';
import './mission.scss';

export function Mission() {
    const section = document.createElement('section');
    section.classList.add('mission');
    section.innerHTML = `
      <h2 class="mission__title">Миссия Softline</h2>
      <p class="mission__text">
        Мы помогаем организациям трансформироваться, работать эффективно и
        безопасно в условиях цифровой экономики.
      </p>
    `;

    section.style.backgroundImage = `url(${backgroundImage})`;

    return section;
}
