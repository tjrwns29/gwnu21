const open = document.querySelector('.side-bar-open-btn');
const close = document.querySelector('.side-bar-close-btn');
const sideBar = document.querySelector('.side-bar-contents');

//open
open.addEventListener('click', function(){
  sideBar.style.left = "0";
})

//close
close.addEventListener('click', function(){
  sideBar.style.left = "-600px";
})