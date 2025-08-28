import React, { useState } from "react";
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './Components/Dashboard.jsx';
import InventoryTable from './Components/InventoryTable.jsx';
import PurchaseOrders from './Components/PurchaseOrders.jsx';
import CommandPalette from './Components/CommandPallete.jsx';
import Toasts from './Components/Toasts.jsx';
import usePersistedState from './Hooks/usePersistedState.js';
import seed from './utils/seedData.js';
import { uid } from './utils/helpers.js';

export default function App() {
  const [state, setState] = usePersistedState(seed);
  const [tab, setTab] = useState("dashboard");
  const [toasts, setToasts] = useState([]);
  const [commandOpen, setCommandOpen] = useState(false);

  const pushToast = (msg, variant = "default") => {
    setToasts((arr) => [...arr, { id: uid(), message: msg, variant }]);
  };

  const addItem = () => {
    const item = {
      id: uid(),
      name: "New Item",
      sku: "SKU-" + Math.floor(Math.random() * 999),
      qty: 0,
      cost: 1,
      price: 2,
    };
    setState({ ...state, items: [item, ...state.items] });
    pushToast("Item created ✅", "success");
  };

  const addPO = () => {
    const po = {
      id: uid(),
      code: "PO-" + Math.floor(1000 + Math.random() * 9000),
      status: "Draft",
    };
    setState({ ...state, purchaseOrders: [po, ...state.purchaseOrders] });
    pushToast("New Purchase Order created 📦", "success");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar tab={tab} setTab={setTab} />
      <div className="flex-1 flex flex-col">
        <Navbar setCommandOpen={setCommandOpen} />
        <main className="p-6 overflow-auto">
          {tab === "dashboard" && <Dashboard state={state} />}
          {tab === "inventory" && (
            <InventoryTable state={state} setState={setState} />
          )}
          {tab === "purchases" && (
            <PurchaseOrders state={state} setState={setState} />
          )}
        </main>
      </div>
      <CommandPalette
        open={commandOpen}
        setOpen={setCommandOpen}
        actions={[
          { id: "new-item", label: "➕ New Item", run: addItem },
          { id: "new-po", label: "📦 New Purchase Order", run: addPO },
        ]}
      />
      <Toasts
        toasts={toasts}
        remove={(id) => setToasts((t) => t.filter((x) => x.id !== id))}
      />
    </div>
  );
}
