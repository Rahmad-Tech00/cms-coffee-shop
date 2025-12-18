/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react-pro'
import { CIcon } from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'

const Delete = ({ product = {}, onDelete }) => {
    const [visible, setVisible] = useState(false)

    const handleDelete = (product) => {
        onDelete(product)

    }

    return (
        <>
            <CIcon icon={cilTrash} style={{ cursor: 'pointer' }} onClick={() => setVisible(!visible)}></CIcon>
                <CModal
                    visible={visible}
                    onClose={() => setVisible(false)}
                    // aria-labelledby="LiveDemoExampleLabel"
                >
                    <CModalHeader>
                      <CModalTitle id="LiveDemoExampleLabel">Confirmation</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Are you sure want to delete this data ?</CModalBody>
                    <CModalFooter>
                      <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                      </CButton>
                      <CButton color="danger" onClick={() => handleDelete(product)}>Delete</CButton>
                    </CModalFooter>
                </CModal>
        </>
    )
}

export default Delete