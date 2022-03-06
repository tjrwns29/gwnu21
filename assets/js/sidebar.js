// sideBar open & close

const sideBar = document.querySelector('.sideBarContents');

//open
document.querySelector('.sideBarOpenBtn').addEventListener('click', function(){
  sideBar.style.left = "0";
})

//close
document.querySelector('.sideBarCloseBtn').addEventListener('click', function(){
  sideBar.style.left = "-300px";
})

// fontAweSome downAngle

const downAngle = document.querySelectorAll('.dropDownFontAweSome');

document.querySelectorAll('.dropDownName').addEventListener('click', function(){
  if (downAngle.style.rotate = "180deg") {
    downAngle.style.rotate = "180deg";
  } else {
    downAngle.style.rotate = "180deg";
  }
})