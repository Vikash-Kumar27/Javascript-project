const btns = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset-btn");
const result = document.querySelector(".result-show")



let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// buttons for  each turn
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerHTML = "O"
            turn0 = false;
            result.innerHTML = `<h1>Turn for player: X</h1>`
        }
        else {
            btn.innerHTML = "X"
            turn0 = true;
            result.innerHTML = `<h1>Turn for player: O</h1>`
        }
        btn.disabled = true;
        
        checkWinner();
        checkTie();
       
        if(checkWinner()){
            checkTie()
        }
    })
})


//function for game end
function endGame() {
    btns.forEach((btn) => {
        btn.disabled = true
    })
}

//function for new game
function newGame() {
    btns.forEach((btn) => {
        btn.innerHTML = ""
        btn.disabled = false
    })
    reset.textContent = "Reset"
    result.innerHTML = ""
    turn0 = true
}

// function for check winner
function checkWinner() {
    for (patterns of winPattern) {
        let postion1 = btns[patterns[0]].innerText;
        let postion2 = btns[patterns[1]].innerText;
        let postion3 = btns[patterns[2]].innerText;

       
        if (postion1 != "" && postion2 != "" && postion3 != "") {
            if (postion1 == postion2 && postion2 == postion3) {
                result.innerHTML = `<h1> Winner is ${postion1}<br>Restart the Game</h1>`
                reset.textContent= "Restart"
                endGame()
              
            }
        }
    }
}

// function to check for a tie
function checkTie(){
    let emptyCellCounts = 0
    btns.forEach((btn)=>{
        if(btn.innerText === ""){
            emptyCellCounts++
        }
    });
    if(emptyCellCounts === 0 && !checkWinner()){
        result.innerHTML = `<h1>Game is Tie, You want to play again <br> Click on Start </h1>`
        reset.textContent= "Start"
    }
}

reset.addEventListener("click", newGame)

// calling the function check winner
checkWinner()

