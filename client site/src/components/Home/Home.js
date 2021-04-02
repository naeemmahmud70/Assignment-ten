import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://tranquil-dawn-17124.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center m-2">
                <input id="input-style" type="text" placeholder="search by product name" />
                <button className="btn btn-success">Search</button>
            </div>
            {
                products.length === 0 && <div className="text-center">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden"></span>
                   
                </div>
                <p>...loading</p>
                </div>
            }
            <div className="div-style">
                {
                    products.map(pd => <Products product={pd} key={pd._id}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;