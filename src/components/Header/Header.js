import logo from '../../../public/logo.svg';
import './header.scss';

export function Header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
      <div>
        <img src="${logo}" alt="logo" /> <!-- Используйте импорт вместо относительного пути -->
      </div>
      <nav class="header__nav">
        <p>Облачные решения</p>
        <p>Кибербезопасность</p>
        <p>Импортозамещение</p>
        <p>Цифровая трансформация</p>
      </nav>
    `;
  return header;
}
