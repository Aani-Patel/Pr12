import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OrdersLayout from './components/OrdersLayout';
import CurrentOrders from './components/CurrentOrders';
import OrderHistory from './components/OrderHistory';
import CancelledOrders from './components/CancelledOrders';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/orders/current" replace />} />
          <Route path="/orders" element={<OrdersLayout />}>
            <Route path="current" element={<CurrentOrders />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="cancelled" element={<CancelledOrders />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;