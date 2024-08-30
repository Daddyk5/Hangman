import React from 'react';

type KeyboardProps = {
  guessedLetters: string[];
  onGuess: (letter: string) => void;
  disabled: boolean;
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard: React.FC<KeyboardProps> = ({ guessedLetters, onGuess, disabled }) => {
  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
          className={`key ${guessedLetters.includes(letter) ? 'disabled' : ''}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
