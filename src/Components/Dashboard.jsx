import React from "react";
import { Card } from "./UI/Card";

export default function Dashboard({ state }) {
  const inventoryValue = state.items.reduce((sum, i) => sum + i.qty * i.cost, 0);

  return (
    <div className="grid grid-cols-3 gap-6">
      <Card>
        <h2 className="text-lg font-bold">Total Items</h2>
        <p className="text-2xl">{state.items.length}</p>
      </Card>
      <Card>
        <h2 className="text-lg font-bold">Suppliers</h2>
        <p className="text-2xl">{state.suppliers.length}</p>
      </Card>
      <Card>
        <h2 className="text-lg font-bold">Inventory Value</h2>
        <p className="text-2xl">${inventoryValue.toFixed(2)}</p>
      </Card>
    </div>
  );
}
