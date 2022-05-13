import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/catSlice';

const Products = () => {

    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            console.log(data)
        }

        getProducts()
    }, [])

    const handlerAdd = (product) => {
        dispatch(add(product))
    }

  return (
    <div className="productsWrapper">
        {
            products.map(product => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt=""/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handlerAdd(product)} className="btn">Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products