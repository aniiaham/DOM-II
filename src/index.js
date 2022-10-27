import './less/index.less'

// Your code goes here!
// const button = document.querySelectorAll(".btn")
// console.log(button)
const h1 = document.querySelector("h1")
h1.addEventListener("mouseover", mouseOver);
h1.addEventListener("mouseout", mouseOut);

function mouseOver (){
    // document.querySelector("h1").style.color = "yellow";
    h1.style.color = "blue"
}

function mouseOut () {
    // document.querySelector("h1").style.color = "black";
    h1.style.color = "black"
}

const allButtons = document.querySelector(".intro p")
// console.log(allButtons)
document.addEventListener("keydown", function(event){
    if(event.key === 'd'){
        allButtons.style.color = "red"
    }else {
        allButtons.style.backgroundColor = "yellow"
    }
})
// const introPChange = document.querySelector('.intro p')
// console.log(introPChange)
// document.addEventListener('keydown', function(event) {
//     if(event.key === 's'){
//         introPChange.style.color = "red";
//     } else {
//         introPChange.style.color = "black";
//     }
// })

const textWheel = document.querySelector(".text-content p")
textWheel.addEventListener("wheel", styleFunction);
function styleFunction(){
    this.style.fontSize = "40px";
}

const inframe = document.querySelector(".footer p")
console.log(inframe)
// inframe.addEventListener("")
// inframe.onload = function (){
//     inframeFunc();
// }
// function inframeFunc (){
//     console.log("im here")
//     inframe.innertext = "Iframe is loaded."
// }

console.log(inframe)

const changePic = document.querySelector(".img-content")

console.log(changePic)
window.onload =function(){
    changePic.focus();
}

const doubleClick = document.querySelector(".intro h2")
document.addEventListener("dblclick", itsFunc);
function itsFunc(){
    doubleClick.innerHTML = "Hello world!"  
}