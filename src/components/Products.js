import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/catSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("")
    
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {dispatch(fetchProducts())}, [])

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
        <>
        <div style={{display: 'flex'}}>
            <h3>Products</h3>
            <input className="search-input" type="text" placeholder="Search Product" onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <div className="productsWrapper">
            {(
                products
                .filter(product => product.title.toLowerCase().includes(query)))
                .map(product => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt=""/>
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                        <button onClick={() => handlerAdd(product)} className="btn">Add to Cart</button>
                    </div>
                )
            )}
        </div>
        </>
    )
}

export default Products