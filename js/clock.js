const clock = document.querySelector("#clock");

// String(num), num.toString() 사용 가능
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); 
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()      // 1초를 기다리지 않고 시간을 바로 보여주기 위해 먼저 실행
setInterval(getClock, 1000); 