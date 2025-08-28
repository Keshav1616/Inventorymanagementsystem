import React from "react";
import { Button } from "./UI/Button";

export default function InventoryTable({ state, setState }) {
  const deleteItem = (id) => {
    setState({ ...state, items: state.items.filter((i) => i.id !== id) });
  };

  return (
    <div className="rounded-2xl border bg-white p-4 shadow">
      <h2 className="text-xl font-bold mb-4">Inventory</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">SKU</th>
            <th className="text-left p-2">Qty</th>
            <th className="text-left p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.sku}</td>
              <td className="p-2">{item.qty}</td>
              <td className="p-2">${item.price}</td>
              <td className="p-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="mt-4" onClick={() => console.log("add new item")}>
        Add New Item
      </Button>
    </div>
  );
}
