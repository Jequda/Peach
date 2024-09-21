import logo from '../../../public/img/logo.svg';
import './header.scss';

export function Header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
      <a href="https://softline.ru">
        <img src="${logo}" alt="logo" />
      </a>
      <nav class="header__nav">
        <p>Облачные решения</p>
        <p>Кибербезопасность</p>
        <p>Импортозамещение</p>
        <p>Цифровая трансформация</p>
      </nav>
    `;
  return header;
}
