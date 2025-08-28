export default function AdminDashboard({ products, onAdd }) {
  const [f, setF] = useState({ name: '', cost: 0, price: 0, stock: 0 });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-600">🛒 Shree Keshav Mart</h1>

      <h2 className="text-xl font-semibold mb-2">Product List</h2>
      <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Cost</th>
            <th className="p-2">Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Added At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b text-center">
              <td className="p-2">{p.name}</td>
              <td className="p-2">₹{p.cost}</td>
              <td className="p-2">₹{p.price}</td>
              <td className="p-2">{p.stock}</td>
              <td className="p-2 text-sm text-gray-600">{p.addedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6 mb-2">➕ Add New Product</h2>
      <div className="flex flex-wrap gap-2">
        {['name', 'cost', 'price', 'stock'].map((key) => (
          <input key={key} type={key === 'name' ? 'text' : 'number'}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            className="border p-2 rounded-lg shadow"
            onChange={(e) =>
              setF({
                ...f,
                [key]: key === 'name' ? e.target.value : parseFloat(e.target.value),
              })
            } />
        ))}
        <button onClick={() => onAdd(f)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow">
          Add
        </button>
      </div>
    </div>
  );
}
