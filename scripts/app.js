const menuList = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.nav-btn');
const btnImg  = document.querySelector('#nav-btn');

const windowWidth = window.screen

function checkScreenWidth(){
 if(window.screen.width >= 450){
 menuList.classList.remove('hide-nav')
 console.log('changed')
}
}
console.log(screen.width)
const toggleMenu = () => {
 menuList.classList.toggle('hide-nav')
}

menuBtn.addEventListener('click', () => toggleMenu())
windowWidth.addEventListener('resize', () => checkScreenWidth())
