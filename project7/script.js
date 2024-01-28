
const input =document.querySelector("#input")
const toFahrenheit = document.querySelector("#celciusToFahrenheit")
const toCelcius = document.querySelector("#fahrenheitToCelcius")
const btn = document.querySelector("#button")
const result = document.querySelector(".result")
let temp;


function tempConversion (){
    if(toFahrenheit.checked){
         temp = (input.value * 9)/5 + 32
        result.textContent = temp.toFixed(2) +" F"
    }
    else if(toCelcius.checked){
        temp = ((input.value - 32)*5)/9
        result.textContent = temp.toFixed(2) +" C"

    }
    else{
        result.textContent = "Select a unit"
    }
}

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    tempConversion()
})