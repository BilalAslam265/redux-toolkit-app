import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/catSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts())
        // const getProducts = async () => {
        //     const response = await fetch('https://fakestoreapi.com/products')
        //     const data = await response.json()
        //     setProducts(data)
        //     console.log(data)
        // }

        // getProducts()
    }, [])

    const handlerAdd = (product) => {
        dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
        return <h4>Loading...</h4>
    }
    if(status === STATUSES.ERROR){
        return <h4>Something went wrong!</h4>
    }

  return (
    <div className="productsWrapper">
        {
            products.map(product => (
                <div className="card" >
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