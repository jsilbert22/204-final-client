import React, { useState } from "react";
import GameBlurb from "./GameBlurb";
import PlayerSearch from "./PlayerSearch";
import './BoxScore.css';

const games = [
  {
    id: 1,
    title: "Game 1: Rangers @ Cardinals",
    summary: "The 2011 World Series opened with a classic duel at Busch Stadium as the St. Louis Cardinals edged out the Texas Rangers 3-2. Chris Carpenter pitched six solid innings, supported by timely hits from Lance Berkman and Allen Craig. Texas' C.J. Wilson kept it close, but a pivotal pinch-hit RBI by Craig in the sixth inning sealed the win. The Cardinals' bullpen proved unshakable, with Jason Motte earning the save. A tightly contested opener set the stage for an unforgettable series.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["TEX", "0", "0", "0", "0", "2", "0", "0", "0", "0", "2", "6", "0"],
      ["STL", "0", "1", "0", "2", "0", "0", "1", "0", "1", "3", "6", "0"],
    ],
  },
  {
    id: 2,
    title: "Game 2: Rangers @ Cardinals",
    summary: "The Rangers evened the series in a nail-biting 2-1 victory, showcasing clutch hitting and lights-out pitching. Ian Kinsler and Elvis Andrus ignited the offense in the ninth inning, scoring two runs off Cardinals' closer Jason Motte. Despite Jaime Garcia's stellar start for St. Louis, Texas' bullpen preserved the lead, with Neftalí Feliz closing the door. The tension in St. Louis was palpable as both teams showcased their championship mettle.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["TEX", "0", "0", "0", "0", "0", "0", "0", "0", "2", "2", "5", "1"],
      ["STL", "0", "0", "0", "0", "0", "0", "1", "0", "0", "1", "6", "1"],
    ],
  },
  {
    id: 3,
    title: "Game 3: Cardinals @ Rangers",
    summary: "The Cardinals exploded offensively in Arlington, crushing the Rangers 16-7 in a record-setting performance. Albert Pujols stole the show with three home runs, tying a World Series record. He added six RBIs and five hits in a jaw-dropping display of power. St. Louis capitalized on Texas' shaky pitching, while Cardinals starter Kyle Lohse was backed by a relentless lineup. This lopsided game reminded everyone of the firepower St. Louis brought to the series.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["STL", "1", "0", "0", "4", "3", "4", "2", "1", "1", "16", "15", "0"],
      ["TEX", "0", "0", "0", "3", "3", "0", "1", "0", "0", "7", "13", "3"],
    ],
  },
  {
    id: 4,
    title: "Game 4: Cardinals @ Rangers",
    summary: "Texas responded in Game 4 with a gritty 4-0 victory to tie the series. Derek Holland delivered a masterful pitching performance, throwing 8 1/3 scoreless innings and allowing just two hits. Mike Napoli's three-run homer provided the offensive spark the Rangers needed. Holland’s dominance silenced a potent Cardinals offense, giving Texas momentum and confidence in their home ballpark.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["STL", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "0"],
      ["TEX", "1", "0", "0", "0", "0", "3", "2", "0", "X", "4", "6", "0"],
    ],
  },
  {
    id: 5,
    title: "Game 5: Cardinals @ Rangers",
    summary: "In a crucial 4-2 victory, the Rangers took a 3-2 series lead behind clutch performances and Napoli's continued heroics. With the game tied at 2-2 in the eighth inning, Napoli delivered a two-run double to break the deadlock. Both starting pitchers, C.J. Wilson and Chris Carpenter, battled hard, but Texas' bullpen outlasted the Cardinals. Back in Arlington, the Rangers seemed poised to clinch their first championship.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["STL", "0", "2", "0", "0", "0", "0", "0", "0", "0", "2", "7", "1"],
      ["TEX", "0", "0", "1", "0", "0", "1", "0", "2", "X", "4", "9", "2"],
    ],
  },
  {
    id: 6,
    title: "Game 6: Rangers @ Cardinals",
    summary: "Game 6 became an instant classic, a dramatic 10-9 Cardinals victory in 11 innings. Facing elimination twice, St. Louis rallied in the ninth and tenth innings, capped by David Freese's iconic walk-off home run. Earlier, Freese had tied the game with a two-out, two-strike triple in the ninth. Lance Berkman added another clutch hit in the tenth to keep the Cardinals alive. This game, filled with back-and-forth drama, is hailed as one of the greatest in World Series history.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "R", "H", "E"],
      ["TEX", "1", "1", "0", "1", "1", "0", "3", "0", "0", "2", "0", "9", "15", "2"],
      ["STL", "2", "0", "0", "1", "0", "1", "0", "1", "2", "2", "1", "10", "13", "3"],
    ],
  },
  {
    id: 7,
    title: "Game 7: Rangers @ Cardinals",
    summary: "The Cardinals completed their incredible comeback with a decisive 6-2 win to capture their 11th championship. David Freese, the series MVP, again starred with a key two-run double. Chris Carpenter, pitching on short rest, delivered six gritty innings. St. Louis capitalized on defensive miscues and timely hitting to overwhelm the Rangers. In front of a roaring Busch Stadium crowd, the Cardinals celebrated an unforgettable championship run.",
    boxScore: [
      ["Inning", "1", "2", "3", "4", "5", "6", "7", "8", "9", "R", "H", "E"],
      ["TEX", "2", "0", "0", "0", "0", "0", "0", "0", "0", "2", "6", "0"],
      ["STL", "2", "0", "1", "0", "2", "0", "1", "0", "X", "6", "7", "1"],
    ],
  },
];

function BoxScore() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeGame = games.find((game) => game.id === activeTab);

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
      <div className="box-score">{renderBoxScore(activeGame.boxScore)}</div>
      <GameBlurb summary={activeGame.summary} />
      <PlayerSearch />
    </>
  );
}

export default BoxScore;
