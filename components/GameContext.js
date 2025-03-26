import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(null);
  const [difficulty, setDifficulty] = useState('medium');
  const [playerCount, setPlayerCount] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{
      gameMode, 
      setGameMode,
      difficulty, 
      setDifficulty,
      playerCount, 
      setPlayerCount,
      score,
      setScore
    }}>
      {children}
    </GameContext.Provider>
  );
};