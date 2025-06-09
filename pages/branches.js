import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import useCustomerAPI from '../hooks/useCustomerAPI';

export default function Branches() {
  const api = useCustomerAPI();
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    api.get('/branches').then(({ data }) => setBranches(data)).catch(() => {});
  }, []);

  return (
    <Layout>
      <Head><title>Branches</title></Head>
      <h1>Branches</h1>
      <ul>
        {branches.map((b) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
    </Layout>
  );
}
