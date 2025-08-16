
//top anim
(() => {
  const topButton = document.querySelector('.js_top');

  topButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

})();


//src update
(() => {

  function updateLogoFor1020() {
    if (window.innerWidth <= 1020) {
      const logoImage = document.querySelector('.logo_header');
      const planetImage = document.querySelector('.eighth_box_card_persona')
      if (logoImage) {
        logoImage.src = './img/icon/logo-1020.svg';
        planetImage.src = './img/img/eighth/persona2.png';
      }
      else {
        logoImage.src = './img/icon/logo.svg';
        planetImage.src = './img/img/eighth/persona.png';
      }
    }
  }

  window.addEventListener('load', updateLogoFor1020);
  window.addEventListener('resize', updateLogoFor1020);


})();


//src update
(() => {

  function updateLogoFor768() {
    if (window.innerWidth <= 768) {
      const logoImage = document.querySelector('.main_planet img');
      logoImage.src = './img/img/first/planet-768.png';
    }else {
        logoImage.src = './img/img/first/planet.png';
      }
    
  }

  window.addEventListener('load', updateLogoFor768);
  window.addEventListener('resize', updateLogoFor768);


})();



//src update
(() => {

  function updateLogoFor440() {
    if (window.innerWidth <= 767 ) {
      const logoImage = document.querySelector('.logo_header');
      logoImage.src = './img/icon/logo-440.svg';
    }
  }

  window.addEventListener('load', updateLogoFor440);
  window.addEventListener('resize', updateLogoFor440);


})();


//menu lang
(() => {

  let languageBtn = document.querySelector('.js_language');
  let languageBox = document.querySelector('.js_language_box');
  let languageItems = document.querySelectorAll('.js_language_item');
  let langEn = document.querySelector('.js_language_item-en');
  let langRu = document.querySelector('.js_language_item-ru');
  let langBoxBurger = document.querySelector('.js_menu_language_btn');
  

  if (languageBtn) {
    languageBtn.addEventListener('click', function () {
      languageBox.classList.add('active');
      this.classList.add('active');
    })
  }

  if (languageItems) {
    for (let i = 0; i < languageItems.length; i++) {
      languageItems[i].addEventListener('click', function () {

        languageBox.classList.remove('active');
        languageBtn.classList.remove('active');
        let item = this.querySelector('span');
        if (item.innerHTML == 'ru') {
          languageBtn.querySelector('span').innerHTML = 'ru';
          languageBtn.querySelector('i').classList.remove('flag_en');
          languageBtn.querySelector('i').classList.add('flag_ru');
          langEn.classList.remove('active');
          langRu.classList.add('active');

          langBoxBurger.querySelector('i').classList.remove('flag_en');
          langBoxBurger.querySelector('i').classList.add('flag_ru');
          langBoxBurger.querySelector('p').innerHTML = 'ru';
        } else {
          languageBtn.querySelector('span').innerHTML = 'en';
          languageBtn.querySelector('i').classList.remove('flag_ru');
          languageBtn.querySelector('i').classList.add('flag_en');
          langRu.classList.remove('active');
          langEn.classList.add('active');

          langBoxBurger.querySelector('i').classList.remove('flag_ru');
          langBoxBurger.querySelector('i').classList.add('flag_en');
          langBoxBurger.querySelector('p').innerHTML = 'en';
        }
      })
    }
  }


  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(languageBtn);
    const gambLk = e.composedPath().includes(languageBox);
    if (!lkEl && !gambLk) {
      languageBtn.classList.remove('active');
      languageBox.classList.remove('active');
    }

  })

})();



//language
(() => {

  const languageButtons = document.querySelectorAll('.js_language_item');
  const rusElements = document.querySelectorAll('[data-rus]');
  const engElements = document.querySelectorAll('[data-eng]');
  const langBurgerBox = document.querySelector('.js_menu_language_box');
  const videoBoxRu = document.querySelector('.js_video_main-ru');
  const videoBoxEn = document.querySelector('.js_video_main-en');


  function applyLanguage(lang) {
    if (lang === 'ru') {
      videoBoxRu.classList.add('active');
      videoBoxEn.classList.remove('active');
      engElements.forEach(el => {
        let engValue = el.getAttribute('data-rus');
        el.innerHTML = engValue;
      });
    } else {
      videoBoxRu.classList.remove('active');
      videoBoxEn.classList.add('active');
      rusElements.forEach(el => {
        let rusValue = el.getAttribute('data-eng');
        el.innerHTML = rusValue;
      });
    }
  }

  if (languageButtons.length > 0) {
    for (let i = 0; i < languageButtons.length; i++) {
      languageButtons[i].addEventListener('click', function () {
        langBurgerBox.classList.remove('active');
        let item = this.querySelector('span');
        const currentText = item.innerHTML;
        if (currentText === 'ru') {
          applyLanguage('ru');
          localStorage.setItem('siteLanguage', 'ru');
        } else {
          applyLanguage('en');
          localStorage.setItem('siteLanguage', 'en');
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('siteLanguage') || 'ru';
    applyLanguage(savedLang);
  });

})();






//burger menu
(() => {

  let burgerBtn = document.querySelector('.js_menu_btn');
  let burgerBox = document.querySelector('.js_menu_box');
  let burgerItem = document.querySelector('.js_menu_language_btn');
  let burgerItemBox = document.querySelector('.js_menu_language_box')

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      burgerBox.classList.toggle('active');
    })
  }

  if(burgerItem){
      burgerItem.addEventListener('click', function(){
        burgerBox.classList.remove('active');
        burgerItemBox.classList.add('active');
      })
    
  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(burgerBtn);
    const gambLk = e.composedPath().includes(burgerBox);
    if (!lkEl && !gambLk) {
      burgerBox.classList.remove('active');
    }

  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(burgerItemBox);
    const gambLk = e.composedPath().includes(burgerBox);
    if (!lkEl && !gambLk) {
      burgerItemBox.classList.remove('active');
    }

  })

})();



//console
(() => {
 
  let consoleBtn = document.querySelectorAll('.js_header_console');

  if(consoleBtn){
    for(let i = 0; i < consoleBtn.length; i++){
      consoleBtn[i].addEventListener('click', function(){
        this.classList.toggle('turn_on');
      })
    }
  }


})();