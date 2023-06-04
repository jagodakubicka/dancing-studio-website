const menuList = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.nav-btn');
const btnImg  = document.querySelector('#nav-btn')

function checkScreenWidth(){
 if(window.screen.width >= 450){
 menuList.classList.remove('hide-nav')
}
}
console.log(screen.width)
const toggleMenu = () => {
 menuList.classList.toggle('hide-nav')
}

menuBtn.addEventListener('click', () => toggleMenu())

checkScreenWidth();