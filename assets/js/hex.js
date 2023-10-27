const hex= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn =document.querySelector('#btn');
const color=document.querySelector('.color');
const body=document.querySelector('body');

function getRandomNumber (){
    let randomNumber=Math.floor(Math.random()*hex.length);
    return randomNumber;
}

console.log(getRandomNumber())

btn.addEventListener('click', function(){
    let hexColor= '#';
    for(let i=0; i<6; i++){
        hexColor +=hex[getRandomNumber()];
    }
    body.style.backgroundColor=hexColor;
    color.textContent=hexColor;
})

btn.addEventListener('mouseenter',function(){
     
    btn.style.backgroundColor='black';
    btn.style.color='white';

})
btn.addEventListener('mouseleave',function(){
       ;
    btn.style.backgroundColor=body.style.backgroundColor;
  

})