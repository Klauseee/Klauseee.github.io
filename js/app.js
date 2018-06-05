/* global TypeIt*/

console.log('js loaded');

// const placeholders = {
//   about: ,
//   skills: ,
//   portfolio: ,
//   experience: ,
//   education:
// }

// Dom content loaded
$(() => {
  init();
});

function init() {
  const $links = $('.navbar-item');
  console.log($links);

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
    loop: true,
    speed: 100,
    deleteSpeed: 30
  })
    .type('Hi there, I\'m Nic!')
    .pause(1000)
    .delete()
    .type('Web developer')
    .pause(1000)
    .delete()
    .type('SciFi fan')
    .pause(1000)
    .delete()
    .type('Weighlifting coach')
    .pause(1000)
    .delete();

  $links.on('click', ($el) => {
    const $target = $el.target.text.toLowerCase();
    const value = $(`#${$target}`).offset().top;
    $('html, body').animate({
      scrollTop: `${value}px`
    });
  });

}
