let q1 = document.getElementById('q1');
 let fleche = document.querySelectorAll('svg')
 let p1= document.getElementById('p1');
 q1.addEventListener('click', notHidden)
 console.log(p1);

 function non() {
     p1.style.display='none'
 }

 function oui() {
     p1.style.display='block'
 }

 function notHidden(){

if (p1.style.display='none') {
    oui()
    fleche[2].style.transform='rotate(180deg)'
} else{
    non()
}




      
            
     
       
   
        
 
    };








    
