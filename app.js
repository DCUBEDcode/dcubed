const header = document.getElementById('header');
const headerTop = header.offsetTop;

const content = document.getElementById('content');
const contentTop = content.offsetTop - 50;

const contact = document.getElementById('contact');
const contactTop = contact.offsetTop - 50;

const portfolio = document.getElementById('portfolio');
const portfolioTop = portfolio.offsetTop - 50;
let portfolioVisible = false;

const navItems = document.querySelectorAll('.nav__item');

window.addEventListener('scroll', (e) => {
  const headerStuck = header.classList.contains('header--stuck');

  console.log(window.scrollY, portfolio.offsetTop);
  if(window.scrollY >= portfolioTop && !headerStuck) {
    //header.classList.add('header--stuck')
  }
  if(window.scrollY < portfolioTop && headerStuck) {
    //header.classList.remove('header--stuck')
  }

  // Active portfolio
  if(window.scrollY >= portfolioTop) {
    header.classList.add('header--portfolio')
  }
  if(window.scrollY < portfolioTop) {
    header.classList.remove('header--portfolio')
  }

  // Active services
  if(window.scrollY >= contentTop) {
    header.classList.add('header--services')
  }
  if(window.scrollY < contentTop && headerStuck) {
    header.classList.remove('header--services');
    header.classList.add('header--portfolio');
  }

  // Active contact
  if(window.scrollY >= contactTop) {
    document.body.classList.add('contact-visible');
    header.classList.add('header--contact')
  }
  if(window.scrollY < contactTop && window.scrollY >= contentTop && headerStuck) {
    document.body.classList.remove('contact-visible');
    header.classList.remove('header--contact');
    header.classList.add('header--services');
  }

  // Show portfolio
  if(window.scrollY > 200 && !portfolioVisible) {
    portfolioVisible = true;
    portfolio.classList.add('portfolio--show')
  }

  if(window.scrollY < 200 && portfolioVisible) {
    portfolioVisible = false;
    portfolio.classList.remove('portfolio--show')
  }

  navItems.forEach((el) => {
    el.addEventListener('click', (e) => {
      const scrollTo = e.target.dataset.scrollTo;
      document.getElementById(scrollTo).scrollTo;
    })
  })

})
