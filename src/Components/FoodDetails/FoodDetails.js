import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../FakeData';
import './FoodDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const FoodDetails = (props) => {

    const { foodID } = useParams();
    const selectedFood = fakeData.find(food => food.id.toString() === foodID);
    // handle add product
    const addProduct = props.addProduct;
    const setAddProduct = props.setAddProduct;

    // handle add product
    const handleAddProduct = (selectedFood) => {
        const newCart = [...addProduct, selectedFood];
        setAddProduct(newCart)
    }

    // handle remove product
    const handleRemoveProduct = (selectedFood) => {
        const newProduct = addProduct.filter(pd => pd.id !== selectedFood.id);
        setAddProduct(newProduct);
    }
    console.log(addProduct)
    // price handler 
    let price = 0;
    for (let i = 0; i < addProduct.length; i++) {
        const product = addProduct[i];
        price = (price + product.price);
    }
    const history = useHistory();
    const handleBooking = ()=> {
        history.push('/shipment/')
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h3 className="food-name pb-3">
                            {selectedFood.name}
                        </h3>
                        <p className="food-details">
                            {selectedFood.fullDescription}
                        </p>
                        <div className="price-with-food-amount d-flex">
                            <h3 className="price">
                                $  {(price).toFixed(2)}
                            </h3>
                            <div className="food-amount">
                                <button onClick={() => handleRemoveProduct(selectedFood)} className="float-left mr-3"> - </button>
                                <span>{addProduct.length}</span>
                                {/* <span>{!addProduct.length ? addProduct.length = 1 : addProduct.length}</span> */}
                                <button onClick={() => handleAddProduct(selectedFood)} foodName={selectedFood.name} className="float-right ml-3"> + </button>
                            </div>
                        </div>
                       {
                           addProduct.length ?  <button onClick={handleBooking} className="add-product mt-4"> <FontAwesomeIcon icon={faShoppingCart} /> Add </button> :  <button onClick={handleBooking} disabled className="disable mt-4"> <FontAwesomeIcon icon={faShoppingCart} /> Add </button>
                       }
                    </div>
                    <div className="col-md-6">
                        <img src={selectedFood.images} className="img-fluid w-75 ml-3" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;