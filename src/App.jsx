import React, { useState, useEffect, useRef, useCallback } from 'react';
import Dice from './Dice';

function App() {
  const [userGuess, setUserGuess] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const diceRef = useRef(null);

  const rollDice = useCallback(() => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    return roll;
  }, []);

  const handleGuess = (guess) => {
    setUserGuess(guess);
    const rolled = rollDice();

    if (guess === rolled) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  useEffect(() => {
    if (streak > highScore) {
      setHighScore(streak);
    }
  }, [streak, highScore]);

  useEffect(() => {
    if (diceRef.current) {
      diceRef.current.classList.add('animate-roll');
      const timer = setTimeout(() => {
        diceRef.current.classList.remove('animate-roll');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [diceRoll]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-800 drop-shadow-md">🎲 Dice Dilemma 🎲</h1>

      <Dice number={diceRoll} diceRef={diceRef} />

      <div className="flex space-x-3 my-6">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleGuess(num)}
            className="bg-white hover:bg-blue-300 text-blue-800 font-semibold border border-blue-400 rounded-lg px-4 py-2 shadow-md transition-all duration-200"
          >
            {num}
          </button>
        ))}
      </div>

      <div className="text-center space-y-3 bg-white rounded-lg shadow-lg p-6 w-72">
        <p className="text-lg">🎯 Your Guess: <span className="font-bold">{userGuess ?? '-'}</span></p>
        <p className="text-lg">🎲 Dice Rolled: <span className="font-bold">{diceRoll ?? '-'}</span></p>
        <p className="text-lg text-green-600">🔥 Current Streak: <span className="font-bold">{streak}</span></p>
        <p className="text-lg text-purple-600">🏆 High Score: <span className="font-bold">{highScore}</span></p>
      </div>
    </div>
  );
}

export default App;
