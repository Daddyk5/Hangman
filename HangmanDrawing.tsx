import React from 'react';
import './HangmanDrawing.css'; // Import CSS file for styles

type HangmanDrawingProps = {
  wrongGuesses: number;
};

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ wrongGuesses }) => {
  // Define body parts as SVG elements
  const bodyParts = [
    // Head
    <circle cx="140" cy="70" r="20" key="head" className={wrongGuesses >= 1 ? 'visible' : 'hidden'} />,
    // Body
    <line x1="140" y1="90" x2="140" y2="150" key="body" className={wrongGuesses >= 2 ? 'visible' : 'hidden'} />,
    // Left Arm
    <line x1="140" y1="110" x2="120" y2="130" key="left-arm" className={wrongGuesses >= 3 ? 'visible' : 'hidden'} />,
    // Right Arm
    <line x1="140" y1="110" x2="160" y2="130" key="right-arm" className={wrongGuesses >= 4 ? 'visible' : 'hidden'} />,
    // Left Leg
    <line x1="140" y1="150" x2="120" y2="180" key="left-leg" className={wrongGuesses >= 5 ? 'visible' : 'hidden'} />,
    // Right Leg
    <line x1="140" y1="150" x2="160" y2="180" key="right-leg" className={wrongGuesses >= 6 ? 'visible' : 'hidden'} />,
  ];

  return (
    <svg height="200" width="200" className="hangman-svg">
      {/* Scaffold */}
      <line x1="20" y1="180" x2="140" y2="180" />
      <line x1="60" y1="20" x2="60" y2="180" />
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />

      {/* Display body parts */}
      {bodyParts}
    </svg>
  );
};

export default HangmanDrawing;
