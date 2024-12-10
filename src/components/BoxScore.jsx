import React, { useState } from "react";

const games = [
  {
    id: 1,
    title: "Game 1: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team A", "1", "0", "2", "0", "1", "0", "0", "0", "0", "4", "6", "1"],
      ["Team B", "0", "1", "0", "2", "0", "0", "1", "0", "1", "5", "7", "0"],
    ],
  },
  {
    id: 2,
    title: "Game 2: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team C", "0", "1", "0", "0", "2", "1", "0", "0", "0", "4", "8", "2"],
      ["Team D", "1", "0", "1", "0", "0", "0", "2", "0", "1", "5", "9", "0"],
    ],
  },
  {
    id: 3,
    title: "Game 3: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team C", "0", "1", "0", "0", "2", "1", "0", "0", "0", "4", "8", "3"],
      ["Team D", "1", "0", "1", "0", "0", "0", "2", "0", "1", "5", "9", "0"],
    ],
  },
  {
    id: 4,
    title: "Game 4: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team C", "0", "1", "0", "0", "2", "1", "0", "0", "0", "4", "8", "4"],
      ["Team D", "1", "0", "1", "0", "0", "0", "2", "0", "1", "5", "9", "0"],
    ],
  },
  {
    id: 5,
    title: "Game 5: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team C", "0", "1", "0", "0", "2", "1", "0", "0", "0", "4", "8", "5"],
      ["Team D", "1", "0", "1", "0", "0", "0", "2", "0", "1", "5", "9", "0"],
    ],
  },
  {
    id: 6,
    title: "Game 6: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team C", "0", "1", "0", "0", "2", "1", "0", "0", "0", "4", "8", "6"],
      ["Team D", "1", "0", "1", "0", "0", "0", "2", "0", "1", "5", "9", "0"],
    ],
  },
  {
    id: 7,
    title: "Game 7: Cardinals vs Rangers",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["Team C", "0", "1", "0", "0", "2", "1", "0", "0", "0", "4", "8", "7"],
      ["Team D", "1", "0", "1", "0", "0", "0", "2", "0", "1", "5", "9", "0"],
    ],
  }
];

function BoxScore() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const renderBoxScore = (boxScore) => {
    return (
      <table>
        <thead>
          <tr>
            {boxScore[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boxScore.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="tabs">
        {games.map((game) => (
          <button
            key={game.id}
            className={activeTab === game.id ? "active" : ""}
            onClick={() => handleTabClick(game.id)}
          >
            {game.title}
          </button>
        ))}
      </div>
      <div className="box-score">
        {renderBoxScore(games.find((game) => game.id === activeTab).boxScore)}
      </div>
    </>
  );
}

export default BoxScore;
