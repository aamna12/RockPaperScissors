
let choices=document.querySelectorAll(".images");
let messageSection=document.querySelector(".messageSection");
let message=document.querySelector("#message");
let userScoreMessage=document.querySelector("#userScore");
let compScoreMessage=document.querySelector("#compScore");
let newGameBtn=document.querySelector("#newgamebtn");

let userScore=0;
let compScore=0;

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
       
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })

});

const playGame = (userChoice) =>{

    const compChoice=generateCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    let winner=true;
    if (userChoice===compChoice){
        drawGame(userChoice);
    }

    else if (userChoice==="rock" && compChoice==="scissors" || userChoice==="paper" && compChoice==="rock" || userChoice==="scissors" && compChoice==="paper"){
        
        winner=true;
        showWinner(winner,userChoice,compChoice);
    }
    else{
        
        winner=false;
        showWinner(winner,userChoice,compChoice);
    }
   
};

const showWinner = (winner,userChoice,compChoice) =>{

    if (winner){
        userScore++;
        message.innerText=`User's ${userChoice} Won by beating Computer's ${compChoice}!!`;
        message.style.color="darkgreen";
        userScoreMessage.innerText=userScore;
        
    }
    else{
        compScore++;
        message.innerText=`Computer's ${compChoice} Won by beating User's ${userChoice}!!`;
        message.style.color="darkred";
        compScoreMessage.innerText=compScore;
    }
    messageSection.classList.remove("hide");
}
const generateCompChoice = () =>{

    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random() * 3);
    return options[random];
}

const drawGame = (commonChoice) =>{

    message.innerText=`DRAW GAME on selecting ${commonChoice}!`;
    messageSection.classList.remove("hide");
    message.style.color="rgb(27, 14, 109)";
};

const newGame = () =>{
    userScore=0;
    compScore=0;
    userScoreMessage.innerText=0;
    compScoreMessage.innerText=0;
    messageSection.classList.add("hide");
}
newGameBtn.addEventListener("click",newGame);
