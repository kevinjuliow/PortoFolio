const homePage = document.querySelector('.homePage')
const aboutMeContainer = document.querySelector('.Container')

window.addEventListener('scroll' , ()=> {
  homePage.classList.toggle('homePageActive' , scrollY < 650)
})

window.addEventListener('scroll' , () => {
  aboutMeContainer.classList.toggle("aboutMeActive" , scrollY > 1 && scrollY<1550)
})

const skillsContainer = document.querySelector('.gridContainer')
const skillsText = document.querySelector('.skills')

window.addEventListener('scroll' , () => {
  skillsContainer.classList.toggle("skillsActive" , scrollY >1000 && scrollY < 2650)
  skillsText.classList.toggle("skillTextActive" , scrollY > 1450 && scrollY < 2650)
})

const skillArrowBtn = document.querySelector('.arrowBtn')

skillArrowBtn.addEventListener('click' , ()=>{
})