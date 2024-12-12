import React from "react";
import './GameBlurb.css';

function GameBlurb({ summary }) {
  return (
    <div id="blurb-container">
      <div id="game-blurb">
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default GameBlurb;
