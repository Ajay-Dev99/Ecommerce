import React from 'react'
import Header from '../components/Header'
import Productcard from '../components/Productcard'

function HomePage() {
  return (
    <div>
      <Header />
      <div className='row mt-3 px-2 px-lg-5'>
        <div className='col-12 col-md-6 col-lg-3 mb-4'>
          <Productcard />
        </div>
       
      </div>
    </div>
  )
}

export default HomePage
