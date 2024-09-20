import './about.scss';

export function About() {
  const section = document.createElement('section');
  section.classList.add('about');
  section.innerHTML = `
    <div class="about__heading-container">
      <h1 class="about__heading">
       <span class="about__heading--red">Softline</span> – ведущий поставщик IT-решений и сервисов. *<span class="break"> Мы предлагаем
  комплексные IT-решения, облака, программное </span> и аппаратное обеспечение,
  решения по цифровой трансформации <span class="break">и кибербезопасности, а также широкий спектр IT-услуг.</span> 
      </h1>
    </div>
      <div class="about__container">
        <div class="about__row">
          <div  class="about__item">
            <h1 class="about__title">> 30 лет</h1>
            <p class="about__description">на IT-рынке</p>
          </div>
          <div class="about__item">
            <h1 class="about__title"> 4600</h1>
            <p class="about__description">сотрудников в России</p>
          </div>
          <div class="about__item">
            <h1 class="about__title">25</h1>
            <p class="about__description">городов России</p>
          </div>
        </div>
        <div class="about__row about__row--secondary">
          <div class="about__item">
            <h1 class="about__title">2000 +</h1>
            <p class="about__description">разработчиков</p>
          </div>
          <div class="about__item">
            <h1 class="about__title">3000 +</h1>
            <p class="about__description">сотрудников ежегодно проходят оценку и обучение</p>
          </div>
        </div>
      </div>
    `;
  return section;
}
