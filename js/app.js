let burgerMenuButton = document.getElementById('menuBurgerButton')
let menuBurger = document.getElementById('menuBurger')
let burgerMenuLine = document.getElementById('lineBurgerMenu')

let body = document.querySelector('body')

burgerMenuButton.addEventListener('click', () => {
  if (menuBurger.classList.value === 'menuBurger open') {
    body.classList.remove('hidden')
    menuBurger.classList.remove('open')
    menuBurger.classList.add('close')
    burgerMenuLine.classList.remove('burgerMenuOpen')
    burgerMenuButton.classList.remove('close')
  }
  else if (menuBurger.classList.value === 'menuBurger close') {
    body.classList.add('hidden')
    menuBurger.classList.remove('close')
    menuBurger.classList.add('open')
    burgerMenuLine.classList.add('burgerMenuOpen')
    burgerMenuButton.classList.add('close')
  }
})

function navigationItem() {
  body.classList.remove('hidden')
  menuBurger.classList.remove('open')
  menuBurger.classList.add('close')
  burgerMenuLine.classList.remove('burgerMenuOpen')
  burgerMenuButton.classList.remove('close')
}

let heroImgRed = document.getElementById('heroImgRed')
let heroImgGreen = document.getElementById('heroImgGreen')
let heroImgBlue = document.getElementById('heroImgBlue')

function activeColorRed() {
  document.documentElement.style.setProperty('--aciveColor', '#FF0000')

  heroImgRed.classList.remove('inactive')
  heroImgGreen.classList.add('inactive')
  heroImgBlue.classList.add('inactive')
}

function activeColorGreen() {
  document.documentElement.style.setProperty('--aciveColor', '#00A524')

  heroImgGreen.classList.remove('inactive')
  heroImgRed.classList.add('inactive')
  heroImgBlue.classList.add('inactive')
}

function activeColorBlue() {
  document.documentElement.style.setProperty('--aciveColor', '#0400D3')

  heroImgBlue.classList.remove('inactive')
  heroImgGreen.classList.add('inactive')
  heroImgRed.classList.add('inactive')
}

let themeColor = document.getElementById('body')

function themeWhite() {
  themeColor.style.backgroundColor = '#FFFFFF'  
  themeColor.style.color = '#000000'
  menuBurger.style.backgroundColor = '#FFFFFF'
  document.documentElement.style.setProperty('--colorText', '#000000')
}

function themeBlack() {
  themeColor.style.backgroundColor = '#1C1B22'
  themeColor.style.color = '#FFFFFF'
  menuBurger.style.backgroundColor = '#1C1B22'
  document.documentElement.style.setProperty('--colorText', '#FFFFFF')
}

let projectSwiper = new Swiper(".projectSwiper", {
  slidesPerView: 1.65,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 1.65,
    },
  },
});

let slidePrev = document.querySelector('.slidePrev')
let slideNext = document.querySelector('.slideNext')

slidePrev.addEventListener('click', () => {
  projectSwiper.slidePrev();
})
slideNext.addEventListener('click', () => {
  projectSwiper.slideNext();
})