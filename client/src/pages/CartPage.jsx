import React from 'react'
import CartTable from '../components/CartTable'
import Header from '../components/Header'

function CartPage() {
    return (
        <div>
            <Header />
            <div className='container mt-3'>

                <CartTable />
            </div>
        </div>
    )
}

export default CartPage
