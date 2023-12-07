let random = parseInt(Math.random() * 100 + 1);
const remaining = document.querySelector("#guessremain");
const guessSlot = document.querySelector("#prevguess");
const highlow = document.querySelector("#highlow");
const submitBtn = document.querySelector("#submit");
const input = document.querySelector("#guessNum");
const startOver = document.querySelector("#resultParas");


const p = document.createElement("p");
let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validateguess(guess)
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a valid Number")
    } else if (guess < 1) {
        alert("Please Enter a valid Number")
    } else if (guess > 100) {
        alert("Please Enter a valid Number")
    } else {
        prevguess.push(guess)
        if (numguess === 10) {
            cleanupguess(guess)
            displaymessage(`Game Over! Random number is ${random}`)
            endgame();
        }
        else {
            cleanupguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess) {
    if (guess === random) {
        displaymessage(`You Guessesd it right Number is ${random}`);
        endgame()
    }
    else if (guess > random) {
        displaymessage("Number is Too high")
    }
    else if (guess < random) {
        displaymessage("Number is Too low")
    }

}
function displaymessage(message) {
    highlow.innerHTML = `<h3>${message}</h3>`;
}
function cleanupguess(guess) {
    input.value = "";
    guessSlot.innerHTML += `${guess} `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}
function newgame() {
    const newgamebutton = document.querySelector("#newgame")
    newgamebutton.addEventListener("click", function () {
        random = parseInt(Math.random() * 100 + 1);
        prevguess = []
        numguess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numguess}`
        highlow.innerHTML = ""
        input.removeAttribute("disabled")
        startOver.removeChild(p)
    })
}
function endgame() {
    input.value = "";
    input.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h3 id="newgame">New Game</h3>`
    startOver.appendChild(p)
    playgame = false;
    newgame()
}