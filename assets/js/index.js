const colors=[  'Orange',  `Brown`, `Pink `,`Maroon`, `Turquoise`,  `Navy`,`Gold`, `Tomato`, `Teal`, `Lime`, `Cyan`, `Violet`,`Silver`, 'Green', 'Yellow','Grey','Purple','Blue','Red','rgba(133,122,200)', '#f15025'];

const btn= document.querySelector('#btn');
const color=document.querySelector('.color');
const body= document.querySelector('body')

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}

btn.addEventListener('click',function(){

    const randomNumber = getRandomNumber();
    body.style.backgroundColor= colors[randomNumber]
   
    color.textContent=colors[randomNumber]

})
btn.addEventListener('mouseenter',function(){
     
    btn.style.backgroundColor='black';
    btn.style.color='white';

})
btn.addEventListener('mouseleave',function(){
       ;
    btn.style.backgroundColor=body.style.backgroundColor;
  

})

