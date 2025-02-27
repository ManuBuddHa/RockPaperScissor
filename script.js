let computerChoice;
let humanChoice;
let humanScore=0;
let computerScore=0;
const human=document.getElementById("humanChoice"); //html h3 of class humanChoice to Output the Human choice
const comp=document.getElementById("computerChoice"); //html h3 of class computerChoice to Output the computer choice
const result=document.querySelector(".result");
const final=document.querySelector(".final");
const Hscore=document.createElement("h3");
const Cscore=document.createElement("h3");
human.textContent="Your Choice : "
comp.textContent="Computer Choice : "
result.appendChild(Cscore);
result.appendChild(Hscore);
Hscore.textContent="Your Score : 0";
Cscore.textContent="Computer Score : 0";
function playRock()
{
   humanChoice="rock";
   human.textContent="Your Choice : Rock";
   computer();
   console.log(humanChoice);
   console.log(computerChoice);
   playRound(humanChoice,computerChoice);
}
function playPaper()
{
   humanChoice="paper";
   human.textContent="Your Choice : Paper";
   computer();
   console.log(humanChoice);
   console.log(computerChoice);
   playRound(humanChoice,computerChoice);
}
function playScissor()
{
   humanChoice="scissor"
   human.textContent="Your Choice : Scissor";
   computer();
   console.log(humanChoice);
   console.log(computerChoice);
   playRound(humanChoice,computerChoice);
}
function computer()
{
   var num=Math.random()
   if(num<0.333){
      computerChoice="rock";
      comp.textContent="Computer Choice : Rock";
   }
   else if(num>0.333 & num<0.666){
      computerChoice="paper";
      comp.textContent="Computer Choice : Paper";
   }
   else{
      computerChoice="scissor";
      comp.textContent="Computer Choice : Scissor";
   }
}
function playRound(humanChoice,computerChoice){
   if(humanChoice=="rock" & computerChoice=="paper"){
      lose();
   }
   else if(humanChoice=="paper" & computerChoice=="scissor"){
      lose();
   }
   else if(humanChoice=="scissor" & computerChoice=="rock"){
      lose()
   }
   else if(humanChoice==computerChoice){
      final.textContent="Draw";
      Hscore.textContent="Your Score : "+humanScore;
      Cscore.textContent="Computer Score : "+computerScore;
   }
   else{
      final.textContent="You Won";
      humanScore++;
      Hscore.textContent="Your Score : "+humanScore;
      Cscore.textContent="Computer Score : "+computerScore;
   }
}
function lose(){
   final.textContent="You Lose";
   computerScore++;
   Hscore.textContent="Your Score : "+humanScore;
   Cscore.textContent="Computer Score : "+computerScore;
}
function reset()
{
   humanScore=0;
   computerScore=0;
   Hscore.textContent="Your Score : 0";
   Cscore.textContent="Computer Score : 0";
   human.textContent="Your Choice : "
   comp.textContent="Computer Choice : "
   final.textContent="";
}
