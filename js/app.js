/* global TypeIt*/

console.log('js loaded');

const placeholders = {
  about: [0, 515],
  skills: [515, 1470],
  portfolio: [1470, 3895],
  experience: [3895, 4650]
};

// Dom content loaded
$(() => {
  init();
});

function init() {
  const $links = $('.navbar-item');

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

  $(window).scroll(() =>{
    for(var section in placeholders) {
      if($('html, body').scrollTop() >= placeholders[section][0] && $('html, body').scrollTop() < placeholders[section][1]) {
        $(`.${section}`).addClass('active');
      } else {
        $(`.${section}`).removeClass('active');
      }
    }
  });

}
