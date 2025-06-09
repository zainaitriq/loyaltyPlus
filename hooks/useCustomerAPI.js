import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function useCustomerAPI() {
  const { token } = useAuth();

  const client = axios.create({
    baseURL: '/api',
    headers: { Authorization: token ? `Bearer ${token}` : '' }
  });

  return client;
}
