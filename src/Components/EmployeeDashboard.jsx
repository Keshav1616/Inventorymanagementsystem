import React, { useState } from 'react';

export default function EmployeeDashboard({ products, bill, onBill }) {
  const [sel, setSel] = useState('');
  const [qty, setQty] = useState(1);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <div className="flex gap-2 mb-4">
        <select className="border p-2 rounded" value={sel} onChange={(e) => setSel(e.target.value)}>
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>{p.name} (₹{p.price})</option>
          ))}
        </select>
        <input type="number" min="1" className="border p-2 rounded" value={qty}
          onChange={(e) => setQty(parseInt(e.target.value))} />
        <button onClick={() => onBill(parseInt(sel), qty)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add to Bill
        </button>
      </div>
      <h2 className="text-xl font-bold mb-2">Bill</h2>
      <ul className="bg-white p-4 rounded shadow">
        {bill.map((b, i) => (
          <li key={i} className="border-b py-2">{b.name} x {b.qty} = ₹{b.total}</li>
        ))}
      </ul>
    </div>
  );
}
