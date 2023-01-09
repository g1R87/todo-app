import ScoreCard from './ScoreCard';

import type { ScoreObject } from '../data/ScoreTableData';

type BoardProps = {
  title: string;
  matchDay: number;
  scores: ScoreObject[];
};

function Board(props: BoardProps) {
  const { title, matchDay, scores } = props;
  return (
    <div className="board">
      <div className="title">
        <h1>{title}</h1>
        <h3>Matchday {matchDay} of 38</h3>
      </div>
      <div className="scorecard-container">
        {scores.map((team) => (
          <ScoreCard date={team.date} team1={team.team1} team2={team.team2} />
        ))}
      </div>
    </div>
  );
}

export default Board;
