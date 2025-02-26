let computerChoice;
let humanChoice;
let humanScore=0;
let computerScore=0;
const human=document.getElementById("humanChoice");
const comp=document.getElementById("computerChoice");
const score=document.querySelector(".result");
const Result=document.createElement("h3");
const Hscore=document.createElement("h3");
const Cscore=document.createElement("h3");
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
      Result.textContent="Draw";
      score.appendChild(Result);
      Hscore.textContent="Your Score : "+humanScore;
      Cscore.textContent="Computer Score : "+computerScore;
      score.appendChild(Cscore);
      score.appendChild(Hscore);
   }
   else{
      Result.textContent="You Won";
      score.appendChild(Result);
      humanScore++;
      Hscore.textContent="Your Score : "+humanScore;
      Cscore.textContent="Computer Score : "+computerScore;
      score.appendChild(Cscore);
      score.appendChild(Hscore);
   }
}
function lose(){
   Result.textContent="You Lose";
   score.appendChild(Result);
   computerScore++;
   Hscore.textContent="Your Score : "+humanScore;
   Cscore.textContent="Computer Score : "+computerScore;
   score.appendChild(Cscore);
   score.appendChild(Hscore);
}
