const display = document.getElementById("display");
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
let timer = null;
let isRunning = false
let startTime = 0
let elapsedTime = 0

start.addEventListener("click",()=>{
    if(!isRunning){
        startTime = Date.now() - elapsedTime
        timer = setInterval(update,10)
        isRunning = true
    }
   
})
stop.addEventListener("click",()=>{
    if(isRunning){
        clearInterval(timer)
        isRunning = false
    }
})
reset.addEventListener("click",()=>{
    clearInterval(timer);
    startTime = 0
    elapsedTime = 0
    isRunning = false
    display.textContent = `00:00:00`
})

const update = ()=>{
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime
   
    let minutes = Math.floor(elapsedTime/(1000 * 60) % 60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime/1000 % 60).toString().padStart(2,0);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10 ).toString().padStart(2,0);    



    display.textContent = `${minutes}:${seconds}:${milliseconds}`
}

