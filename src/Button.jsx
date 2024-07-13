import { useState } from 'react'

function Button() {
  const [score, setScore] = useState(0);
  const [style, setStyle] = useState({});
  const [timeoutId, setTimeout] = useState(() => {window.setTimeout(move, 1000)});

  function move() {
    setStyle({
      marginTop: Math.floor(Math.random() * 100 - 50) + 'vmin',
      marginLeft: Math.floor(Math.random() * 100 - 50) + 'vmin'
    });
    clearTimeout(timeoutId);
    setTimeout(window.setTimeout(move, 1000 / (Math.max(score / 10, 1))));
  }

  function handleClick() {
    move();
    setScore(score + 1);
  }

  return (
    <button onMouseDown={handleClick} style={style}>
        {score}
    </button>
  )
}

export default Button