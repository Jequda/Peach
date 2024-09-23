import './directions.scss';
import solutionsImage from '../../../public/img/solutions.jpeg';
import cybersecurityImage from '../../../public/img/cybersecurity.jpeg';
import replacementImage from '../../../public/img/replacement.jpeg';
import cloudImage from '../../../public/img/cloud.jpeg';
import transformationImage from '../../../public/img/transformation.jpeg';
import supportImage from '../../../public/img/support.jpeg';

export function Directions() {
    const section = document.createElement('section');
    section.classList.add('business');

    section.innerHTML = `
    <h2 class="business__heading">Направления бизнеса</h2>
    <div class="business__directions"></div>
  `;

    const directionsContainer = section.querySelector('.business__directions');

    const items = [
        {
            title: 'Решения Softline',
            description: 'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.',
            image: solutionsImage,
        },
        {
            title: 'Кибербезопасность',
            description: 'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. ',
            image: cybersecurityImage,
        },
        {
            title: 'Импортозамещение',
            description: 'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства..',
            image: replacementImage,
        },
        {
            title: 'Облачные решения',
            description: 'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.',
            image: cloudImage,
        },
        {
            title: 'Цифровая трансформация <br/> и разработка ПО',
            description: 'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.',
            image: transformationImage,
        },
        {
            title: 'Техническая поддержка Softline',
            description: '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.',
            image: supportImage,
        },
    ];

    items.forEach(({ title, description, image }) => {
        const item = document.createElement('div');
        item.classList.add('business__item');
        item.style.backgroundImage = `url(${image})`;

        item.innerHTML = `
      <div class="business__overlay">
        <h3 class="business__title">${title}</h3>
        <p class="business__description">${description}</p>
      </div>
    `;

        directionsContainer.appendChild(item);
    });

    const cards = section.querySelectorAll('.business__item');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    return section;
}
