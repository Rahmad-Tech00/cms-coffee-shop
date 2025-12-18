/* eslint-disable prettier/prettier */
import {useState} from 'react'
import { CBadge, CSmartTable, CButton, CFormSelect, CDateRangePicker } from '@coreui/react-pro'
import { CIcon } from '@coreui/icons-react'
import { cilArrowTop } from '@coreui/icons' 
import {
  CCol,
  CRow,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
// import CDateRangePicker from '@coreui/react-pro/src/components/date-range-picker/CDateRangePicker'

const Report = () => {
  const [selectedDate, setSelectedDate] = useState('All')

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
      topProduct: 'Matcha'
    },
    {
      date: 'April 29, 2024',
      orders: '53',
      grossSales: 'Rp 1,760,000',
      category: 'Food',
      topProduct: 'Papeda'
    },
    {
      date: 'April 28, 2024',
      orders: '51',
      grossSales: 'Rp 1,735,000',
      category: 'Coffee',
      topProduct: 'Americano'
    },
    {
      date: 'April 27, 2024',
      orders: '65',
      grossSales: 'Rp 2,140,000',
      category: 'Coffee',
      topProduct: 'Americano'
    },
    {
      date: 'April 26, 2024',
      orders: '64',
      grossSales: 'Rp 2,300,000',
      category: 'Coffee',
      topProduct: 'Americano'
    },
    {
      date: 'April 25, 2024',
      orders: '53',
      grossSales: 'Rp 3,760,000',
      category: 'Coffee',
      topProduct: 'Americano'
    },
  ]

  const dates = ['All', ...new Set(reportItem.map((report) => report.date))]

  const filteredDate = reportItem.filter((report) => {
    const date = selectedDate === 'All' || report.date === selectedDate
    return date
  })


  return (
    <>
      <div className="mb-4 d-flex align-items-center">
        <CRow>
          <CCol className="mb-3 mb-sm-0" sm={''}>
            <CDateRangePicker
              label="Date"
              locale="id-ID"
              onStartDateChange={(date) => console.log(date)}
              onEndDateChange={(date) => console.log(date)}
            />
          </CCol>
        </CRow>
        {/* <div style={{ width: '200px' }}>
          <CFormSelect
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {dates.map((date) => (
              <option key={date} value={date}>
                {date === 'All' ? 'All Date' : date}
              </option>
            ))}
          </CFormSelect>
        </div> */}
        <CButton color="primary">
          Filter
        </CButton>
      </div>
      <CRow>
        <CCol sm={3}>
          <CWidgetStatsA
            title="Total Sales"
            className="mb-4"
            color="primary"
            value={
              <>
                Rp 37,250,000{' '}
                <span className="fs-6 fw-normal"></span>
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
                1,580{' '}
                <span className="fs-6 fw-normal"></span>
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
                Rp 29,102{' '}
                <span className="fs-6 fw-normal"></span>
              </>
            }
          />
        </CCol>
      </CRow>
      <CSmartTable
        items={filteredDate}
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
