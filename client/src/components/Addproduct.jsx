import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Addproduct() {
    return (
        <div className='d-flex justify-content-center align-items-center p-2 w-100'>
            <Form className='border border-black p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text"  />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file"  />
                </Form.Group>
                

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Addproduct
