// removes un-needed slides
const MOBILE_WIDTH = window.matchMedia("(max-width: 500px");
if (MOBILE_WIDTH.matches) {
  document.querySelector('.desktop').remove();
} else {
  document.querySelector('.mobile').remove();
}

// constants
const IMAGE_COUNT = document.querySelectorAll('.slide').length;

// increments
var IMAGE_INDEX = 0;

function fadeOut(element) {
  let initialOpacity = 1;

  var fadeOutTimer = setInterval(function () {
    if (initialOpacity <= 0.0) {
      clearInterval(fadeOutTimer);
    }

    element.style.opacity = initialOpacity;
    initialOpacity -= 0.01;
  }, 20)
}

function fadeIn(element) {
  let initialOpacity = 0.0;
  var fadeInTimer = setInterval(function () {
    if (initialOpacity >= 1) {
      clearInterval(fadeInTimer);
    }

    element.style.opacity = initialOpacity;
    initialOpacity += 0.01;
  }, 20);
}

function currentSlide() {
  return document.querySelectorAll('.slide')[currentIndex()];
}

function nextSlide() {
  return document.querySelectorAll('.slide')[nextIndex()];
}

function currentIndex() {
  return IMAGE_INDEX % IMAGE_COUNT;
}

function nextIndex() {
  return (IMAGE_INDEX + 1) % IMAGE_COUNT;
}

// holds image for 5 seconds, fades out, fades in new image
setInterval(function() {
  fadeOut(currentSlide());
  fadeIn(nextSlide());
  IMAGE_INDEX++;
}, 5000)

// info below here
const info = document.querySelector('#info');
const infoClose = document.querySelector('#info #close');
infoClose.addEventListener('click', slideOut);
const aboutIcon = document.querySelector('#about')
aboutIcon.addEventListener('click', slideIn)

function slideOut() {
  let initialHeight = info.clientHeight;
  var slideTimer = setInterval(function () {
    if (initialHeight <= 0) {
      clearInterval(slideTimer);
    }

    initialHeight -= 20;
    info.style.height = `${initialHeight}px`;
  }, 20);
}

function slideIn() {
  if (info.clientHeight > 0) {
    return null;
  }

  let initialHeight = info.clientHeight;
  var slideTimer = setInterval(function () {
    if (initialHeight >= window.innerHeight / 2) {
      clearInterval(slideTimer);
    }

    initialHeight += 20;
    info.style.height = `${initialHeight}px`;
  }, 20);
}
