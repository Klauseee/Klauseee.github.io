console.log('js loaded');


function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener('DOMContentLoaded', scrollLoop, false);


function scrollLoop() {

  const background = document.querySelector('#background-image');
  const yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * -0.25, background);
  requestAnimationFrame(scrollLoop);
}
