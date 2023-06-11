const menuList = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.nav-btn');
const btnImg  = document.querySelector('#nav-btn');

const toggleMenu = () => {
 menuList.classList.toggle('hide-nav')
}

menuBtn.addEventListener('click', () => toggleMenu())
