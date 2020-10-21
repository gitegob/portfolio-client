const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;
const theme = localStorage.getItem('theme');
const burgerIcon = document.querySelector('.burger-icon');
const sideNav = document.querySelector('.sidebar');
const sideLinks = document.querySelectorAll('.side-item');

const toggleNav = () => {
  burgerIcon.classList.toggle('burger-active');
  if (sideNav.style.width === '100%') sideNav.style.width = '0';
  else sideNav.style.width = '100%';
};

if (theme) {
  body.classList.add(theme);
}


burgerIcon.addEventListener('click', () => toggleNav());

sideLinks.forEach(link => {
  link.addEventListener('click', () => toggleNav());
});
