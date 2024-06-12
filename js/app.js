const $ = document,
    hour = $.querySelector('.hour'),
    min = $.querySelector('.min'),
    sec = $.querySelector('.sec'),
    analogClock = $.querySelector('.clock'),
    digitalHour = $.querySelector('.digital-hour'),
    digitalMin = $.querySelector('.digital-min'),
    digitalSec = $.querySelector('.digital-sec')



let now, nowMin, nowHour, nowSec;
function showTime() {

    setInterval(() => {
        calcTime()

        sec.style.cssText = `transform:rotate(${(nowSec) * 6}deg)`
        min.style.cssText = `transform:rotate(${(nowMin) * 6}deg)`
        hour.style.cssText = `transform:rotate(${(nowHour) * 6}deg)`

        digitalHour.textContent = (nowHour.toString()).padStart(2, '0')
        digitalMin.textContent = (nowMin.toString()).padStart(2, '0')
        digitalSec.textContent = (nowSec.toString()).padStart(2, '0')


    }, 1000);
}

function calcTime() {
    now = new Date()

    nowHour = now.getHours()
    nowMin = now.getMinutes()
    nowSec = now.getSeconds()

    analogClock.style.opacity = '1'
}

window.addEventListener('load', showTime)