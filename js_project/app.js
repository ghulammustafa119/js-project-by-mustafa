const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.button');
let count = 0;
counter.innerText = count;
for(let i = 0; i < buttons.length;i++){
    const btn = buttons[i]
    btn.addEventListener('click', HandleAction);
}
function HandleAction (evt){
    const action = evt.target.dataset.action;

    if(action == "increase"){
        count++;
    } else if(action == "decrease"){
        count--;
    } else if(action == "reset"){
        count = 0;
    }
    counter.innerText = count;
}