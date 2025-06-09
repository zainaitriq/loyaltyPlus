import { useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../context/AuthContext';
import useCustomerAPI from '../hooks/useCustomerAPI';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const api = useCustomerAPI();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/login', { email, password });
      login(data.token);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <>
      <Head><title>Login</title></Head>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}
