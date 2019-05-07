var circle = document.querySelector("circle");
var dateDiv = document.querySelector('.date');
var timeDiv = document.querySelector('.time');
var rc = circle.getAttributeNS(null, 'r');
var length = 360 / 60 * Math.PI / 180 * rc;

function time() {
    var t = new Date();

    var Thours = t.getHours();
    var Tminutes = t.getMinutes();
    var Tseconds = t.getSeconds();

    Thours = (Thours < 10 ? "0" : "") + Thours;
    Tminutes = (Tminutes < 10 ? "0" : "") + Tminutes;
    Tseconds = (Tseconds < 10 ? "0" : "") + Tseconds;

    timeDiv.innerHTML = Thours + ":" + Tminutes;
    dateDiv.innerHTML = t.toLocaleDateString('ko-KR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    circle.style.strokeDasharray = Tseconds * length + ', ' + rc * 2 * Math.PI;

}

var clock = window.setInterval(time, 1000);