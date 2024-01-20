const showPass =document.getElementById("input");
const slider = document.getElementById("slider");
const sliderValue = document.querySelector(".range label")
const btn = document.getElementById("btn")
const lowerCase = document.getElementById("lowerCase")
const number = document.getElementById("number")
const upperCase = document.getElementById("upperCase")
const Symbol = document.getElementById("special_Symbol")
const text = document.querySelector(".text")
const copy = document.querySelector(".textbox span")



slider.addEventListener("change",(e)=>{
    sliderValue.innerHTML =`length:${e.target.value}`
})

btn.addEventListener("click",()=>{
    showPass.value = getPassword()
})

copy.addEventListener("click",()=>{
    if(showPass.value != "" || showPass.value.length >= 1){
        navigator.clipboard.writeText(showPass.value) 
        copy.innerHTML = "check"
        copy.title="password copied"

        setTimeout(()=>{
            copy.innerHTML="content_copy"
            copy.title=""
        },4000)
    }
})

let Numbers = "0123456789";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialSymbol = "!@#$%^&*._-" 

const getPassword = ()=>{
    let password =""
    let allowedChars =""

    allowedChars += lowerCase.checked ? lowercaseChars :""
    allowedChars += upperCase.checked ? uppercaseChars :""
    allowedChars += number.checked ? Numbers :""
    allowedChars += Symbol.checked ? specialSymbol :""

    if(allowedChars.length === 0 ){
        text.textContent = "Atleast one set of character need to be selected"
    }

    if(lowerCase.checked || upperCase.checked || number.checked || Symbol.checked){
        text.textContent = ""
    }
   

    if(allowedChars.length > 0){
        
    for(let i = 0 ; i<=slider.value;i++){
        let charIndex = Math.floor(Math.random()*allowedChars.length)
        password += allowedChars[charIndex] 
    }
}
    return password
}