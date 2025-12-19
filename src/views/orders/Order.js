/* eslint-disable prettier/prettier */
import React from 'react'
import { useState } from 'react'
import { CBadge, CSmartTable, CFormSelect, CFormInput, CButton } from '@coreui/react-pro'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'

const getStatus = (status) => {
  switch (status) {
    case 'Paid': {
      return 'success'
    }
    case 'In Prosess': {
      return 'info'
    }
    case 'Canceled': {
      return 'danger'
    }
  }
}

const Order = () => {
  const [dateRange, setDateRange] = useState([null, null])
  const [filteredData, setFilteredData] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedPayment, setSelectedPayment] = useState('All')
  const [search, setSearch] = useState('')

  const handleViewOrder = (orderData) => {
    console.log('Order data parent:', orderData)
  }

  const orderItems = [
    {
      orderNo: 'ORD-001',
      date: '26/04',
      cashier: 'Andi',
      total: 'Rp 60,500',
      payment: 'Cash',
      status: 'Paid',
      action: '',
    },
    {
      orderNo: 'ORD-002',
      date: '27/04',
      cashier: 'Budi',
      total: 'Rp 32,500',
      payment: 'Qris',
      status: 'Paid',
      action: '',
    },
    {
      orderNo: 'ORD-003',
      date: '28/04',
      cashier: 'Dewi',
      total: 'Rp 25,500',
      payment: 'Cash',
      status: 'Canceled',
      action: '',
    },
    {
      orderNo: 'ORD-004',
      date: '29/04',
      cashier: 'Sari',
      total: 'Rp 55,000',
      payment: 'Cash',
      status: 'In Prosess',
      action: '',
    },
    {
      orderNo: 'ORD-005',
      date: '30/04',
      cashier: 'Andi',
      total: 'Rp 65,500',
      payment: 'Qris',
      status: 'Canceled',
      action: '',
    },
    {
      orderNo: 'ORD-006',
      date: '26/04',
      cashier: 'Budi',
      total: 'Rp 60,500',
      payment: 'Cash',
      status: 'Paid',
      action: '',
    },
    {
      orderNo: 'ORD-007',
      date: '28/04',
      cashier: 'Jokowi',
      total: 'Rp 60,500',
      payment: 'Qris',
      status: 'In Prosess',
      action: '',
    },
  ]

  const handleFilter = () => {
    if (dateRange[0] && dateRange[1]) {
      const startDate = dateRange[0].toDate()
      const endDate = dateRange[1].toDate()

      console.log('Start Date:', startDate)
      console.log('End Date:', endDate)

      const filtered = orderItems.filter((report) => {
        const reportDate = new Date(report.date)
        return reportDate >= startDate && reportDate <= endDate
      })

      console.log('Filtered Data:', filtered)
      console.log('Total Items Found:', filtered.length)

      setFilteredData(filtered)
    } else {
      console.log('No date range selected, showing all data')
      setFilteredData(orderItems)
    }
  }

  const statusAll = ['All', ...new Set(orderItems.map((order) => order.status))]
  const paymentAll = ['All', ...new Set(orderItems.map((order) => order.payment))]

  const filterItemOrder = orderItems.filter((order) => {
    const matchesStatus = selectedStatus === 'All' || order.status === selectedStatus
    const matchesPayment = selectedPayment === 'All' || order.payment === selectedPayment
    const matchesSearch = order.orderNo.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    return matchesStatus && matchesPayment && matchesSearch
  })

  return (
    <>
      <div className="mb-3 d-flex gap-3 align-items-center">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DemoItem component="DateRangePicker">
                <DateRangePicker value={dateRange} onChange={(newValue) => setDateRange(newValue)} />
              </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
        </div>
        <div style={{ width: '200px' }}>
          <CFormSelect value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            {statusAll.map((s) => (
              <option key={s} value={s}>
                {s === 'All' ? 'All Statuses' : s}
              </option>
            ))}
          </CFormSelect>
        </div>
        <div style={{ width: '200px' }}>
          <CFormSelect value={selectedPayment} onChange={(e) => setSelectedPayment(e.target.value)}>
            {paymentAll.map((p) => (
              <option key={p} value={p}>
                {p === 'All' ? 'All Payments' : p}
              </option>
            ))}
          </CFormSelect>
        </div>
        <div style={{ flex: 1 }}>
          <CFormInput
            type="text"
            placeholder="Search order..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <CButton color="primary" onClick={handleFilter}>
            Filter
          </CButton>
        </div>
      </div>
      <CSmartTable
        items={filteredData.length > 0 ? filteredData : orderItems}
        itemsPerPage={5}
        pagination
        scopedColumns={{
          status: (item) => (
            <td>
              <CBadge color={getStatus(item.status)}>{item.status}</CBadge>
            </td>
          ),
          action: (item) => (
            <td>
              <div className="d-flex gap-2">
                <CButton color="info" variant="outline">
                  View
                </CButton>
              </div>
            </td>
          ),
        }}
        tableBodyProps={{
          className: 'align-middle',
        }}
      />
    </>
  )
}

export default Order
