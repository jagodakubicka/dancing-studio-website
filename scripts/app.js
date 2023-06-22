const menuList = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.nav-btn');
const btnImg  = document.querySelector('#nav-btn');

const toggleMenu = () => {
 menuList.classList.toggle('hide-nav')
}

menuBtn.addEventListener('click', () => toggleMenu())


const offerCtn = document.querySelector('.offer-container')

const getOffers = async () => {
 const response = await fetch('./data/data.json');
 const data = await response.json()

 return data;
}

const updateUI = (data) => {
 const {} = data
}

getOffers()
.then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err.message))




