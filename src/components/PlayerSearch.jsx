import React, { useState } from 'react';

const PlayerSearch = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!playerName.trim()) return;

    fetch("https://api.sportsdata.io/v3/mlb/scores/json/PlayersByFreeAgents?key=122bf01103de4577ab297ec486238a0c")
      .then(response => response.json())
      .then(data => {
        const player = data.find(
          (p) => `${p.FirstName} ${p.LastName}`.toLowerCase() === playerName.toLowerCase()
        );

        if (player) {
          setPlayerData(player);
          setError(null);
        } else {
          setPlayerData(null);
          setError("Player not found.");
        }
      })
      .catch(() => {
        setPlayerData(null);
        setError("An error occurred while fetching player information.");
      });
  };

  return (
    <div>
      <h1>MLB Player Search</h1>
      <input
        type="text"
        placeholder="Enter player name (e.g. Paul Goldschmidt)"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {playerData && (
        <div id="player-info">
          <div className="player-data"><strong>Name:</strong> {playerData.FirstName} {playerData.LastName}</div>
          <div className="player-data"><strong>Position:</strong> {playerData.Position}</div>
          <div className="player-data"><strong>Bat Hand:</strong> {playerData.BatHand}</div>
          <div className="player-data"><strong>Throw Hand:</strong> {playerData.ThrowHand}</div>
          <div className="player-data"><strong>Height:</strong> {playerData.Height} inches</div>
          <div className="player-data"><strong>Weight:</strong> {playerData.Weight} lbs</div>
        </div>
      )}
    </div>
  );
};

export default PlayerSearch;
