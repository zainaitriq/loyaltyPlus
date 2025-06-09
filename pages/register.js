import { useState } from 'react';
import Head from 'next/head';
import useCustomerAPI from '../hooks/useCustomerAPI';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const api = useCustomerAPI();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/register', { email, password });
      login(data.token);
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <>
      <Head><title>Register</title></Head>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
