// Hero-section Анимация появления

const alert = document.querySelector('.hero__alert'),
  body = document.body || document.getElementsByTagName('body')[0];


function alertStart() {

  alert.setAttribute("id", "alert_start");
  body.style.overflow = 'hidden';

}

let header = document.querySelector('.header');

function headerSticky() {

  function r1() {
    header.setAttribute("id", "acthead");
  }

  setTimeout(r1, 1000);

}

function animateHero() {

  let m1 = document.querySelector('.hero__module01'),
    m2 = document.querySelector('.hero__module02'),
    m3 = document.querySelector('.hero__module03'),
    m4 = document.querySelector('.hero__module04'),
    bigObg = document.querySelector('.hero__bigobj'),
    fog = document.querySelector('.hero__fog'),
    blur = document.querySelector('.hero__blur');
  m1.setAttribute("id", "module01");
  m2.setAttribute("id", "module02");
  m3.setAttribute("id", "module03");
  m4.setAttribute("id", "module04");
  bigObg.setAttribute("id", "bigdevice");
  fog.setAttribute("id", "fog");
  blur.setAttribute("id", "blur");
  //setTimeout(alertStart, 2000);
}

// закрытие окна про куки

document.addEventListener('click', alertFinish);

function alertFinish(ev) {

  const area = ev.target.closest("#sub");
  const area2 = ev.target.closest("#unsub");

  if ((area) || (area2)) {

    alert.removeAttribute("id", "alert_start");
    animateHero();
    document.removeEventListener('scroll', alertStart);
    body.style.overflow = 'scroll';
    headerSticky();
  }
}

document.addEventListener('scroll', alertStart);


//выбор языка

let langwRandome = document.querySelector('.header__chose-lang'),
  randomePot = document.querySelector('.header__randome'),
  langwText = langwRandome.firstElementChild,
  counter = 0;

langwRandome.addEventListener('mouseover', inn);
langwRandome.addEventListener('click', inn);

function inn() {
  randomePot.setAttribute("id", "list-start");
}

randomePot.addEventListener('mouseout', () => {
  randomePot.removeAttribute("id", "list-start");
})





//функция не работает, если не повесить onclick на каждую кнопку в списке (не через addevlis, а через тег onclick)
function listener(event) {
  let el = event.target;

  if (el) {

    let a = el.textContent,
      b = langwText.textContent;

    let tmp = a;
    a = b;
    b = tmp;
    langwText.textContent = b;
    el.textContent = a;

    function goodby() {

      randomePot.removeAttribute("id", "list-start");

    }
    setTimeout(goodby, 200);
  }
}






//accordeon

let accordeon = document.querySelector('.questions__part2'),
  tab = document.querySelectorAll('.questions__block'),
  button = document.querySelectorAll('.questions__toform'),
  arrows = document.querySelectorAll('.questions__toform'),
  count;

