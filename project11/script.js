let Base_url = ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies')


const dropdown = document.querySelectorAll(".select-container select")
const convertBtn = document.querySelector(".convert-btn")
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")
const showAmount  = document.querySelector(".to p")





for (let select of dropdown) {
    for (countryCode in countryList) {
        let options = document.createElement("option")
        options.innerText = countryCode
        options.value = countryCode
        if (select.name === 'from' && countryCode === "USD") {
            options.selected = "selected"
        }
        else if (select.name === 'to' && countryCode === "INR") {
            options.selected = "selected"
        }
        select.appendChild(options)
    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target)
        convertBtn.innerText = `Convert ${fromcurr.value} To ${tocurr.value}`
    })
}


function updateFlag(element) {
    let currCode = element.value;
    let countCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;




}

convertBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let amount = document.querySelector(".from input")
    if (amount.value === 0 || amount.value < 1) {
        amount.value = 1
    }

    const url = fetch(`${Base_url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`)
        url.then((res) => {
            return res.json()
        }).then((data) => {
            let rate = data[tocurr.value.toLowerCase()]
            let finalAmount = (rate * amount.value).toFixed(2)
            showAmount.innerText =`${finalAmount}`
        })

})