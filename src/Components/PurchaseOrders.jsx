import React from "react";
import { Button } from "./UI/Button";

export default function PurchaseOrders({ state, setState }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow">
      <h2 className="text-xl font-bold mb-4">Purchase Orders</h2>
      <ul>
        {state.purchaseOrders.map((po) => (
          <li key={po.id} className="flex justify-between border-b py-2">
            <span>{po.code}</span>
            <span>{po.status}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-4" onClick={() => console.log("new PO")}>
        New PO
      </Button>
    </div>
  );
}
