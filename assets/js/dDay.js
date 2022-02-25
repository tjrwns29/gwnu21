// droneCalendar
var dday = new Date("January 17, 2022, 13:30:00").getTime();

setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);
  
  // document.getElementById("count").innerHTML = "학과시험까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
  document.getElementById("count").innerHTML = "현재 존재하는 일정이 없습니다.";
});

function init() {
  clock();
  setInterval(clock, 1000);
  }

  init();