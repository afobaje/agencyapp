import './style.css'

document.querySelector('#app')

let hamburger=document.querySelector('.hamburger');
let navitem=document.querySelector('ul')
let arrow=document.querySelector('#arrow')
hamburger.addEventListener('click',()=>{
    navitem.classList.toggle('navitemone')
    navitem.classList.toggle('item')
    arrow.classList.toggle('arrowdown')
    
})