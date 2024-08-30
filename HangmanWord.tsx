import React from 'react';

type HangmanWordProps = {
  word: string;
  guessedLetters: string[];
};

const HangmanWord: React.FC<HangmanWordProps> = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split("").map((letter, index) => (
        <span key={index} style={{ marginRight: "5px", fontSize: "24px" }}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
