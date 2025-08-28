// utils/helpers.js

// generate unique IDs (quick + random)
export function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// format numbers as currency
export function formatCurrency(value, currency = "INR") {
  if (isNaN(value)) return "₹0.00";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}

// format a date nicely
export function formatDate(date) {
  if (!date) return "-";
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// clamp value between min and max
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
