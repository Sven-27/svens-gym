const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon'); 
const nav = document.querySelector('nav');	
const dropdown = document.querySelector('#dropdown');
const button = document.querySelector('.dd-btn');

const toggleMenu = () => {
  nav.classList.toggle('menu');
}

const showDropdown = () => {
  dropdown.classList.toggle('show');
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
button.addEventListener('click', showDropdown);