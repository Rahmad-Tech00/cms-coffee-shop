/* eslint-disable prettier/prettier */
import React from 'react'
import { useState } from 'react'
import { CBadge, CSmartTable, CFormSelect, CFormInput } from '@coreui/react-pro'
import { Add_EditProduct } from '../../components'
import { Delete } from '../../components'

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

  const handleSaveProduct = (productData) => {
    console.log('Product data parent:', productData)
  }

  const handleEditProduct = (productData) => {
    console.log('Edit data', productData)
  }

  const handleDelete = (data) => {
    console.log('Delete data', data)
  }

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
      price: '299,000',
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
        <div style={{ flex: 1 }}>
          <CFormInput
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Add_EditProduct modal="Add Product" onSave={handleSaveProduct} />
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
              <div className='d-flex gap-2'>
                <Add_EditProduct product={item} onSave={handleEditProduct} />
                <Delete product={item} onDelete={handleDelete} />
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

export default Product
