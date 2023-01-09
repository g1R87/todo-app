import Board from "./components/Board";

export type TeamObjectType = {
  logo: string;
  name: string;
  score: number;
};

export type ScoreObject = {
  team1: TeamObjectType;
  team2: TeamObjectType;
  date: string;
};

const scores: ScoreObject[] = [
  {
    team1: {
      logo: "https://www.seekpng.com/png/full/15-159909_manchester-city-fc-badge-man-city-logo-png.png",
      name: "Manchester City",
      score: 3,
    },
    team2: {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png",
      name: "Chelsea",
      score: 3,
    },
    date: "2023-01-04",
  },
  {
    team1: {
      logo: "https://www.seekpng.com/png/full/15-159909_manchester-city-fc-badge-man-city-logo-png.png",
      name: "Manchester City 1",
      score: 3,
    },
    team2: {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png",
      name: "Chelsea 1",
      score: 3,
    },
    date: "2023-01-04",
  },
  {
    team1: {
      logo: "https://www.seekpng.com/png/full/15-159909_manchester-city-fc-badge-man-city-logo-png.png",
      name: "Manchester City 1",
      score: 3,
    },
    team2: {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png",
      name: "Chelsea 1",
      score: 3,
    },
    date: "2023-01-04",
  },
  {
    team1: {
      logo: "https://www.seekpng.com/png/full/15-159909_manchester-city-fc-badge-man-city-logo-png.png",
      name: "Manchester City 1",
      score: 3,
    },
    team2: {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png",
      name: "Chelsea 1",
      score: 3,
    },
    date: "2023-01-04",
  },
];

function App() {
  return (
    <div className="container">
      <Board title="Premier League" matchDay={19} scores={scores} />
    </div>
  );
}

export default App;
