import './gallery.scss';
import slide1Image from '../../../public/img/slide1.jpeg';
import slide2Image from '../../../public/img/slide2.jpeg';
import slide3Image from '../../../public/img/slide3.jpeg';
import slide4Image from '../../../public/img/slide4.jpeg';
import slide5Image from '../../../public/img/slide5.jpeg';

export function Gallery() {
    const section = document.createElement('section');
    section.classList.add('gallery');

    section.innerHTML = `
      <div class="gallery__controls">
        <h1 class="gallery__title">Корпоративная жизнь</h1>
     <div class="gallery__buttons">
          <button class="gallery__button gallery__button--prev">
            <div class="gallery__circle">
              <div class="gallery__arrow-top gallery__arrow-top--prev"></div>
              <div class="gallery__arrow-bottom gallery__arrow-bottom--prev"></div>
            </div>
          </button>
          <button class="gallery__button gallery__button--next">
            <div class="gallery__circle">
              <div class="gallery__arrow-top gallery__arrow-top--next"></div>
              <div class="gallery__arrow-bottom gallery__arrow-bottom--next"></div>
            </div>
          </button>
        </div>
      </div>
      <div class="gallery__slides"></div>
      <div class="gallery__progress">
        <div class="gallery__progress-bar-container">
          ${Array(5).fill('<div class="gallery__progress-bar"></div>').join('')}
        </div>
      </div>
    `;

    const slidesContainer = section.querySelector('.gallery__slides');
    const progressBars = section.querySelectorAll('.gallery__progress-bar');
    const slides = [
        { src: slide1Image, alt: 'slide1' },
        { src: slide2Image, alt: 'slide2' },
        { src: slide3Image, alt: 'slide3' },
        { src: slide4Image, alt: 'slide4' },
        { src: slide5Image, alt: 'slide5' }
    ];

    let currentSlide = 0;

    function renderSlides() {
        slidesContainer.innerHTML = '';

        const slide = document.createElement('img');
        slide.src = slides[currentSlide].src;
        slide.alt = slides[currentSlide].alt;
        slide.classList.add('gallery__slide');
        slidesContainer.appendChild(slide);

        progressBars.forEach((bar, index) => {
            bar.style.backgroundColor = index === currentSlide ? '#A30C33' : 'rgba(0, 0, 0, 0.1)';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        renderSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        renderSlides();
    }

    const prevButton = section.querySelector('.gallery__button--prev');
    const nextButton = section.querySelector('.gallery__button--next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    const intervalId = setInterval(nextSlide, 3000);

    prevButton.addEventListener('click', () => clearInterval(intervalId));
    nextButton.addEventListener('click', () => clearInterval(intervalId));

    renderSlides();

    return section;
}
