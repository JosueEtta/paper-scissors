

function getComputerChoice(){
     let computerChoice;
     let computerChoiceNumber = Math.floor(Math.random()*3);
     
     if (computerChoiceNumber == 1){
        computerChoice="rock";
     }
     else if(computerChoiceNumber == 2){
      computerChoice="paper"
     }
     else{
       computerChoice="scissors"
     }
     return computerChoice;
} 

function getHumanChoice(){
   let choice = prompt("Select your choice between rock , paper , and scissors");
   return choice;
}
function winning(win='win'){
  let round=0;
  let winning=0;
  let lossing=0
  if(win == 'win'){
    winning++;
  }
  else if(win == 'loss'){
    lossing++;
  }
  else if(win == 'draw'){
    
  }
  round++;
  console.log(`Round:${round}`);
  console.log(`ROUND WON: ${winning}`);
  console.log(`ROUND LOSS: ${lossing}`);
  
  
  
}
function playRound(humanChoice, computerChoice) {
   
   // your code here!
   if(humanChoice == computerChoice){
      console.log("It is a Draw");
      winning('darw');
   }
   else{
      if(humanChoice == "rock"){
        if(computerChoice == "paper"){
          winning()
          console.log("You Won");
        }
        else{
          winning('lose')
          console.log("You Lose");
        }
      }
      if(humanChoice == "paper"){
        if(computerChoice == "rock"){
          winning()
          console.log("You Won");
        }
        else{
          winning('lose')
          console.log("You Lose");
        }
      }
      if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
          winning()
          console.log("You Won");
        }
        else{
          winning('lose')
          console.log("You Lose");
        }
      }
   }
   
 } 
 
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
 console.log(`HUMANSELECTION: ${humanSelection}`);
 console.log(`COMPUTERELECTION: ${computerSelection}`);
 
  playRound(humanSelection, computerSelection);
 
 