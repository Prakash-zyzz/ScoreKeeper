let player1Btn = document.querySelector("#player1Btn");
let player2Btn = document.querySelector("#player2Btn");
let player1 = document.querySelector("#p1Score");
let player2 = document.querySelector("#p2Score");
let resetBtn = document.querySelector("#reset");
let select = document.querySelector("#select")

let ps1 = 0;
let ps2 = 0;
let winningScore =3 ;
let gameOver = false;

player1Btn.addEventListener("click",function(){
  if(!gameOver){
      ps1 += 1;
      if(ps1 === winningScore)  {
       gameOver=true;
       player1.classList.add("has-text-success");
       player2.classList.add("has-text-danger");
       player1Btn.disabled = true;
       player2Btn.disabled = true;
      }
      player1.textContent = ps1;
  }

});

player2Btn.addEventListener("click",function(){
  if(!gameOver){
      ps2 += 1;
      if(ps2 === winningScore)  {
       gameOver=true;
       player2.classList.add("has-text-success");
       player1.classList.add("has-text-danger");
       player1Btn.disabled = true;
       player2Btn.disabled = true;
      }
      player2.textContent = ps2;
  }
});

select.addEventListener("change",function(){
winningScore =  parseInt(this.value);
reset();
})

resetBtn.addEventListener("click",reset);

function reset(){
  gameOver=false;
  ps1 = 0;
  ps2 = 0;
 player1.textContent = 0;
 player2.textContent = 0;
 player1.classList.remove("has-text-success","has-text-danger");
 player2.classList.remove("has-text-success","has-text-danger");
 player1Btn.disabled = false;
 player2Btn.disabled = false;
}
