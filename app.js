const header = document.getElementById('header');

const mobileNav = document.getElementById('mobile-nav');
const mobileNavLogo = document.getElementById('mobile-nav-logo');

const howImages = document.querySelectorAll('.how-we-work__img');

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function scrollHandler(event) {
  let scrollTop = event.target.scrollingElement.scrollTop;
  if(scrollTop > document.body.offsetHeight) {
    mobileNav.classList.add('mobile-nav--show');
  } else {
    mobileNav.classList.remove('mobile-nav--show');
  }

  howImages.forEach((el, i) => {
    if (isInViewport(el) && !el.classList.contains('how-we-work__img--show')) {
      el.classList.add('how-we-work__img--show');
    }
  });
}

window.addEventListener('scroll', scrollHandler);

mobileNavLogo.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.toggle('mobile-nav--open');
})
