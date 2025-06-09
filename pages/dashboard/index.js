import Head from 'next/head';
import Layout from '../../components/Layout';
import { useAuth } from '../../context/AuthContext';
import useCustomerAPI from '../../hooks/useCustomerAPI';

export async function getServerSideProps({ req }) {
  // Example token extraction
  const token = req.headers.cookie?.replace('token=', '') || null;
  if (!token) {
    return {
      redirect: { destination: '/login', permanent: false }
    };
  }
  // Fetch data from backend here
  // const res = await fetch('backend/dashboard', { headers: { Authorization: `Bearer ${token}` } });
  // const data = await res.json();
  const data = { total: 0, redeemed: 0, available: 0 };
  return { props: { data } };
}

export default function Dashboard({ data }) {
  const { logout } = useAuth();
  return (
    <Layout>
      <Head><title>Dashboard</title></Head>
      <h1>Welcome to Loyalty+</h1>
      <p>Total Points: {data.total}</p>
      <p>Redeemed: {data.redeemed}</p>
      <p>Available: {data.available}</p>
      <button onClick={logout}>Logout</button>
    </Layout>
  );
}
