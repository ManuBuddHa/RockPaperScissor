console.log("Hello World!");
var humanScore=0;
var computerScore=0;
var inp;
function getComputerChoice(){
   let num=Math.random();
   let ComputerChoice;
   if(num<0.33){
      ComputerChoice="rock";
   }
   else if(num>0.33 & num<0.66){
      ComputerChoice="paper";
   }
   else{
      ComputerChoice="scissor";
   }
   return ComputerChoice;
}
function getHumanChoice(){
   inp=prompt("Enter Your Choice (Rock/Paper/Scissor) :");
   inp=inp.toLowerCase();
   if(inp=="rock"|| inp=="paper"||inp=="scissor"){ 
   }
   else{
      window.alert("Wrong Input, Please try again");
      getHumanChoice();
   }
   return inp;
}
function playRound(HumanChoice,ComputerChoice)
{
   console.log("User Choice : ",HumanChoice);
   console.log("Computer Choice : ",ComputerChoice);
   if(HumanChoice=="rock" && ComputerChoice=="paper")
   {
      console.log("You Lose! Paper Beat Rock");
      computerScore++;
   }
   else if(HumanChoice=="scissor" && ComputerChoice=="rock")
   {
      console.log("You Lose! Rock Beat Scissor");
      computerScore++;
   }
   else if(HumanChoice=="paper" && ComputerChoice=="scissor")
   {
      console.log("You Lose! Scissor Beat Paper");
      computerScore++;
   }
   else if(HumanChoice==ComputerChoice){
      console.log("Draw");
   }
   else{
      console.log("You Win");
      humanScore++
   }
}
function playGame(){
   playRound(getHumanChoice(),getComputerChoice());
   console.log("Your Score :", humanScore,"\nComputer Score :",computerScore);
}
playGame();
playGame();
playGame();
playGame();
playGame();
if(humanScore>computerScore){
   console.log("YOU WIN out of 5 Rounds!");
}
else{
   console.log("YOU LOST");
}