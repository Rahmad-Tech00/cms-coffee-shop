import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilCoffee, cilUser, cilCart, cilQrCode, cilWarning } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Products',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/product',
    icon: <CIcon icon={cilCoffee} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Security',
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Role',
    to: '/role',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Orders',
  },
  {
    component: CNavItem,
    name: 'Order',
    to: '/order',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Payments',
  },
  {
    component: CNavItem,
    name: 'Payment',
    to: '/payment',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Reports',
  },
  {
    component: CNavItem,
    name: 'Report',
    to: '/report',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
  },
]

export default _nav
