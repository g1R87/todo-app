import { TeamObjectType } from '../App';

function Team({ name, logo, score }: TeamObjectType) {
  return (
    <div className="team">
      <div className="team-logo-title">
        <img className="logo" src={logo} alt={name} />
        <p> {name} </p>
      </div>
      <p>{score}</p>
    </div>
  );
}

export default Team;
