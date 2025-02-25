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
      return inp;
   }
   else{
      window.alert("Wrong Input, Please try again");
      getHumanChoice();
   }
   return inp;
}
console.log(getHumanChoice());
console.log(getComputerChoice());