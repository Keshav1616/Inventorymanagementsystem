import React, { useState } from "react";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { Card, CardContent } from "./UI/Card";
import { uid } from "../utils/helpers";

export default function SupplierList({ suppliers, setSuppliers }) {
  const [newSupplier, setNewSupplier] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (e) => {
    setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newSupplier.name.trim()) return alert("Supplier name is required");
    const supplier = { ...newSupplier, id: uid() };
    setSuppliers([supplier, ...suppliers]);
    setNewSupplier({ id: "", name: "", contact: "", email: "" });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure to delete this supplier?")) {
      setSuppliers(suppliers.filter((s) => s.id !== id));
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Suppliers</h2>
          <Button onClick={() => setIsAdding(!isAdding)}>
            {isAdding ? "Cancel" : "Add Supplier"}
          </Button>
        </div>

        {isAdding && (
          <div className="mb-6 p-4 border rounded-xl bg-gray-50 dark:bg-gray-700">
            <h3 className="font-semibold mb-2">New Supplier</h3>
            <div className="grid gap-3">
              <Input
                label="Name"
                name="name"
                value={newSupplier.name}
                onChange={handleChange}
              />
              <Input
                label="Contact"
                name="contact"
                value={newSupplier.contact}
                onChange={handleChange}
              />
              <Input
                type="email"
                label="Email"
                name="email"
                value={newSupplier.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <Button variant="success" onClick={handleAdd}>
                Save
              </Button>
            </div>
          </div>
        )}

        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-3 py-2 border text-left">Name</th>
              <th className="px-3 py-2 border text-left">Contact</th>
              <th className="px-3 py-2 border text-left">Email</th>
              <th className="px-3 py-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border px-3 py-2">{s.name}</td>
                <td className="border px-3 py-2">{s.contact}</td>
                <td className="border px-3 py-2">{s.email}</td>
                <td className="border px-3 py-2 text-center">
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {suppliers.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center opacity-60 py-4"
                >
                  No suppliers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
