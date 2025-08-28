import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
        <input type="text" placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          value={user} onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          value={pass} onChange={(e) => setPass(e.target.value)} />
        <button onClick={() => onLogin(user, pass)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
