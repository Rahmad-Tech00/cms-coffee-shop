/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { CBadge, CSmartTable, CButton } from '@coreui/react-pro'
import { CIcon } from '@coreui/icons-react'
import { cilArrowTop } from '@coreui/icons'
import { CCol, CRow, CWidgetStatsA } from '@coreui/react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'

const Report = () => {
  const [dateRange, setDateRange] = useState([null, null])
  const [filteredData, setFilteredData] = useState([])

  const getOrders = (order) => {
    switch (order) {
      case order: {
        return 'success'
      }
    }
  }

  const reportItem = [
    {
      date: 'April 30, 2024',
      orders: '48',
      grossSales: 'Rp 1,575,000',
      category: 'Non-Coffee',
      topProduct: 'Matcha',
    },
    {
      date: 'April 29, 2024',
      orders: '53',
      grossSales: 'Rp 1,760,000',
      category: 'Food',
      topProduct: 'Papeda',
    },
    {
      date: 'April 28, 2024',
      orders: '51',
      grossSales: 'Rp 1,735,000',
      category: 'Coffee',
      topProduct: 'Americano',
    },
    {
      date: 'April 27, 2024',
      orders: '65',
      grossSales: 'Rp 2,140,000',
      category: 'Coffee',
      topProduct: 'Americano',
    },
    {
      date: 'April 26, 2024',
      orders: '64',
      grossSales: 'Rp 2,300,000',
      category: 'Coffee',
      topProduct: 'Americano',
    },
    {
      date: 'April 25, 2024',
      orders: '53',
      grossSales: 'Rp 3,760,000',
      category: 'Coffee',
      topProduct: 'Americano',
    },
  ]

  const handleFilter = () => {
    if (dateRange[0] && dateRange[1]) {
      const startDate = dateRange[0].toDate()
      const endDate = dateRange[1].toDate()

      console.log('Start Date:', startDate)
      console.log('End Date:', endDate)

      const filtered = reportItem.filter((report) => {
        const reportDate = new Date(report.date)
        return reportDate >= startDate && reportDate <= endDate
      })

      console.log('Filtered Data:', filtered)
      console.log('Total Items Found:', filtered.length)

      setFilteredData(filtered)
    } else {
      console.log('No date range selected, showing all data')
      setFilteredData(reportItem)
    }
  }

  return (
    <>
      <div className="mb-4 d-flex align-items-center">
        <div>
          <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DemoItem component="DateRangePicker">
                <DateRangePicker value={dateRange} onChange={(newValue) => setDateRange(newValue)} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          <CButton color="primary" onClick={handleFilter}>
            Filter
          </CButton>
        </div>
      </div>
      <CRow>
        <CCol sm={3}>
          <CWidgetStatsA
            title="Total Sales"
            className="mb-4"
            color="primary"
            value={
              <>
                Rp 37,250,000 <span className="fs-6 fw-normal"></span>
              </>
            }
          />
        </CCol>
        <CCol sm={3}>
          <CWidgetStatsA
            title="Orders"
            className="mb-4"
            color="info"
            value={
              <>
                1,200{' '}
                <span className="fs-6 fw-normal">
                  (14% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
          />
        </CCol>
        <CCol sm={3}>
          <CWidgetStatsA
            title="Items Sold"
            className="mb-4"
            color="warning"
            value={
              <>
                1,580 <span className="fs-6 fw-normal"></span>
              </>
            }
          />
        </CCol>
        <CCol sm={3}>
          <CWidgetStatsA
            title="Average Sale"
            className="mb-4"
            color="danger"
            value={
              <>
                Rp 29,102 <span className="fs-6 fw-normal"></span>
              </>
            }
          />
        </CCol>
      </CRow>
      <CSmartTable
        items={filteredData.length > 0 ? filteredData : reportItem}
        itemsPerPage={5}
        pagination
        scopedColumns={{
          orders: (item) => (
            <td>
              <CBadge color={getOrders(item.orders)}>{item.orders}</CBadge>
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

export default Report
