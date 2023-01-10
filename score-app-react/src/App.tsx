import Board from './components/Board';
import { scores } from './data/ScoreTableData';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Board title="Premier League" matchDay={19} scores={scores} />
    </div>
  );
}

export default App;
