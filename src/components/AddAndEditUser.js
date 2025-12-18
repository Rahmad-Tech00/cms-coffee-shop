/* eslint-disable prettier/prettier */
import { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CInputGroup,
  CFormInput,
  CFormSelect,
  CInputGroupText,
  CFormSwitch,
  CForm,
  CFormLabel,
} from '@coreui/react-pro'
import { CIcon } from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import PropTypes from 'prop-types'


const AddAndEditUser = ({ user = {}, onSave, modal = 'edit' }) => {
    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    const [formData, setFormData] = useState({
    userName: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
    status: user?.status === 'Active',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    const userData = {
      ...formData,
      role: formData.role ? 'Admin' : 'Cashier',
      status: formData.status ? 'Active' : 'Inactive',
    }

    onSave(userData)
    setVisible(false)
    setValidated(false)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <>
      {modal === 'Add User' ? (
        <CButton color="primary" onClick={() => setVisible(true)}>
          + Add User
        </CButton>
      ) : (
        <CIcon 
          icon={cilPencil}
          size='lg'
          style={{ cursor: 'pointer' }}
          onClick={() => setVisible(true)} 
        />
      )}
      <CModal
        visible={visible}
        onClose={() => {
          setVisible(false)
          setValidated(false)
        }}
      >
        <CModalHeader>
          <CModalTitle id="EditUserModal">
            {modal === 'Add User' ? 'Add User' : 'Edit User'}
          </CModalTitle>
        </CModalHeader>
        <CForm noValidate validated={validated} onSubmit={handleSubmit}>
          <CModalBody>
            <div className='mb-3'>
              <CFormLabel htmlFor="productName">User Name</CFormLabel>
              <CFormInput
                type="text"
                id="userName"
                placeholder="Enter user name"
                value={formData.userName}
                onChange={(e) => handleInputChange('userName', e.target.value)}
                required
                feedbackInvalid="User name is required."
              />
            </div>
            <div className='mb-3'>
              <CFormLabel htmlFor="productName">Email</CFormLabel>
              <CFormInput
                type="text"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                feedbackInvalid="User name is required."
              />
            </div>
            <div className='mb-3'>
              <CFormLabel htmlFor="category">Role</CFormLabel>
              <CFormSelect
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="Cashier">Cashier</option>
              </CFormSelect>
            </div>
            
            <div className='mb-3'>
              <CFormLabel htmlFor="status">Status</CFormLabel>
              <div className="d-flex align-items-center">
                <CFormSwitch
                  id="status"
                  checked={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.checked)}
                  label={formData.status ? 'Active' : 'Inactive'}
                />
              </div>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => {
              setVisible(false)
              setValidated(false)
            }}>
              Cancel
            </CButton>
            <CButton color="primary" type="submit">
              {modal === 'Add User' ? 'Save User' : 'Update'}
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  )
}

AddAndEditUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    status: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['Add User', 'edit']),
}


export default AddAndEditUser