import React from 'react';
import confetti from 'canvas-confetti';

const count = 200;
const defaults = {
  origin: { y: 0.75 },
};

function fire(particleRatio, opts, delay = 0) {
  setTimeout(
    () => confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) }),
    delay,
  );
}

export const useConfetti = () => {
  React.useEffect(() => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(
      0.2,
      {
        spread: 46,
      },
      80,
    );
    fire(0.35, {
      spread: 72,
      decay: 0.91,
    });
    fire(
      0.2,
      {
        spread: 64,
        startVelocity: 25,
        decay: 0.92,
      },
      140,
    );
    fire(
      0.1,
      {
        spread: 76,
        startVelocity: 45,
      },
      120,
    );
  }, []);
};
