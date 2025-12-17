import React from 'react'
import { useState } from 'react'
import { CBadge, CButton, CSmartTable, CFormSelect, CFormInput } from '@coreui/react-pro'
import { CIcon } from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const getBadge = (status) => {
  switch (status) {
    case 'Active': {
      return 'success'
    }
    case 'Inactive': {
      return 'secondary'
    }
  }
}

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')

  const items = [
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Latte',
      category: 'Coffee',
      price: '30,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Matcha',
      category: 'Non-Coffee',
      price: '28,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Croissant',
      category: 'Food',
      price: '22,000',
      status: 'Inactive',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
    {
      name: 'Americano',
      category: 'Coffee',
      price: '25,000',
      status: 'Active',
      action: 'Delete',
    },
  ]

  const categories = ['All', ...new Set(items.map((item) => item.category))]

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <div className="mb-3 d-flex gap-3 align-items-center">
        <div style={{ width: '200px' }}>
          <CFormSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </CFormSelect>
        </div>
        <div style={{ flex: 5 }}>
          <CFormInput
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <CButton color="primary">Add Product</CButton>
        </div>
      </div>
      <CSmartTable
        items={filteredItems}
        itemsPerPage={5}
        pagination
        scopedColumns={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          action: (item) => (
            <td>
              <CIcon icon={cilPencil} customClassName={'icon'} style={{ cursor: 'pointer' }} />
              <CIcon icon={cilTrash} customClassName={'icon'} style={{ cursor: 'pointer' }} />
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

export default Product
