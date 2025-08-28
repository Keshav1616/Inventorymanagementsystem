import React, { useState } from 'react';
import Login from './Components/Login.jsx';
import AdminDashboard from './Components/AdminDashboard.jsx';
import EmployeeDashboard from './Components/EmployeeDashboard.jsx';

// password for employee login is password:- employee123, username:-employee

// password for admin login is password:- admin123, username:-admin

const users = {
  admin: { role: 'admin', password: 'admin123' },
  employee: { role: 'employee', password: 'emp123' },
};

export default function App() {
  const [role, setRole] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', cost: 40000, price: 50000, stock: 10 },
    { id: 2, name: 'Phone', cost: 10000, price: 15000, stock: 20 },
  ]);
  const [bill, setBill] = useState([]);

  const handleLogin = (username, password) => {
    if (users[username]?.password === password) setRole(users[username].role);
    else alert('Invalid credentials!');
  };

  const addProduct = (prod) => {
    if (!prod.name || prod.cost < 0 || prod.price < 0 || prod.stock < 0) {
      alert('Invalid product details!');
      return;
    }
    setProducts([...products, { ...prod, id: products.length + 1 }]);
  };

  const generateBill = (pid, qty) => {
    const p = products.find((x) => x.id === pid);
    if (!p || qty <= 0 || qty > p.stock) {
      alert('Invalid quantity!');
      return;
    }
    setBill([...bill, { name: p.name, qty, total: p.price * qty }]);
  };

  if (!role) return <Login onLogin={handleLogin} />;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Dashboard ({role})</h2>
        <button onClick={() => setRole(null)}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </nav>

      {/* Main */}
      <main className="flex-1 p-6">
        {role === 'admin' ? (
          <AdminDashboard products={products} onAdd={addProduct} />
        ) : (
          <EmployeeDashboard products={products} bill={bill} onBill={generateBill} />
        )}
      </main>
    </div>
  );
}
