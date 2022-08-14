import React from 'react'
import Product from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to Bilal's Redux store</h2>
      <section>
        <Product />
      </section>
    </div>
  )
}

export default Home