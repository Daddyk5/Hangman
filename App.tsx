
import React, { useState, useEffect } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord  from './HangmanWord';
import Keyboard from './Keyboard';
import WinNotification from './WinNotification';

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false); // State to track win
  const [errorFetching, setErrorFetching] = useState<boolean>(false);

  useEffect(() => {
    fetchWordList();
  }, []);

  const fetchWordList = async () => {
    try {
      const response = await fetch('/wordlist.json');
      if (!response.ok) {
        throw new Error('Failed to fetch word list');
      }
      const data = await response.json();
      const words = data.words;
      const randomIndex = Math.floor(Math.random() * words.length);
      setWordToGuess(words[randomIndex]);
    } catch (error) {
      console.error('Error fetching the word list:', error);
      setErrorFetching(true);
    }
  };

  const handleGuess = (letter: string) => {
    if (!wordToGuess || guessedLetters.includes(letter) || gameOver) {
      return; // Do not proceed if game is over or letter already guessed
    }

    setGuessedLetters([...guessedLetters, letter]);
    if (!wordToGuess.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }

    checkGameStatus();
  };

  const checkGameStatus = () => {
    const guessedWord = wordToGuess?.split('').every(letter => guessedLetters.includes(letter));
    if (guessedWord) {
      setGameOver(true);
      setWin(true); // Set win state to true when the word is correctly guessed
    } else if (wrongGuesses >= 6) {
      setGameOver(true);
      setWin(false);
    }
  };

  const handleReset = () => {
    setWordToGuess(null);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setWin(false);
    fetchWordList(); // Restart the game by fetching a new word
  };

  if (errorFetching) {
    return (
      <div>
        <h1>Hangman Game</h1>
        <p>Error fetching word list. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Hangman Game</h1>
      <HangmanDrawing wrongGuesses={wrongGuesses} />
      {gameOver && <WinNotification win={win} />}
      {!gameOver && <HangmanWord word={wordToGuess || ''} guessedLetters={guessedLetters} />}
      {!gameOver && <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} disabled={gameOver} />}
      <div>Wrong guesses: {wrongGuesses}</div>
    </div>
  );
};

export default App;
