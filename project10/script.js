
const API_key = "e34bd870b67e01119834cc6d4e4da6d1"
const API_url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const img  = document.getElementById("img");
const temp = document.querySelector(".temp");
const City = document.querySelector(".city");
const humidity = document.querySelector(".humidity-data p");
const wind = document.querySelector(".wind-data p");



async function checkWeather(city){
let response = await fetch(API_url + city +`&appid=${API_key}`);
let data = await response.json()
 
console.log(data);

 City.innerHTML = data.name ;
 temp.innerHTML = Math.round(data.main.temp) + "°c";
 humidity.innerHTML = data.main.humidity +"%";
 wind.innerHTML = data.wind.speed +" km/h";

 if(data.weather[0].main === "Clear"){
    img.src = "images/clear.png"
 }
 else if(data.weather[0].main === "Clouds"){
    img.src = "images/clouds.png"
 }
 else if(data.weather[0].main === "Haze"){
    img.src = "images/haze.png"
 }
 else if(data.weather[0].main === "Drizzle"){
    img.src = "images/drizzle.png"
 }
 else if(data.weather[0].main === "Mist"){
    img.src = "images/mist.png"
 }
 else if(data.weather[0].main === "Rain"){
    img.src = "images/rain.png"
 }
 else if(data.weather[0].main === "Snow"){
    img.src = "images/snow.png"
 }

 document.querySelector(".weather").style.display = "block"
 
}

btn.addEventListener("click",()=>{
   if(input.value === ""){
     return null
   }
    checkWeather(input.value)

})
