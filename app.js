let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = ()=>{
    const option=["rock" ,"paper","scissors"]
    const randidx = Math.floor(Math.random()*3);
    return option[randidx]
};

const drawGame = ()=>{
    // console.log("Game was Draw")
    msg.innerText = "Game Was Draw. Play Again!";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You Win")
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        // console.log("You Lose")
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose!  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice)

    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice)

if(userChoice === compChoice){
    // Draw game
    drawGame();
} else{
    let userWin = true;
    if(userChoice === "rock"){
        // scissors paper
        userWin = compChoice === "paper" ? false:true;
    }else if(userChoice === "paper"){
        // rock scissors
        userWin = compChoice === "scissors" ? false : true;
    }else{
        // rock paper
        userWin = compChoice === "rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}; 

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});