import Form from 'react-bootstrap/Form'
import React from 'react'

const Myinput = ( { onChange }) => {
  const handleNameChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div >
      <Form>
        <Form.Group>
          <Form.Label>валюта</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter name"
            onChange={handleNameChange}
          />
        </Form.Group>
      </Form>
    </div>
  )
};
export default Myinput;