import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../service/auth';
import * as localStorage from '../utils/localStorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const userData = await login({ email, password });
    console.log(userData);

    localStorage.set('authdata', userData.payload);
    navigate('/');
    console.log(userData);
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
