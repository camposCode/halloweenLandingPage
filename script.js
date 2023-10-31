let typed = new Typed('#element', {
    strings: ['HALLOWEEN'],
    typeSpeed: 150,
    loop:true,
});

let menu = document.querySelector("#menu");
let bars = document.querySelector("#bars");

bars.addEventListener("click", function(){
    menu.classList.toggle("mobilemenu");
})