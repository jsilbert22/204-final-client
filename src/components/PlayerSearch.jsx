import React, { useState } from 'react';
import './PlayerSearch.css';
import { UserRoundSearch } from 'lucide-react';

const PlayerSearch = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!playerName.trim()) return;

    fetch("https://api.sportsdata.io/v3/mlb/scores/json/PlayersBasic/STL?key=122bf01103de4577ab297ec486238a0c")
      .then((response) => response.json())
      .then((data) => {
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
    <div id="player-search">
      <div id="search-bar-and-error">
        <div id="search-icon">
          <UserRoundSearch size={150} strokeWidth={0.75} color="rgb(239, 236, 236)"/>
        </div>
        <div id="search-bar">
          <input
            id="search"
            type="text"
            placeholder="Enter player name (e.g. Jordan Walker)"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button id="button" onClick={handleSearch}>Search</button>
        </div>

        {error && <p id="error">{error}</p>}
      </div>

      <div id="player-info">
        <div className="player-data"><strong>Name:</strong> {playerData ? `${playerData.FirstName} ${playerData.LastName}` : "N/A"}</div>
        <div className="player-data"><strong>Position:</strong> {playerData ? playerData.Position : "N/A"}</div>
        <div className="player-data"><strong>Bat Hand:</strong> {playerData ? playerData.BatHand : "N/A"}</div>
        <div className="player-data"><strong>Throw Hand:</strong> {playerData ? playerData.ThrowHand : "N/A"}</div>
        <div className="player-data"><strong>Height:</strong> {playerData ? `${playerData.Height} inches` : "N/A"}</div>
        <div className="player-data"><strong>Weight:</strong> {playerData ? `${playerData.Weight} lbs` : "N/A"}</div>
      </div>
    </div>
  );
};

export default PlayerSearch;
