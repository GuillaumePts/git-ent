const p = document.querySelectorAll('p')
const a = document.querySelectorAll('a')
const svg = document.querySelectorAll('svg')
const div = document.querySelectorAll('.flecheDroite')
div[0].addEventListener('click', () => {
    p[0].classList.toggle('dBlock')
    svg[3].classList.toggle('retourne')
   
})

div[1].addEventListener('click', () => {
    p[1].classList.toggle('dBlock')
    svg[4].classList.toggle('retourne')
  
})

div[2].addEventListener('click', () => {
    p[2].classList.toggle('dBlock')
    svg[5].classList.toggle('retourne')
    
})

div[3].addEventListener('click', () => {
    p[3].classList.toggle('dBlock')
    svg[6].classList.toggle('retourne')
})

div[4].addEventListener('click', () => {
    p[4].classList.toggle('dBlock')
    svg[7].classList.toggle('retourne')
})




   
        
 
   








    
