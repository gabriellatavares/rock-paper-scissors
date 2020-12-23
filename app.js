const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
          introScreen.classList.add('fadeOut');
          match.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //Computer Options 
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
              //Computer Choice
            const computerNumber = Math.floor(Math.random() * 3);   
            const computerChoice = computerOptions[computerNumber];
            compareHands(this.textContent, computerChoice);

            playerHand.src = `./images/${this.textContent}.png`
            computerHand.src = `./images/${computerChoice}.png`
            });
        });
        
    };
     const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    const compareHands = (playerChoice, computerChoice) => {
        
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice){
            winner.textContent = 'it is a tie';
            return;
        }
        if (playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'you win!';
                pScore++;
                updateScore();
                if (pScore === 2){
                    winner.textContent = 'uhul! you won.';
                    document.querySelector(".hands").style.display = "none";
                    document.querySelector(".options").style.display = "none";
                    return;
                }
                return;
                
            }else{
                winner.textContent = 'boo! i won!';
                cScore++;
                updateScore();
                if (cScore === 2){
                    winner.textContent = 'game over, loser!'
                    document.querySelector(".hands").style.display = "none";
                    document.querySelector(".options").style.display = "none";
                    return
                }
                return;
            }
        }

        if (playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'boo! i won!';
                cScore++;
                updateScore();
                if (cScore === 2){
                    winner.textContent = 'game over, loser!'
                    document.querySelector(".hands").style.display = "none";
                    document.querySelector(".options").style.display = "none";
                    return;
                }
                return;
            }else{
                winner.textContent = 'you win!';
                pScore++;
                updateScore();
                if (pScore === 2){
                    winner.textContent = 'uhul! you won.';
                    document.querySelector(".hands").style.display = "none";
                    document.querySelector(".options").style.display = "none";
                    return;}
                return;
            }
        }

        if (playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'boo! i won!';
                cScore++;
                updateScore();
                if (cScore === 2){
                    winner.textContent = 'game over, loser!'
                    document.querySelector(".hands").style.display = "none";
                    document.querySelector(".options").style.display = "none";
                    return;
                }
                return;
            }else{
                winner.textContent = 'you win!';
                pScore++;
                updateScore();
                if (pScore === 2){
                    winner.textContent = 'uhul! you won.';
                    document.querySelector(".hands").style.display = "none";
                    document.querySelector(".options").style.display = "none";
                    return;}
                return;
            }
        }
    
    }
    

    //call all the inner functions
    startGame();
    playMatch();
};

//start the game function
game();