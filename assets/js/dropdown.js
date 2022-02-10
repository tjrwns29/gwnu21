$(document).ready(function(){
  $(".dropdown-name").on("click", function(){
      // this : 이벤트가 발생환 주체
    $(this).next('.dropdown-contents').slideToggle(500)
  })
})