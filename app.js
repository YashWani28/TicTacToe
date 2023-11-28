// X plays first
const buttons = document.querySelectorAll(".cell");
const result = document.getElementById("result");
const reset = document.querySelector(".reset");
const buttonState = [
    {     
        "hasBeenClicked": false,
        "winningStates": [[2, 3], [4, 7], [5, 9]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[8, 8], [1, 3]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[1, 2], [5, 7], [6, 9]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[1, 7], [5, 6]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[1, 9], [2, 8], [3, 7], [4, 6]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[4, 5], [3, 9]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[1, 4], [8, 9], [3, 5]],

    },
    {       
        "hasBeenClicked": false,
        "winningStates": [[2, 5], [7, 9]],

    },
    {
        "hasBeenClicked": false,
        "winningStates": [[3, 6], [7, 8], [1, 5]],

    },


]

function assess(e, obj) {

    let clickedBtn = e.target;
    let btnid = clickedBtn.id;
    if (!buttonState[btnid - 1].hasBeenClicked) {
        let player;
        if (obj.turn % 2 != 0) {
            player = "X";
            clickedBtn.innerHTML = "X";
        }
        else {
            player = "O";
            clickedBtn.innerHTML = "O";
        }
        //check outcome of the game
        let winningStates = buttonState[btnid - 1].winningStates;
        for (let i = 0; i < winningStates.length; i++) {
            let state = winningStates[i];
            let isWin = true;
            for (let j = 0; j < state.length; j++) {
                //j is the id of the box;
                let box = document.getElementById(state[j]);
                if (box.innerHTML !== player) {
                    isWin = false;
                    break;
                }
            }
            if (isWin) {
                
                return player;
            }
        }
        buttonState[btnid - 1].hasBeenClicked = true;
        obj.turn += 1;
        return "none";
    }
}

//loop
async function startGame() {
    var isGameOver = false;
    turnobj = { turn: 1 };

    reset.addEventListener("click",function(){
        window.location.reload();
    })
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let outcome = assess(e, turnobj);
            if(outcome==="X" || outcome==="O")
            {
                if (outcome === "X") {
                    result.innerHTML = "X won";
                }
                else if (outcome === "O") {
                    result.innerHTML = "O won";
                }
                buttons.forEach(btn =>{
                    btn.classList.add('non-clickable');
                })

            }

        })
    });

}
startGame();