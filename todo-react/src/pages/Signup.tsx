import { useState } from 'react';
import { createUser } from '../service/auth';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) return alert('Passwords does not match!');
    const userData = await createUser({
      name,
      email,
      password,
      confirmPassword,
    });
    console.log(userData);
  };
  return (
    <div>
      <form className="page-form signup" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button type="submit" className="signup-btn singup">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
