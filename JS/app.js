let q1 = document.getElementById('q1');
 let flecheDroite1 = document.querySelector('#flecheDroite1')
 
 q1.addEventListener('click', notHidden)
 
 function notHidden(){


        let p1= document.getElementById('p1');
        p1.style.display='block'
        let fleche=document.querySelectorAll('svg')
        fleche[2].style.transform='rotate(180deg)'
   
        
 
    };






    
