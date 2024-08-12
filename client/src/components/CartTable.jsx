import React from 'react'
import Table from 'react-bootstrap/Table';
function CartTable() {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img className='cart-image' src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></td>
                        <td>Camera</td>
                        <td>1</td>
                        <td>15000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img className='cart-image' src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></td>
                        <td>Camera</td>
                        <td>1</td>
                        <td>15000</td>
                    </tr>


                </tbody>
            </Table>
            <div className='d-flex'>
                <p className='ms-auto fw-bold'>Total Rs:30000</p>
            </div>

            <div className='d-flex'>
                <button className='ms-auto bg-success p-2 text-white rounded-3'>CHECK OUT</button>
            </div>
        </>
    )
}

export default CartTable
