var clockposition = document.getElementById("clock")

function clock() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockposition .innerText = `지금은 ${year}년 ${month+1}월 ${clockDate}일 ${week[day]}요일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`
    : minutes }:${seconds < 10 ? `0${seconds }`  : seconds } 입니다.`;
}

function init() {
    clock();
    setInterval(clock, 1000);
    }

    init();