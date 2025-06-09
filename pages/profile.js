import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import useCustomerAPI from '../hooks/useCustomerAPI';

export default function Profile() {
  const api = useCustomerAPI();
  const [profile, setProfile] = useState({});
  const [password, setPassword] = useState('');

  useEffect(() => {
    api.get('/profile').then(({ data }) => setProfile(data)).catch(() => {});
  }, []);

  const update = async () => {
    try {
      await api.put('/profile', { ...profile, password });
      alert('Updated');
    } catch (e) {
      alert('Error updating');
    }
  };

  return (
    <Layout>
      <Head><title>Profile</title></Head>
      <h1>Profile</h1>
      <input
        type="text"
        value={profile.name || ''}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={update}>Save</button>
    </Layout>
  );
}
