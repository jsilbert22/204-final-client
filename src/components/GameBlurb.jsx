import React from "react";
import './GameBlurb.css';

function GameBlurb({ summary }) {
  return (
    <div id="gameblurb">
      <p>{summary}</p>
    </div>
  );
}

export default GameBlurb;
