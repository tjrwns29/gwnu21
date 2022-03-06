if (matchMedia("screen and (min-width: 320px) and (max-width: 1023px)").matches) {
  // 드롭다운 메뉴
    $(document).ready(function(){
        $('.dropDownName').on("click", function(){
          $(this).next('.dropDownContents').slideToggle(400)
        })
    })

  // 모바일 highMenu
  $(document).ready(function(){
    $(".dropDownNameHigh").on("click", function(){
      $(this).next('.dropDownContents').slideToggle(400)
    })
  })
}