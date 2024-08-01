let burgerMenuButton = document.getElementById('menuBurgerButton')
let menuBurger = document.getElementById('menuBurger')
let burgerMenuLine = document.getElementById('lineBurgerMenu')

let body = document.querySelector('body')
let header = document.querySelector('header')

burgerMenuButton.addEventListener('click', () => {
  if (menuBurger.classList.value === 'menuBurger open') {
    body.classList.remove('hidden')
    header.classList.add('defualtHeader')
    menuBurger.classList.remove('open')
    menuBurger.classList.add('close')
    burgerMenuLine.classList.remove('burgerMenuOpen')
    burgerMenuButton.classList.remove('close')
  }
  else if (menuBurger.classList.value === 'menuBurger close') {
    body.classList.add('hidden')
    header.classList.remove('defualtHeader')
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
  header.classList.add('defualtHeader')
}

function activeColorRed() {
  document.documentElement.style.setProperty('--aciveColor', '#FF0000')
}

function activeColorGreen() {
  document.documentElement.style.setProperty('--aciveColor', '#00A524')
}

function activeColorBlue() {
  document.documentElement.style.setProperty('--aciveColor', '#0400D3')
}

function themeWhite() {
  menuBurger.style.backgroundColor = '#FFFFFF'
  document.documentElement.style.setProperty('--backgroundColor', '#FFFFFF')
  document.documentElement.style.setProperty('--colorText', '#000000')
}

function themeBlack() {
  menuBurger.style.backgroundColor = '#1C1B22'
  document.documentElement.style.setProperty('--backgroundColor', '#1C1B22')
  document.documentElement.style.setProperty('--colorText', '#FFFFFF')
}

const ageField = document.getElementById('ageField')

let year = new Date().getFullYear()
let birthdayYear = 2010
let age = year - birthdayYear

let count = age 
let result = ''

if (count >= 10 && count <= 20) {
  result = ' лет'
  ageField.innerHTML = age + result
} else {
  count = age % 10
  if (count === 1) {
    result = ' год'
    ageField.innerHTML = age + result
  } 
  else if (count >= 2 && count <= 4) {
    result = ' годa'
    ageField.innerHTML = age + result
  } 
  else if (count >= 0 && count <= 9) {
    result = ' лет'
    ageField.innerHTML = age + result
  }
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


const contactForm = document.getElementById('contactForm')

const sendEmail = (event) => {
  event.preventDefault()

  emailjs.sendForm('service_1fdergc', 'template_72bb9r2', '#contactForm', 'jOaeTS9loYfguUrbb')
    .then(() => {    
      contactForm.reset()
    })
}

contactForm.addEventListener('submit', sendEmail)
