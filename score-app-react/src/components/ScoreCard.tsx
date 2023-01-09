import Team from './Team';

import type { ScoreObject } from '../data/ScoreTableData';

function ScoreCard({ date, team1, team2 }: ScoreObject) {
  return (
    <div className="scorecard">
      <Team name={team1.name} logo={team1.logo} score={team1.score} />
      <Team name={team2.name} logo={team2.logo} score={team2.score} />
      <div>{date}</div>
    </div>
  );
}

export default ScoreCard;