function click1(e) {
  const target = e.target.closest('.questions__block');
  if (target) {

    tab.forEach((item) => {

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
    el: '.swiper-pagination',
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

function moreFn() {
  //e.preventDefault();
  document.getElementById('form-down-2').scrollIntoView({
    block: "start",
    behavior: 'smooth'
  })
}




// бургер - меню

let burgerMenu = document.querySelector('.header__burger'),
  burgerBtn = document.querySelector('.header__burger-btn'),
  burgerCloseBtn = document.querySelector('.header__cross'),
  headerCover = document.querySelector('.header__cover'), //затемнение на фоне
  burgerLinks = document.getElementById('header_links'),
  upForm = document.querySelector(".header__form"),//верхняя форма
  burgerGetinfo = document.querySelector('.header__form-btn');

burgerBtn.addEventListener('click', (e) => {

  if (burgerMenu.classList.contains('header__burger--out')) {
    burgerMenu.classList.remove('header__burger--out');
  };
  burgerMenu.classList.add('header__burger--in');
  headerCover.style.display = 'block';
  body.style.overflow = 'hidden';

  // document.addEventListener('click', nonFormClick);

  e.stopImmediatePropagation()
});



// Логика после открытия бургер - меню, если хотят закрыть его

let closeBurger = function () {

  burgerMenu.classList.remove('header__burger--in');
  headerCover.style.display = 'none';
  body.style.overflow = 'scroll';
  // e.stopImmediatePropagation();

}

document.addEventListener('click', (e) => {

  let mBurger = e.composedPath().includes(burgerMenu);
  let formBtnClicked = e.composedPath().includes(burgerGetinfo);
  let noField = false;
  let FieldForm = e.composedPath().includes(upForm);
  let noFieldForm = false;

  // const withinBoundaries = e.composedPath().includes(div);

  if (formBtnClicked) {

    burgerMenu.classList.remove('header__burger--in');
    upForm.style.display = 'block';

  }

  if (!mBurger) {
    noField = true;
  }

  let puArr = [

    e.composedPath().includes(burgerCloseBtn),
    e.composedPath().includes(burgerLinks)

  ];

  puArr.forEach(item => {
    if (item) { closeBurger(); }
  })


  if (noField === true) {

    if (!FieldForm) {
      noFieldForm = true;
      upForm.style.display = 'none';
      closeBurger();
    }
  }
})




///////////////////

// форма отправки и валидация


let f_formSucess = false;

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('form');


  form.addEventListener('submit', (event) => {

    event.preventDefault();

    console.log('submit');

    validForm();

    console.log(f_formSucess);


    if (f_formSucess === true) {

      const sendForm = (data) => {

        return fetch('finish.php', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(res => res.json());
      }

      const dataForm = new FormData(event.target);
      const user = {};

      dataForm.forEach((val, key) => {
        user[key] = val;
      })
      sendForm(user).then(data => {
        console.log('Письмо ушло'); //здесь вставлять сообщение об успешной отсылке
      })

      event.target.reset(); //обнуляет форму

      f_formSucess = false;
    }
  })
})



let telSelector = document.getElementById('phone'),
  nameSelector = document.getElementById('name'),
  questionSelector = document.getElementById('question');

const telValid = new Inputmask({
  mask: "+*{1,20}",
  greedy: false,
  definitions: {
    '*': {
      validator: "[0-9\u0028\u0029\u002d]",//валидация пропускает только числа от 0 до 9, дефис и скобки
    }
  }
});

telValid.mask(telSelector); //применяем сформированную маску для указанного инпута emailSelector


let validForm = function () {


  let long = telSelector.value,
    long2 = nameSelector.value,
    long3 = questionSelector.value;
  let longNum = long.replace(/[^0-9]/g, ""); //удаляем из строки всё, кроме цифр  // ошибка из-за этого

  if ((document.getElementById('agree').checked)) {

    if (((longNum.length > 2) && (longNum.length < 50)) && ((long2.length > 1) && (long2.length < 36)) && ((long3.length > 2) && (long3.length < 1501))) {

      document.getElementById('warning').style.display = "block";
      document.getElementById('warning').style.color = "#49ff0c";
      document.getElementById('warning').textContent = "Спасибо, мы свяжемся с Вами!";

      function formSucess() {

        closeBurger();

        document.getElementById('warning').style.display = "none";

      }
      setTimeout(formSucess, 2000);


      console.log('процесс отправки формы')


      function goodby() {

        document.querySelector('.header__form').style.display = "none";
        headerCover.style.display = 'none';
        body.style.overflow = 'scroll';

      }

      setTimeout(goodby, 2000);

      console.log('валидация прошла успешно');

      f_formSucess = true;

    } else {

      console.log('форма не прошла по валидации');


      document.getElementById('warning').textContent = "Пожалуйста введите правильные данные";
      document.getElementById('warning').style.display = "block";

    }
  } else {

    console.log('форма не прошла по валидации');

    document.getElementById('warning').textContent = "Пожалуйста дайте свое согласие на обработку персональных данных";
    document.getElementById('warning').style.display = "block";
  }
}


///////////////////

// форма отправки и валидация


let f_formSucess2 = false;

document.addEventListener('DOMContentLoaded', function () {

  const form2 = document.getElementById('form-down');


  form2.addEventListener('submit', (event) => {

    event.preventDefault();

    console.log('submit');

    validForm2();

    console.log(f_formSucess2);


    if (f_formSucess2 === true) {

      const sendForm2 = (data) => {

        return fetch('finish2.php', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(res => res.json());
      }

      const dataForm = new FormData(event.target);
      const user = {};

      dataForm.forEach((val, key) => {
        user[key] = val;
      })
      sendForm2(user).then(data => {
        console.log('Письмо ушло'); //здесь вставлять сообщение об успешной отсылке
      })

      event.target.reset(); //обнуляет форму

      f_formSucess2 = false;
    }
  })
})



let telSelector2 = document.getElementById('phone-f'),
  nameSelector2 = document.getElementById('name-f'),
  questionSelector2 = document.getElementById('question-f');

const telValid2 = new Inputmask({
  mask: "+*{1,20}",
  greedy: false,
  definitions: {
    '*': {
      validator: "[0-9\u0028\u0029\u002d]",//валидация пропускает только числа от 0 до 9, дефис и скобки
    }
  }
});

telValid2.mask(telSelector2); //применяем сформированную маску для указанного инпута emailSelector


let validForm2 = function () {


  let long4 = telSelector2.value,
    long5 = nameSelector2.value,
    long6 = questionSelector2.value;
  let longNum2 = long4.replace(/[^0-9]/g, ""); //удаляем из строки всё, кроме цифр  // ошибка из-за этого

  if ((document.getElementById('agree-f').checked)) {

    if (((longNum2.length > 2) && (longNum2.length < 50)) && ((long5.length > 1) && (long5.length < 36)) && ((long6.length > 2) && (long6.length < 1501))) {

      document.getElementById('warning-f').style.display = "block";
      document.getElementById('warning-f').style.color = "#49ff0c";
      document.getElementById('warning-f').textContent = "Спасибо, мы свяжемся с Вами!";

      function formSucess2() {

        document.getElementById('warning-f').style.display = "none";

      }
      setTimeout(formSucess2, 2000);

      console.log('валидация прошла успешно');

      f_formSucess2 = true;

    } else {

      console.log('форма не прошла по валидации');


      document.getElementById('warning-f').textContent = "Пожалуйста введите правильные данные";
      document.getElementById('warning-f').style.display = "block";

    }
  } else {

    console.log('форма не прошла по валидации');

    document.getElementById('warning-f').textContent = "Пожалуйста дайте свое согласие на обработку персональных данных";
    document.getElementById('warning-f').style.display = "block";
  }
}










