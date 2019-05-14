const game = () => {
  let playerS = 0;
  let compS = 0;

  const startGame =()=>{
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');


    playBtn.addEventListener('click',()=>{
      introScreen.classList.add("fadeOut");
      match.classList.add('fadeIn');

    })
  }

const playMatch =()=>{
  const options = document.querySelectorAll('.options button');
  const player1 = document.querySelector('.playerHand');
  const comp = document.querySelector('.compHand');
  const icons = document.querySelectorAll('.icons img');

  icons.forEach(icons =>{
    icons.addEventListener('animationend',function(){
      this.style.animation = "";
    })
  })

  const compOptions = ['rock','paper','scissors'];

options.forEach(options=>{
  options.addEventListener('click',function(){
    const comp_number = Math.floor(Math.random()*3);
    const comp_choice = compOptions[comp_number]

setTimeout(()=>{
  compare(this.textContent,comp_choice);


player1.src= `./i&i/${this.textContent}.png`;
comp.src= `./i&i/${comp_choice}.png`;
},2000)


player1.style.animation = 'shakeP 2s ease'
comp.style.animation = 'shakeC 2s ease'
    })
  })
}

const scoreUpdate =()=>{
  const playerScore = document.querySelector('.player-score p');
  const compScore = document.querySelector('.comp-score p');
  playerScore.textContent = playerS;
  compScore.textContent = compS;
}


const compare =(playerChoice,comp_choice)=>{
  const winner = document.querySelector('.winner');

if(playerChoice === comp_choice){
    winner.textContent = "It's a Tie";

return;
  }

if(playerChoice === 'rock'){
  if(comp_choice === 'scissors'){
    winner.textContent = "You Win !!!";
    playerS++;
    scoreUpdate();
  }else {
    winner.textContent = "You Lose...";
    compS++;
    scoreUpdate();
    return;
  }
}

if(playerChoice === 'paper'){
  if(comp_choice ==='rock'){
    winner.textContent = "You Win !!!";
      playerS++;
      scoreUpdate();
  }else {
    winner.textContent = "You Lose...";
    compS++;
    scoreUpdate();
    return;
  }
}

if (playerChoice === 'scissors') {
  if(comp_choice === 'paper'){
    winner.textContent = "You Win !!!";
    playerS++;
      scoreUpdate();
  }
  else {
    winner.textContent = "You Lose...";
    compS++;
    scoreUpdate();
    return;
    }
  }

}
compare();
startGame();
playMatch();
}
game();
