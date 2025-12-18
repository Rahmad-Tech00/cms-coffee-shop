/* eslint-disable prettier/prettier */
import {useState} from 'react'
import { CBadge, CSmartTable, CFormSelect, CFormInput } from '@coreui/react-pro'
import { AddAndEditUser } from '../../components'


const getStatus = (status) => {
  switch (status) {
    case 'Active': {
      return 'success'
    }
    case 'Inactive': {
      return 'secondary'
    }
  }
}

const getRole = (role) => {
  switch (role) {
    case 'Admin': {
      return 'success'
    }
    case 'Cashier': {
      return 'secondary'
    }
  }
}


const User = () => {
  const [selectedRole, setSelectedRole] = useState('All')
  const [search, setSearch] = useState('')

  const handleSaveUser = (userData) => {
    console.log('User add data parent:', userData)
  }

  const handleEditUser = (userData) => {
    console.log('User edit data parent:', userData)
  }

  const userItem = [
  {
    name: 'Andi',
    email: 'andi@email.com',
    role: 'Admin',
    status: 'Active',
    action: 'Delete',
  },
  {
    name: 'Budi',
    email: 'budi@email.com',
    role: 'Cashier',
    status: 'Active',
    action: 'Delete',
  },
  {
    name: 'Sari',
    email: 'sari@email.com',
    role: 'Cashier',
    status: 'Active',
    action: 'Delete',
  },
  {
    name: 'Dewi',
    email: 'dewi@email.com',
    role: 'Cashier',
    status: 'Inactive',
    action: 'Delete',
  },
  {
    name: 'Jokowi',
    email: 'jokowi@email.com',
    role: 'Cashier',
    status: 'Inactive',
    action: 'Delete',
  },
  {
    name: 'Prabowo',
    email: 'prabowo@email.com',
    role: 'Admin',
    status: 'Active',
    action: 'Delete',
  },
]

  const roles = ['All', ...new Set(userItem.map((user) => user.role))]

  const filteredRole = userItem.filter((user) => {
    const matchesRole = selectedRole === 'All' || user.role === selectedRole
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase())
    return matchesRole && matchesSearch
  })

  return (
    <>
      <div className="mb-3 d-flex gap-3 align-items-center">
        <div style={{ width: '200px' }}>
          <CFormSelect
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            {roles.map((rol) => (
              <option key={rol} value={rol}>
                {rol === 'All' ? 'All Roles' : rol}
              </option>
            ))}
          </CFormSelect>
        </div>
        <div style={{ flex: 1 }}>
          <CFormInput
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <AddAndEditUser modal="Add User" onSave={handleSaveUser} />
        </div>
      </div>
      <CSmartTable
        items={filteredRole}
        itemsPerPage={5}
        pagination
        scopedColumns={{
          role: (item) => (
            <td>
              <CBadge color={getRole(item.role)}>{item.role}</CBadge>
            </td>
          ),
          status: (item) => (
            <td>
              <CBadge color={getStatus(item.status)}>{item.status}</CBadge>
            </td>
          ),
          action: (item) => (
            <td>
              <div className='d-flex gap-2'>
                <AddAndEditUser user={item} onSave={handleEditUser} />
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

export default User
