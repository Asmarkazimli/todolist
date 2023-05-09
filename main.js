const btn=document.querySelector(`.btn`);
const container=document.querySelector(`.container`);
const input=document.querySelector(`input`);
const badd=document.querySelector(`.btn--add`);
const bclean=document.querySelector(`.btn--clean`);
const list=document.querySelector(`.list`);
const content=document.querySelector(`.content`);

badd.addEventListener(`click`,(e)=>{
    if(input.value !==""){
        content.innerHTML +=`
        <li class="list">${input.value}</li>`

input.value="";
    }
})
bclean.addEventListener(`click`,(e)=>{
        content.innerHTML="";
    
})
