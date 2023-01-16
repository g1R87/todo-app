import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) return alert('Passwords does not match!');
    alert('sign up!');
    //setState
  };
  return (
    <div>
      <form className="page-form signup" onSubmit={onSubmit}>
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
