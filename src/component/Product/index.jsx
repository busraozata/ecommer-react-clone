import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
const axios = require('axios').default;

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.data);
            setLoading(false);
            console.log(response.data);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" />
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                   {/*  {loading ? <Loading /> : <ShowProduct />} */}
                   test
                </div>
            </div>
        </div>
    )
}

export default Product