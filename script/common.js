let adSub = document.querySelector('.ad-adress__sub');
let adItem = document.querySelector('.ad-adress_active');
adItem.addEventListener('click', function (e) {
  e.preventDefault();
  adSub.classList.toggle('active');
  adItem.classList.toggle('active');
});
$('.nav__link').click(function (e) {
  e.preventDefault();
  $(this).next('.nav__sub-menu').toggleClass('active');
  $(this).find('icon').toggleClass('active');
  $('.nav__link').not($(this)).next('.nav__sub-menu').removeClass('active');
  $('.nav__link').not($(this)).find('icon').removeClass('active');
});
$(document).click(function (e) {
  if (!e.target.closest('.nav__link' && '.nav__sub-menu' && 'li')) {
    $('.nav__sub-menu').removeClass('active');
    $('icon').removeClass('active');
  }
});
$('.nav__burger').click(function () {
  $('.nav__burger').toggleClass('active');
  $('.nav__menu').toggleClass('active');
  $('body').addClass('noscroll');

  if (!$('.nav__burger').hasClass('active')) {
    $('body').removeClass('noscroll');
  }
});
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav');
  const banner = document.querySelector('.banner');
  let adHeight = $('.ad').outerHeight();

  if (window.pageYOffset > adHeight) {
    nav.classList.add('active');
    banner.classList.add('active');
  } else {
    nav.classList.remove('active');
    banner.classList.remove('active');
  }
});
const popupLinks = document.querySelectorAll('.popup-link'),
      body = document.querySelector('body'),
      lockPadding = document.querySelector('.lock-padding');
let unlock = true;
const timeout = 800; // console.log(popupLinks.length);
// console.log(popupLinks);

if (popupLinks.length > 0) {
  // console.log(1);
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');

    if (popupActive) {
      popupClose(popupActive, false);
    }

    curentPopup.classList.add('open');
    body.classList.add('lock');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    body.classList.remove('lock');
  }
}

$('.banner__slider').slick({
  // fade: true,
  cssEase: 'linear',
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
}); // const tabBlock = document.querySelectorAll('.tab__block'),
//         tabLink = document.querySelectorAll('.tab__link'),
//         tabParent = document.querySelector('.banner__tab');
// function hideTabContent() { 
//     tabBlock.forEach(item => {
//         item.classList.add('hide');
//         item.classList.remove('show', 'fade');
//     })
//     tabLink.forEach(item => {
//         item.classList.remove('active', 'fade')
//     })
//  }
//  function showTabContent(i = 0) { 
//      tabBlock[i].classList.add('show', 'fade');
//      tabBlock[i].classList.remove('hide')
//      tabLink[i].classList.add('active')
// }
// hideTabContent();
// showTabContent();
// tabParent.addEventListener('click', (e) => {
//     e.preventDefault();
//     const target = e.target;
//     if(target && target.classList.contains('tab__link')) {
//         tabLink.forEach((item, n) => {
//             if(target == item) {
//                 console.log(item);
//                 console.log(n);
//                 hideTabContent();
//                 showTabContent(n);
//             }
//         })
//     }
// })

const tabLink = document.querySelectorAll('.tab__link'),
      tabBlock = document.querySelectorAll('.tab__block'),
      tabParent = document.querySelector('.banner__tab');

function hideTab() {
  tabLink.forEach(item => {
    item.classList.remove('active');
  });
  tabBlock.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });
}

function showTab(i = 0) {
  tabBlock[i].classList.add('show', 'fade');
  tabBlock[i].classList.remove('hide');
  tabLink[i].classList.add('active');
}

hideTab();
showTab();
tabParent.addEventListener('click', function (e) {
  e.preventDefault();
  let target = e.target;

  if (target.classList.contains('tab__link')) {
    tabLink.forEach((item, n) => {
      if (target == item) {
        hideTab();
        showTab(n);
      }
    });
  }
});
const contentParent = document.querySelector('.content'),
      contentLink = document.querySelectorAll('.content__link'),
      contentBlock = document.querySelectorAll('.content__item');

function hideContent() {
  contentBlock.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('flex', 'fade');
  });
  contentLink.forEach(item => {
    item.classList.remove('active');
  });
}

function showContent(n = 0) {
  contentBlock[n].classList.remove('hide');
  contentBlock[n].classList.add('flex', 'fade');
  contentLink[n].classList.add('active');
}

hideContent();
showContent();
contentParent.addEventListener('click', function (e) {
  e.preventDefault();
  let target = e.target;

  if (target.classList.contains('content__link')) {
    contentLink.forEach((item, n) => {
      if (target == item) {
        hideContent();
        showContent(n);
      }
    });
  }
});
const newsParent = document.querySelector('.news'),
      newsLink = document.querySelectorAll('.news__link'),
      newsBlock = document.querySelectorAll('.news__item');

function showNews(n = 1) {
  newsLink[n].classList.add('active');
  newsBlock[n].classList.remove('hide');
  newsBlock[n].classList.add('flex', 'fade');
}

function hideNews() {
  newsBlock.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('flex', 'fade');
  });
  newsLink.forEach(item => {
    item.classList.remove('active');
  });
}

hideNews();
showNews();
newsParent.addEventListener('click', n => {
  n.preventDefault();
  target = n.target;

  if (target.classList.contains('news__link')) {
    newsLink.forEach((item, n) => {
      if (target == item) {
        hideNews();
        showNews(n);
      }
    });
  }
});
$('.icon-bottom').click(function () {
  $('.insurance__body').slideToggle(500);
  $(this).toggleClass('rotate');
});




AOS.init();
