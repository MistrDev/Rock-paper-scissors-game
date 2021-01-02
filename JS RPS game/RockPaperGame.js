const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;} else {
    console.log('Error!');
  }
  }

  // Insert your move here..
    console.log(getUserChoice('scissors'));
  
  // a function so the computer can make a random choice 
  const getComputerChoice = () => {
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
  const determineWinner = (getUserChoice,getComputerChoice) => {
     if (getUserChoice === getComputerChoice) {
    console.log ('The game was a tie!');
  }
  }
