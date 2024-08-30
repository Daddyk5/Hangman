import React from 'react';

type WinNotificationProps = {
  win: boolean;
};

const WinNotification: React.FC<WinNotificationProps> = ({ win }) => {
  if (win) {
    return (
      <div>
        <h2>Congratulations!</h2>
        <p>You won!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Game Over!</h2>
        <p>You lost. Try again!</p>
      </div>
    );
  }
};

export default WinNotification;
