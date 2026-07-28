import axios from 'axios';
import { LoginPayload, SignupPayload, AuthResponse } from '../types';

const PRIMARY_API_URL = import.meta.env.VITE_API_BASE_URL;

// Configure global Axios request interceptor to automatically attach Authorization header
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export async function loginUser(
  credentials: LoginPayload
): Promise<AuthResponse> {
  try {
    const response = await axios.post<AuthResponse>(
      `${PRIMARY_API_URL}/auth/login`,
      credentials,
      {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      throw new Error(error.response.data.message || 'Login failed.');
    }

    throw new Error(error.message || 'Network error during login.');
  }
}

export async function signupUser(
  credentials: SignupPayload
): Promise<AuthResponse> {
  try {
    const response = await axios.post<AuthResponse>(
      `${PRIMARY_API_URL}/auth/signup`,
      credentials,
      {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      throw new Error(error.response.data.message || 'Signup failed.');
    }

    throw new Error(error.message || 'Network error during signup.');
  }
}