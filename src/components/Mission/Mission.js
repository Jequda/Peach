import './mission.scss';

export function Mission() {
    const section = document.createElement('section');
    section.classList.add('mission');
    section.innerHTML = `
    <div class="mission__heading-container">
      <h1 class="mission__heading">
       <span class="mission__heading--red">Softline</span> – ведущий поставщик IT-решений и сервисов. *<span class="break"> Мы предлагаем
  комплексные IT-решения, облака, программное </span> и аппаратное обеспечение,
  решения по цифровой трансформации <span class="break">и кибербезопасности, а также широкий спектр IT-услуг.</span> 
      </h1>
    </div>
      <div class="mission__container">
        <div class="mission__row">
          <div  class="mission__item">
            <h1 class="mission__title">> 30 лет</h1>
            <p class="mission__description">на IT-рынке</p>
          </div>
          <div class="mission__item">
            <h1 class="mission__title"> 4600</h1>
            <p class="mission__description">сотрудников в России</p>
          </div>
          <div class="mission__item">
            <h1 class="mission__title">25</h1>
            <p class="mission__description">городов России</p>
          </div>
        </div>
        <div class="mission__row mission__row--secondary">
          <div class="mission__item">
            <h1 class="mission__title">2000 +</h1>
            <p class="mission__description">разработчиков</p>
          </div>
          <div class="mission__item">
            <h1 class="mission__title">3000 +</h1>
            <p class="mission__description">сотрудников ежегодно проходят оценку и обучение</p>
          </div>
        </div>
      </div>
    `;
    return section;
}
