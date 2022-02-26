$(document).ready(function(){
  $(".dropDownName").on("click", function(){
      // this : 이벤트가 발생환 주체
    $(this).next('.dropDownContents').slideToggle(400)
  })
})

$(document).ready(function(){
  $(".dropDownNameHigh").on("click", function(){
      // this : 이벤트가 발생환 주체
    $(this).next('.dropDownContents').slideToggle(400)
  })
})