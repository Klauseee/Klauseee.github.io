/* global TypeIt*/

console.log('js loaded');

const placeholders = {
  about: [],
  skills: [],
  portfolio: [],
  experience: []
};

// Dom content loaded
$(() => {
  init();
});

function init() {
  const $sections = $('main > section');
  const $links = $('.navbar-item');
  $('.about').addClass('active');

  $.each($sections, (i, section) => {
    console.log($(section).outerHeight());
    if(i < $sections.length - 1) {
      placeholders[section.id].push(($(section).offset().top - 150), ($($sections[i + 1]).offset().top - 150));
    }
  });

  $(window).scroll(() =>{
    for(var section in placeholders) {
      if($('html, body').scrollTop() >= placeholders[section][0] && $('html, body').scrollTop() < placeholders[section][1]) {
        $(`.${section}`).addClass('active');
      } else {
        $(`.${section}`).removeClass('active');
      }
      if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
        $('.education').addClass('active');
        $('.experience').removeClass('active');
      } else {
        $('.education').removeClass('active');
      }
    }
  });

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  function scrollLoop() {
    const background = document.querySelector('#background-image');
    const yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.035, background);
    requestAnimationFrame(scrollLoop);
  }

  scrollLoop();

  new TypeIt('.typeit', {
    strings: ['I\'m Nic Wilson!', 'Web developer', 'Weighlifting coach', 'SciFi fan' ],
    loop: true,
    speed: 100,
    deleteSpeed: 30
  });

  $links.on('click', ($el) => {
    const $target = $el.target.text.toLowerCase();
    const value = $(`#${$target}`).offset().top;
    $('html, body').animate({
      scrollTop: `${value}px`
    }, 1500);
  });

  $('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true
  });

}
