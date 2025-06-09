import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import useCustomerAPI from '../hooks/useCustomerAPI';

export default function History() {
  const api = useCustomerAPI();
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/history').then(({ data }) => setItems(data)).catch(() => {});
  }, []);

  return (
    <Layout>
      <Head><title>History</title></Head>
      <h1>History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Points</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.date}</td>
              <td>{i.type}</td>
              <td>{i.description}</td>
              <td>{i.points}</td>
              <td>{i.store}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
