import React, { useState } from "react";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { uid } from "../utils/helpers";

export default function ItemForm({ onSave, onCancel, existing }) {
  const [item, setItem] = useState(
    existing || {
      id: uid(),
      name: "",
      sku: "",
      qty: 0,
      cost: 0,
      price: 0,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.name.trim()) return alert("Item name is required");
    onSave(item);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-md w-full"
    >
      <h2 className="text-lg font-bold mb-4">
        {existing ? "Edit Item" : "New Item"}
      </h2>

      <div className="grid gap-3">
        <Input
          label="Name"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
        />
        <Input
          label="SKU"
          name="sku"
          value={item.sku}
          onChange={handleChange}
        />
        <Input
          type="number"
          label="Quantity"
          name="qty"
          value={item.qty}
          onChange={handleChange}
        />
        <Input
          type="number"
          step="0.01"
          label="Cost"
          name="cost"
          value={item.cost}
          onChange={handleChange}
        />
        <Input
          type="number"
          step="0.01"
          label="Price"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-3 justify-end mt-6">
        <Button
          type="button"
          variant="destructive"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="success">
          Save
        </Button>
      </div>
    </form>
  );
}
