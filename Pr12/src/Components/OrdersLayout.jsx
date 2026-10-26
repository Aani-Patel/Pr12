import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
function OrdersLayout() {
  return (
    <div>
      <h1>E-Commerce Order Management</h1>
      <p>Nested Routing with React Router Outlet</p>
      <hr />
      <div>
        <NavLink to="current">Current Orders</NavLink> | {" "}
        <NavLink to="history">Order History</NavLink> | {" "}
        <NavLink to="cancelled">Cancelled Orders</NavLink>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default OrdersLayout;