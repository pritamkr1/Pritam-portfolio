const btnToggle = document.querySelector('#toggle');
btnToggle.addEventListener('click', switchMode);
let isLight = true;
function switchMode(){
    isLight = !isLight;
    isLight ? toggle.innerText = "🌙" : toggle.innerText = "🌚";
    var rootElement = document.body;
    rootElement.classList.toggle("lightMode");
    var ele = document.body;
    ele.classList.toggle('.progress-bar');
    console.log(ele);
}