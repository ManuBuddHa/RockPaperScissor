console.log("Hello World!");
let opt=["Rock","Paper","Scissor"];
function getComputerChoice(){
   let choice=random(opt);
   console.log(choice);
}
function getHumanChoice(){
   let HumanChoice=prompt("Enter Your Choice (Rock/Paper/Scissor) :");
   HumanChoice=HumanChoice.toLowerCase();
   console.log(HumanChoice);
}
getHumanChoice();
getComputerChoice();