import React, { useState } from 'react';
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';
import './App.css';


const sleep = ()=>{
  return new Promise(resolve => setTimeout(resolve, 300));
}
function App() {
//Değişkenler
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] =useState(0);
  const [highScore, setHighScore]= useState(0);

//Zar görselleri
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];


//Zarlar
  const[computerDice, setComputerDice] = useState(0);
  const[playerDice, setPlayerDice]= useState(0);
  const[rolling, setRolling]= useState(false);

  
  const rollDice = async () =>{
    setRolling(true);

    let randomComputerDice = 0;
    let randomPlayerDice = 0;

    for(let i =0; i<20; i++){
      randomPlayerDice = Math.floor(Math.random()*6) + 1;
      randomComputerDice = Math.floor(Math.random()*6) +1;
  
      setPlayerDice(randomPlayerDice);
      setComputerDice(randomComputerDice);
      
      await sleep();
      if(i===10){
        setRolling(false)
      }
      setTimeout(() => {
        setRolling(false);
      }, 1000);
    }

    if(randomPlayerDice> randomComputerDice){
      setPlayerScore((prev) => prev +1);
      setHighScore((prev) => prev +1);
    }
    else if(randomComputerDice > randomPlayerDice){
      setComputerScore((prev) => prev+1)
    }
   
  }

  return (
    <>
    <div className='container'>
      <h1>Welcome To Dice Game</h1>
      <div className='players'>
      <div className="player-one">
        <h2>Player1</h2>
        <div>{playerDice}</div>
        <img src={diceImages[playerDice - 1]} alt="" />      
      </div>
      <div className="player-two">
      <h2>Player2</h2>
      <div>{computerDice}</div>
      <img src={diceImages[computerDice - 1]} alt="" />
     </div>
     <div className='scores'>
      <h2>Scores</h2>
      <hr />
      <p>Player Score:{playerScore}</p>
      <p>Computer Score:{computerScore}</p>
      <p>High Score:{highScore}</p>

     </div>
    </div>
     
     <button disabled ={rolling} onClick={rollDice}>{rolling ? "Rolling..." : "Roll Dice"}</button>
    </div>
    </>
  )
}

export default App
