const hambMenu = document.querySelector('.material-symbols-outlined');
const navBar = document.querySelector('.navBar');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const listItems = document.querySelector('ul');


window.addEventListener('scroll' , () => {
 navBar.classList.toggle('navScroll' , scrollY > 1)
 logo.classList.toggle('logoScroll' , scrollY > 1)
 listItems.classList.toggle('listScroll' , scrollY > 1)
hambMenu.classList.toggle('hambScroll' , scrollY > 1)
})

const ul = document.createElement('ul');
const li1 = document.createElement('a');
const li2 = document.createElement('a');
const li3 = document.createElement('a');
const li4 = document.createElement('a');
const li5 = document.createElement('a');


li1.innerText = 'Home';
li2.innerText = 'About Me';
li3.innerText = 'Skills';
li4.innerText = 'Projects';
li5.innerText = 'Contact';

li1.href = '#home'
li2.href = '#aboutMe'
li3.href = '#skills'
li4.href = '#skills'
li5.href = '#skills'

li1.style.textDecoration = "none";
li2.style.textDecoration = "none";
li3.style.textDecoration = "none";
li4.style.textDecoration = "none";
li5.style.textDecoration = "none";



hambMenu.addEventListener('click' , function(){
  ul.classList.toggle('ulList');
  li1.classList.toggle('liList')
  li2.classList.toggle('liList')
  li3.classList.toggle('liList')
  li4.classList.toggle('liList')
  li5.classList.toggle('liList')

  ul.append(li1,li2,li3,li4,li5);
  body.append(ul)

  if (ul.classList.contains('ulList')){
    ul.style.animationName ='menuAnimate'
    ul.style.animationDuration = '.5s'
    ul.style.transition ='.4s'
  }
  else{
    ul.style.animationName ='closeAnimate'
    ul.style.animationDuration = '.4s'
    ul.style.transition ='4s'
  }

  window.addEventListener('scroll' ,() =>{
    ul.remove();
  })
  
})

