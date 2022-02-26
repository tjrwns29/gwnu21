const sideBar = document.querySelector('.sideBarContents');

//open
document.querySelector('.sideBarOpenBtn').addEventListener('click', function(){
  sideBar.style.left = "0";
})

//close
document.querySelector('.sideBarCloseBtn').addEventListener('click', function(){
  sideBar.style.left = "-300px";
})