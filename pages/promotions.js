import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import useCustomerAPI from '../hooks/useCustomerAPI';

export default function Promotions() {
  const api = useCustomerAPI();
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    api.get('/promotions').then(({ data }) => setPromos(data)).catch(() => {});
  }, []);

  return (
    <Layout>
      <Head><title>Promotions</title></Head>
      <h1>Promotions</h1>
      <ul>
        {promos.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </Layout>
  );
}
