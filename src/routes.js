import React from 'react'
// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// Products
const Product = React.lazy(() => import('./views/products/Product'))
// Security
const User = React.lazy(() => import('./views/security/User'))
const Role = React.lazy(() => import('./views/security/Role'))
// Order
const Order = React.lazy(() => import('./views/orders/Order'))
// Payments
const Payment = React.lazy(() => import('./views/payments/Payments'))
// Reports
const Report = React.lazy(() => import('./views/reports/Report'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/product', name: 'Product', element: Product },
  { path: '/user', name: 'User', element: User },
  { path: '/role', name: 'Role', element: Role },
  { path: '/order', name: 'Order', element: Order },
  { path: '/payment', name: 'Payment', element: Payment },
  { path: '/report', name: 'Report', element: Report },
]

export default routes
