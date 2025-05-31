let number = document.querySelector(".number");
let score = document.querySelector(".score");
let again = document.querySelector(".again");
let highscore = document.querySelector(".highscore");
let check =document.querySelector(".check");
let body = document.querySelector("body");
let message = document.querySelector(".message");
let guess = document.querySelector(".guess");
var secretNum = Math.random();
function secret(){
    secretNum =(Math.random() * 20 )+1;
    secretNum = Math.floor(secretNum);
    console.log(secretNum);
    return secretNum;
}
secret();
let highscoreValue = 0;
let scoreValue = 20;

check.addEventListener("click",
    function(){
        let value = Number.parseInt(guess.value);
        if(value === secretNum){
            body.style.backgroundColor = "green"; //background change
            // reveling secret number
            number.textContent = secretNum;
            //Updating Score Value
            if(highscoreValue < scoreValue ){
                highscoreValue = scoreValue;
                highscore.textContent = highscoreValue;
            }
            message.textContent = "Correct Match!!";
            //score
        }
        else if(value < secretNum){
            body.style.backgroundColor = "red";
            message.textContent = "Too Low";
            scoreValue = scoreValue - 1;
            score.textContent = scoreValue;
            if(value == secretNum){
                highscoreValue = scoreValue;
                highscore.textContent = highscoreValue;
            }
        }
        else if(value > secretNum){
            body.style.backgroundColor = "red";
            message.textContent = "Too high";
            scoreValue = scoreValue - 1;
            score.textContent = scoreValue;
            if(value == secretNum){
                highscoreValue = scoreValue;
                highscore.textContent = highscoreValue;
            }
        }
        if(scoreValue <= 0){
            message.textContent = "Game Over !!"
            check.disabled = true;
            score.textContent = "💀";
        }
    }
)
again.addEventListener("click", (e)=>{
        body.style.backgroundColor = "black";
        message.textContent = "Start guessing .......";
        number.textContent = "?";
        guess.value = 0;
        scoreValue = 20;
        score.textContent = scoreValue;
        check.disabled = false;
        secret();
})