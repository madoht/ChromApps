const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    name = document.querySelector(".js-name");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGrid(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit)
}


function paintGrid(text){
    form.classList.remove(SHOWING_CN);
    name.classList.add(SHOWING_CN);
    name.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGrid(currentUser);
    }
}

function init(){
    loadName();
}

init();