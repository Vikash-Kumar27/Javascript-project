
const timing = ()=>{
const now = new Date();
let hours = now.getHours().toString().padStart(2,0)

const maridian = hours >= 12 ? "PM" : "AM"
hours = hours % 12 || 12
const minutes = now.getMinutes().toString().padStart(2,0)
const seconds = now.getSeconds().toString().padStart(2,0)

const timeStrings = `${hours}:${minutes}:${seconds} ${maridian}`
const clock = document.getElementById("clock")
clock.textContent = timeStrings
}
timing()
setInterval(timing,1000)
