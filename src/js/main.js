
// бургер-иеню

let burgerMenu = document.querySelector('.header__burger'),
  burgerBtn = document.querySelector('.header__burger-btn'),
  burgerClose = document.querySelector('.header__cross'),
  headerCover = document.querySelector('.header__cover'),
  burgerLinks = document.getElementById('header_links'),
  upForm = document.querySelector(".header__form"),
  burgerGetinfo = document.querySelector('.header__form-btn'),
  body = document.body || document.getElementsByTagName('body')[0];

burgerBtn.addEventListener('click', (e) => {

  if (burgerMenu.classList.contains('header__burger--out')) {
      burgerMenu.classList.remove('header__burger--out');
  };
  burgerMenu.classList.add('header__burger--in');
  headerCover.style.display = 'block';
  body.style.overflow = 'hidden';
  e.stopImmediatePropagation()
});

let puArr = [burgerClose, burgerLinks].forEach(item => {
  item.addEventListener('click', (e) => {
    burgerMenu.classList.remove('header__burger--in');
    headerCover.style.display = 'none';
    body.style.overflow = 'scroll';
    e.stopImmediatePropagation();
    });
});

burgerGetinfo.addEventListener('click', (e) => {
  burgerMenu.classList.remove('header__burger--in');
  upForm.style.display = 'block';
  e.stopImmediatePropagation();
});

// верхняя форма

let upperFormBtn = document.querySelector('.form__btn');

upForm.addEventListener('click', (e) => {
  
  if (e.target.closest('.form__btn')) {

      sendForm();

  }
})

//Маска формы

let telSelector = document.querySelector('.tel-selector'),
  nameSelector = document.getElementById('name'),
  questionSelector = document.getElementById('question');

// let telSelectorDown = document.querySelector('.tel-selector'),
//     nameSelectorDown = document.getElementById('name-f'),
//   questionSelectorDown = document.getElementById('question-f');  

Inputmask({ "mask": "+7(999)999-99-99", "greedy": "true" }).mask(telSelector);

let sendForm = function () {
    
  document.addEventListener('submit', function(event) {
    event.preventDefault();
    let long = telSelector.value, 
      long2 = nameSelector.value,
      long3 = questionSelector.value;
    let longNum = long.replace(/[^0-9]/g, ""); //удаляем из строки всё, кроме цифр  // ошибка из-за этого

    if (document.getElementById('agree').checked) {
      
      if (((longNum.length > 2) && (longNum.length < 50)) && ((long2.length > 1) && (long2.length < 36)) && ((long3.length > 2) && (long3.length < 1501))) {
      
        document.getElementById('warning').style.display = "block";
        document.getElementById('warning').style.color = "#49ff0c";
        document.getElementById('warning').textContent = "Спасибо, мы свяжемся с Вами!";
    
        function goodby() {
            
          document.querySelector('.header__form').style.display = "none";
          headerCover.style.display = 'none';
          body.style.overflow = 'scroll';

        }
        setTimeout(goodby, 2000);
          
      } else {

        document.getElementById('warning').textContent = "Пожалуйста введите правильные данные";
        document.getElementById('warning').style.display = "block";

      }
    } else {

      document.getElementById('warning').textContent = "Пожалуйста дайте свое согласие на обработку персональных данных";
      document.getElementById('warning').style.display = "block";

    }
  })
}

// Hижняя форма

/* downForm = document.querySelector(".more__form");

downForm.addEventListener('click', (e) => {
  
  if (e.target.closest('.form__btn-down')) {

      sendForm();

  }
}) */


/* //Маска формы

let sendFormDown = function () {
  // let form = document.getElementById('form');
    
  document.addEventListener('submit', function(event2) {
    event2.preventDefault();
    let long = telSelectorDown.value,
      long2 = nameSelectorDown.value,
      long3 = questionSelectorDown.value;
    let longNum = long.replace(/[^0-9]/g, ""); //удаляем из строки всё, кроме цифр

    if (document.getElementById('agree-f').checked) {
      
      if (((longNum.length > 2) && (longNum.length < 50)) && ((long2.length > 1) && (long2.length < 36)) && ((long3.length > 2) && (long3.length < 1501))) {
      
        document.getElementById('warning').style.display = "block";
        document.getElementById('warning').style.color = "#49ff0c";
        document.getElementById('warning').textContent = "Спасибо, мы свяжемся с Вами!";
    
        function goodby() {
            
          document.querySelector('.more__form').style.display = "none";
          headerCover.style.display = 'none';
          body.style.overflow = 'scroll';

        }
        setTimeout(goodby, 2000);
          
      } else {

        document.getElementById('warning-f').textContent = "Пожалуйста введите правильные данные";
        document.getElementById('warning-f').style.display = "block";

      }
    } else {

      document.getElementById('warning-f').textContent = "Пожалуйста дайте свое согласие на обработку персональных данных";
      document.getElementById('warning-f').style.display = "block";

    }
  })
} */

