window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function scrollHeader() {
  var el = document.getElementsByTagName('header')[0]
  var theCSSprop = window.getComputedStyle(el, null);

  var scroll = getCurrentScroll();
  if (scroll < 90) {
    el.style.top = -scroll + 'px';
  } else {
    el.style.top = '-90px';
  }
}

function showMobileNav() {
  document.getElementById('nav').classList.add('show');
}

function hideMobileNav() {
  document.getElementById('nav').classList.remove('show');
}

window.addEventListener('scroll', scrollHeader);
document.getElementById('btn-m-nav').addEventListener('click', showMobileNav);
document.getElementById('nav').addEventListener('click', hideMobileNav);
