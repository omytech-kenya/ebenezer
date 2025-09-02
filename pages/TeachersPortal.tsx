import React, { useState } from 'react';
import Reveal from '../components/Reveal';

const TeachersPortal: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(mode === 'login' ? 'Logged in (demo).' : 'Account created (demo).');
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/ebe1.png')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Teachers Portal</h1>
            <p className="mt-3 text-lg md:text-xl text-gray-200">Sign in or create your account using your school email.</p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto w-full max-w-xl">
          <Reveal>
            <div className="mb-6 inline-flex rounded-full bg-gray-100 p-1 ring-1 ring-black/5">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-full ${mode === 'login' ? 'bg-primary-green text-white shadow' : 'text-gray-700 hover:bg-white'}`}
                onClick={() => setMode('login')}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-full ${mode === 'signup' ? 'bg-primary-green text-white shadow' : 'text-gray-700 hover:bg-white'}`}
                onClick={() => setMode('signup')}
              >
                Sign Up
              </button>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-navy mb-1">School Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-primary-green focus:ring-primary-green"
                  placeholder="name@ebenezer.ac.ke"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-secondary-navy mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-primary-green focus:ring-primary-green"
                  placeholder="Your password"
                />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-primary-green px-6 py-3 font-semibold text-white shadow hover:bg-green-700">{mode === 'login' ? 'Login' : 'Create Account'}</button>
              {message && <p className="text-center text-primary-green">{message}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default TeachersPortal;


