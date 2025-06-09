import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import useCustomerAPI from '../../hooks/useCustomerAPI';

export default function Rewards() {
  const api = useCustomerAPI();
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    api.get('/rewards').then(({ data }) => setRewards(data)).catch(() => {});
  }, []);

  const redeem = async (id) => {
    try {
      await api.post(`/rewards/${id}/redeem`);
      alert('Redeemed');
    } catch (e) {
      alert('Error redeeming');
    }
  };

  return (
    <Layout>
      <Head><title>Rewards</title></Head>
      <h1>Rewards</h1>
      <div className="grid">
        {rewards.map((r) => (
          <div key={r.id} className="card">
            <img src={r.image} alt={r.title} />
            <h3>{r.title}</h3>
            <p>{r.points} points</p>
            <button onClick={() => redeem(r.id)}>Redeem</button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .card {
          border: 1px solid #ccc;
          padding: 1rem;
          text-align: center;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </Layout>
  );
}
