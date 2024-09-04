import React, { useContext } from 'react'
import './ProductDetails.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../Assets/assets';

const ProductDetails = () => {

    const { selectedProduct, addToCart } = useContext(StoreContext);
    
    if (!selectedProduct) {
        return <div className='no-product'>No product selected.....🫠</div>;
    }    
    
    const { id, name, price, description, image } = selectedProduct;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={image}
                                alt="Product"   
                            />
                        </div>
                        <b>Select Color</b>
                        <div className="select-colors col-md-12">
                        <i className="fa-solid fa-circle clr" />
                        <i className="fa-solid fa-circle clr icon-red" />
                        <i className="fa-solid fa-circle clr icon-blue" />
                        <i className="fa-solid fa-circle clr icon-green" />
                        <i className="fa-solid fa-circle clr icon-yellow" />
                        <i className="fa-solid fa-circle clr icon-pink" />
                        <i className="fa-solid fa-circle clr icon-brown" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>{name}</h1>
                        <img src={assets.rating_starts} alt="" />
                        <p className="text-muted">{''}</p>
                        <h2 className='mt-5'>${price}</h2>
                        <p>
                            <strong>Availability:</strong><span className='in-stock'> In Stock </span>
                        </p>
                        <button className="btn btn-primary mt-2 mb-2" onClick={() => addToCart(id, name)}>Add to Cart</button>
                        <button className="btn btn-success mt-2 mb-2 ml-2" onClick={() => addToCart(id, name)}>Buy Now</button>
                        <div className="card1">
                            <div className="card-header">Product Details</div>
                            <div className="card-body">
                            <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
