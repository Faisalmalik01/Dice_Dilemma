import React from 'react';

function Dice({ number, diceRef }) {
  return (
    <div
      ref={diceRef}
      className="w-24 h-24 flex items-center justify-center bg-white border-4 border-blue-400 rounded-2xl text-5xl font-bold shadow-lg mb-6 transition-transform duration-500"
    >
      {number ? number : '🎲'}
    </div>
  );
}

export default Dice;
