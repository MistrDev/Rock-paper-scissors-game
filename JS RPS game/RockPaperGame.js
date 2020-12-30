const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;} else {
    console.log('Error!');
  }
  }
    console.log(getUserChoice('scissors'));
  
  // a function so the computer can make a random choice 
  function getComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
  }
  
  console.log(getComputerChoice());
  
  // a function that compares the two inputs and decides if its a tie or win
  const determineWinner = (userChoice,computerChoice) => {
     if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  }