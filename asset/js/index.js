

let toggle= document.getElementById('toggle');
let btn=document.querySelector('.btn');


 btn.addEventListener('click',()=>{
     if(toggle.checked ==true){
         window.location.href="https://telegram.me/+919996910532";
     }
     else{
         btn.title('Make sure toggle should be active');
     }
 })