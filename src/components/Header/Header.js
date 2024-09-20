import logo from '../../../public/img/logo.svg';
import './header.scss';

export function Header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
     
        <img src="${logo}" alt="logo" /> <!-- Используйте импорт вместо относительного пути -->

      <nav class="header__nav">
        <p>Облачные решения</p>
        <p>Кибербезопасность</p>
        <p>Импортозамещение</p>
        <p>Цифровая трансформация</p>
      </nav>
    `;
  return header;
}
