export const DIFFICULTY_LEVELS = {
    easy: { timeLimit: 60, multiplier: 1 },
    medium: { timeLimit: 45, multiplier: 2 },
    hard: { timeLimit: 30, multiplier: 3 }
  };
  
  export const EquationGenerators = {
    calculus: (difficulty = 'medium') => {
      const a = Math.floor(Math.random() * 10 * DIFFICULTY_LEVELS[difficulty].multiplier);
      const b = Math.floor(Math.random() * 10 * DIFFICULTY_LEVELS[difficulty].multiplier);
      return {
        equation: `∫(${a}x² + ${b}x)dx`,
        solution: `(${a/3})x³ + (${b/2})x² + C`,
        category: 'Calculus',
        points: 10 * DIFFICULTY_LEVELS[difficulty].multiplier
      };
    },
    physics: (difficulty = 'medium') => {
      const force = Math.floor(Math.random() * 50 * DIFFICULTY_LEVELS[difficulty].multiplier);
      const mass = Math.floor(Math.random() * 10 + 1 * DIFFICULTY_LEVELS[difficulty].multiplier);
      return {
        equation: `F = ma, F = ${force}N, m = ${mass}kg`,
        solution: `a = F/m = ${(force/mass).toFixed(2)} m/s²`,
        category: 'Physics',
        points: 10 * DIFFICULTY_LEVELS[difficulty].multiplier
      };
    },
    autocad: (difficulty = 'medium') => {
      const length = Math.floor(Math.random() * 100 * DIFFICULTY_LEVELS[difficulty].multiplier);
      const angle = Math.floor(Math.random() * 90 * DIFFICULTY_LEVELS[difficulty].multiplier);
      return {
        equation: `Line: Length = ${length}, Angle = ${angle}°`,
        solution: `Coordinate Calculation`,
        category: 'AutoCAD',
        points: 10 * DIFFICULTY_LEVELS[difficulty].multiplier
      };
    }
  };
  
  export const generateEquation = (mode = null, difficulty = 'medium') => {
    const modes = Object.keys(EquationGenerators);
    const selectedMode = mode || modes[Math.floor(Math.random() * modes.length)];
    return EquationGenerators[selectedMode](difficulty);
  };