let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");
const resetBtn = document.querySelector("#resetbtn");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = (userChoice, compChoice) => {
    console.log("Game is draw");
    msg.innerText = `${userChoice} and ${compChoice} made the game DRAW. Play Again.`
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true){
        console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else {
        console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    // console.log ("user choice =", userChoice);  
    const compChoice = genCompChoice();
    // console.log("computer choice =", compChoice); 

    if(userChoice == compChoice){
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock"){
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

 resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
}) ;