const menuButton = document.querySelector('.header__main-ham-menu-cont');
const mobileMenu = document.querySelector('#mobile-navigation');
const openIcon = document.querySelector('.header__main-ham-menu');
const closeIcon = document.querySelector('.header__main-ham-menu-close');

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.classList.toggle('header__sm-menu--active', isOpen);
  openIcon.classList.toggle('d-none', isOpen);
  closeIcon.classList.toggle('d-none', !isOpen);
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') === 'false');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.querySelector('[data-current-year]').textContent = new Date().getFullYear();

const contactForm = document.querySelector('.contact__form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  window.alert('Please contact me via email or WhatsApp.');
});
