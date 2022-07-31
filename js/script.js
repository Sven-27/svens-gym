const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon'); 
const nav = document.querySelector('nav');	
const navLink = document.querySelectorAll('.nav-link');

const toggleMenu = () => {
  nav.classList.toggle('menu');
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);