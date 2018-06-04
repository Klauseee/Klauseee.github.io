/* global TypeIt*/

console.log('js loaded');


function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener('DOMContentLoaded', init);

function init() {
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
}

function scrollLoop() {

  const background = document.querySelector('#background-image');
  const yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * -0.035, background);
  requestAnimationFrame(scrollLoop);
}
