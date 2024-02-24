let container=document.querySelector('.notes-container');
let btn=document.querySelector('.btn');
let notes=document.querySelectorAll('.inputbox');


btn.addEventListener('click',()=>{
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className='inputbox';
    inputbox.setAttribute('contenteditable','true');
    img.src='images/delete.png';
    container.appendChild(inputbox).appendChild(img)
})


container.addEventListener('click',(e)=>{
    if(e.target.tagName ==='IMG'){
        e.target.parentElement.remove()
    }
})

