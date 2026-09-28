import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Server connection error. Ensure backend is running.');
    }
  };

  return (
    <div className="min-h-screen bg-black/10 backdrop-blur-sm flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-amber-900 font-sans relative z-10">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-[#e7dfd1] font-serif drop-shadow-md">
          Admin Login
        </h2>
        <p className="mt-2 text-center text-sm text-[#e7dfd1]/80 uppercase tracking-widest drop-shadow-sm">
          Chettinad Bites Dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-[#2a3822]/80 backdrop-blur-xl py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-10 border border-[#e7dfd1]/20">
          <div className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-amber-400 via-orange-400 to-[#8a3020] rounded-t-3xl"></div>
          
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/20 text-red-100 text-sm p-3 rounded-lg border border-red-500/50 text-center backdrop-blur-md">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold text-[#e7dfd1] mb-2 tracking-wide uppercase">
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 bg-white/10 border border-[#e7dfd1]/30 rounded-xl shadow-inner text-[#e7dfd1] placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#e7dfd1]/50 focus:border-transparent sm:text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e7dfd1] mb-2 tracking-wide uppercase">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 bg-white/10 border border-[#e7dfd1]/30 rounded-xl shadow-inner text-[#e7dfd1] placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#e7dfd1]/50 focus:border-transparent sm:text-sm transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-[#2a3822] bg-[#e7dfd1] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2a3822] focus:ring-white transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
