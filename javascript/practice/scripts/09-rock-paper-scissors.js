// use parse to convert the JSON string back to a JavaScript Object
            let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };
            // (above) if score is null (no score in local storage) have to set default values


            updateScoreElement();


            function playGame(playerMove) {
                const computerChoice = pickComputerMove();
                result = '';

                if (playerMove === 'scissors') {
                    if (computerChoice === 'rock') {
                        result = 'You lose.';
                    } else if (computerChoice === 'paper') {
                        result = 'You win.';
                    } else if (computerMove === 'scissors') {
                        result = 'Tie.';
                    }

                } else if (playerMove === 'rock') {
                    if (computerChoice === 'rock') {
                        result = 'Tie.';
                    } else if (computerChoice === 'paper') {
                        result = 'You lose.';
                    } else if (computerMove === 'scissors') {
                        result = 'You win.';
                    }
                    
                } else if (playerMove === 'paper') {
                    if (computerChoice === 'rock') {
                        result = 'You win.';
                    } else if (computerChoice === 'paper') {
                        result = 'Tie.';
                    } else if (computerMove === 'scissors') {
                        result = 'You lose.';
                    }
                }

                if (result === 'You win.') {
                    score.wins++;
                } else if (result === 'You lose.') {
                    score.losses++;
                } else if (result === 'Tie.') {
                    score.ties++;
                }

                // this will store our score into local storage so it is more permanent
                // local storage can only store strings, so we must convert our score to a JSON string
                localStorage.setItem('score', JSON.stringify(score));

                // update the score
                updateScoreElement();

                showResult(playerMove, computerChoice);
            }

            function updateScoreElement() {
                document.querySelector('.js-score')
                    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }

            function showResult(playerMove, computerChoice) {
                document.querySelector('.js-result')
                    .innerHTML = `You picked ${playerMove}. Computer picked ${computerChoice}. ${result}`;
            }

            function pickComputerMove() {
                const randomNum = Math.random();
                let computerChoice = '';
                
                if (randomNum <= 1/3) {
                    computerChoice = 'rock';
                } else if (randomNum <= 2/3 && randomNum > 1/3) {
                    computerChoice = 'paper';
                } else if (randomNum > 2/3) {
                    computerChoice = 'scissors';
                }

                return computerChoice;
            }