// Hero-section Анимация появления

function animStart () {

  let m1 = document.querySelector('.hero__module01'),
    m2 = document.querySelector('.hero__module02'),
    m3 = document.querySelector('.hero__module03'),
    m4 = document.querySelector('.hero__module04'),
    bigObg = document.querySelector('.hero__bigobj'),
    fog = document.querySelector('.hero__fog'),
    blur = document.querySelector('.hero__blur'),
    alert = document.querySelector('.hero__alert');
  m1.setAttribute("id", "module01");
  m2.setAttribute("id", "module02");
  m3.setAttribute("id", "module03");
  m4.setAttribute("id", "module04");
  bigObg.setAttribute("id", "bigdevice");
  fog.setAttribute("id", "fog");
  blur.setAttribute("id", "blur");
  setTimeout(alertStart, 2000);

  function alertStart() {

    alert.setAttribute("id", "alert_start");

    document.removeEventListener('click', animStart);

  }
}

document.addEventListener('click', animStart);

// закрытие окна про куки

function alertStart(ev) {

  alert = document.querySelector('.hero__alert');

  const area = ev.target.closest("#sub");
    
  if (area) { 

    alert.removeAttribute("id", "alert_start");

  }
}

body.addEventListener('click', alertStart);


//accordeon

let accordeon = document.querySelector('.questions__part2'),
    tab = document.querySelectorAll('.questions__block'),
    button = document.querySelectorAll('.questions__toform'),
    arrows = document.querySelectorAll('.questions__toform'),
    count;

function click1(e) {
    const target = e.target.closest('.questions__block');
  if (target) {
      
    tab.forEach((item, i) => {

      let child = item.firstElementChild.lastElementChild;
  
      if (item === target) {

        
        if (item.classList.contains('mark')) {

          if (count == 1) {
        
            child.removeAttribute("id", "block-act--in");
            child.setAttribute("id", "block-act--out");
            item.lastElementChild.style.transform = 'rotate(0deg)' + 'translate(0, -50%)';
            item.lastElementChild.style.top = '50%';
            count++

          } else if (count == 2) {
        
            child.removeAttribute("id", "block-act--out");
            child.setAttribute("id", "block-act--in");
            item.lastElementChild.style.transform = 'rotate(180deg)' + 'translate(0, 0)';
            item.lastElementChild.style.top = '30px';
            count--

          }
        } else {

          child.setAttribute("id", "block-act--in");
          count = 0;
          count++;
          item.classList.add('mark');
          item.lastElementChild.style.transform = 'rotate(180deg)' + 'translate(0, 0)';
          item.lastElementChild.style.top = '30px';
        }
      } 
    })
  };
};
accordeon.addEventListener('click', (e) => {
    click1(e);
});





//Проигрыватель



document.addEventListener('DOMContentLoaded', function () {

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    let ytCross = document.getElementById('vcross1'),
        backgro = document.getElementById('vframe1'),
        ytBack = document.querySelector('.cover'),
        mark = document.querySelector('.video__link'),
        body = document.querySelector('body');

    mark.addEventListener('click', (e) => {
        backgro.classList.add('active');
        ytBack.classList.add('active');
        body.style.overflow = 'hidden';
        player = new YT.Player('player', {
            height: '1080',
            width: '100%',
            videoId: mark.dataset.video,//из атрибута data-video кнопки
            playerVars: { 'autoplay': 1, 'controls': 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        function onPlayerReady(event) {
            event.target.setVolume(30);
            event.target.playVideo();
            event.target.setPlaybackQuality('highres');
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.BUFFERING) {
                event.target.setPlaybackQuality('highres');
            }
        }
    })

    let ytbgArr = [ytBack, ytCross];
    ytbgArr.forEach(item => {
        item.addEventListener('click', (e) => {
            backgro.classList.remove('active');
            ytBack.classList.remove('active');
            body.style.overflow = 'scroll';
            player.destroy();
        });
    });
})


//- swiper

const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    loop: true, // Бесконечная прокрутка
    pagination: {
        el: '.slider__pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev',
    },
});



//Плавная прокрутка до ссылок



function TestDriveFn() {
    //e.preventDefault();
    document.getElementById('testdrive').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function decisionsFn() {
    //e.preventDefault();
    document.getElementById('decisions').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function learningFn() {
    //e.preventDefault();
    document.getElementById('learning').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function trustFn() {
    //e.preventDefault();
    document.getElementById('trust').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function questionsFn() {
    //e.preventDefault();
    document.getElementById('questions').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}




