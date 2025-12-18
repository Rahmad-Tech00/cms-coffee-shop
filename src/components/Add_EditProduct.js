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

const AddAndEdit = ({ product = {}, onSave, modal = 'edit' }) => {
  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    productName: product?.name || '',
    category: product?.category || '',
    price: product?.price?.replace(/,/g, '') || '',
    status: product?.status === 'Active',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    const productData = {
      ...formData,
      status: formData.status ? 'Active' : 'Inactive',
    }

    onSave(productData)
    setVisible(false)
    setValidated(false)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, '')
    handleInputChange('price', value)
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      {modal === 'Add Product' ? (
        <CButton color="primary" onClick={() => setVisible(true)}>
          + Add Product
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
          <CModalTitle id="EditProductModal">
            {modal === 'Add Product' ? 'Add Product' : 'Edit Product'}
          </CModalTitle>
        </CModalHeader>
        <CForm noValidate validated={validated} onSubmit={handleSubmit}>
          <CModalBody>
            <div className='mb-3'>
              <CFormLabel htmlFor="productName">Product Name</CFormLabel>
              <CFormInput
                type="text"
                id="productName"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={(e) => handleInputChange('productName', e.target.value)}
                required
                feedbackInvalid="Product name is required."
              />
            </div>
            <div className='mb-3'>
              <CFormLabel htmlFor="category">Category</CFormLabel>
              <CFormSelect
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option value="">Select category</option>
                <option value="Coffee">Coffee</option>
                <option value="Non-Coffee">Non-Coffee</option>
                <option value="Food">Food</option>
              </CFormSelect>
            </div>
            <div className='mb-3'>
              <CFormLabel htmlFor="price">Price</CFormLabel>
              <CInputGroup>
                <CInputGroupText>Rp</CInputGroupText>
                <CFormInput
                  type="text"
                  id="price"
                  placeholder="Enter price"
                  value={formatPrice(formData.price)}
                  onChange={handlePriceChange}
                  required
                  feedbackInvalid="Price is required."
                />
              </CInputGroup>
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
              {modal === 'Add Product' ? 'Save Product' : 'Update'}
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  )
}

AddAndEdit.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    status: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['Add Product', 'edit']),
}

export default AddAndEdit
