import './benefits.scss';
import dmsImage from '../../../public/img/dms.svg';
import birthdayImage from '../../../public/img/birthday.svg';
import mobileImage from '../../../public/img/mobile.svg';
import discountsImage from '../../../public/img/discounts.svg';
import ltiImage from '../../../public/img/lti.svg';
import orgtechImage from '../../../public/img/orgtech.svg';
import mortgageImage from '../../../public/img/mortgage.svg';

export function Benefits() {
  const section = document.createElement('section');
  section.classList.add('benefits');

  section.innerHTML = `
    <h1 class="benefits__title">Компенсационный пакет</h1>
    <div class="benefits__items"></div>
    <h1 class="motivation__title">Программа дополнительной мотивации</h1>
    <h1 class="motivation__subtitle">Доплата 12% от суммы</h1>
    <div class="motivation__items"></div>
  `;

  const benefitsContainer = section.querySelector('.benefits__items');
  const motivationContainer = section.querySelector('.motivation__items');

  const benefitsItems = [
    { title: 'ДМС', image: dmsImage },
    { title: 'Выходной <br/> в день рождения', image: birthdayImage },
    { title: 'Корпоративная <br/> мобильная связь', image: mobileImage },
    { title: 'Корпоративные <br/> скидки на спорт', image: discountsImage },
    { title: 'LTI', image: ltiImage },
  ];

  const motivationItems = [
    { title: 'Оргтехники', image: orgtechImage },
    { title: 'ДМС', image: dmsImage },
    { title: 'Ипотеки', image: mortgageImage },
  ];

  benefitsItems.forEach(({ title, image }) => {
    const item = document.createElement('div');
    item.classList.add('benefits__item');

    item.innerHTML = `
      <div class="benefits__overlay">
        <img src="${image}" alt="${title}" />
        <p>${title}</p>
      </div>
    `;

    benefitsContainer.appendChild(item);
  });

  motivationItems.forEach(({ title, image }) => {
    const item = document.createElement('div');
    item.classList.add('motivation__item');

    item.innerHTML = `
      <div class="motivation__overlay">
        <img src="${image}" alt="${title}" />
        <p>${title}</p>
      </div>
    `;

    motivationContainer.appendChild(item);
  });

  return section;
}
