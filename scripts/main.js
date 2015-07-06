window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

window.addEventListener("scroll", checkHeader);


function checkHeader() {
  var elem = document.getElementsByClassName('mh')[0]
  var theCSSprop = window.getComputedStyle(elem, null);

  var scroll = getCurrentScroll();
  if (scroll < 85) {
    elem.style.top = -scroll + 'px';
  } else {
    elem.style.top = '-85px';
  }
}