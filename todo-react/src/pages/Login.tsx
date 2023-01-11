import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    alert('Loggin in!');
    //setState
  };

  return (
    <div>
      <form className="page-form login" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <Link className="signup-btn" to={`/signup`}>
            <button className="signup-btn btn" type="button">
              Signup
            </button>
          </Link>

          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
