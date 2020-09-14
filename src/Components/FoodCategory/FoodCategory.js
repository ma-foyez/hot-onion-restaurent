import React from 'react';
import './FoodCategory.css'
import { Link } from 'react-router-dom';

const FoodCategory = (props) => {
    // console.log(props.foods)
    const { images, name, shortDescription, price, id } = props.foods;
    return (
        <div className="col-md-3 food-body p-3">
            <Link to={"/type/"+id} className="text-decoration-none">
                <img src={images} alt="" className="img-fluid w-75" /> <br /> <br />
                <h5>{name}</h5>
                <small>{shortDescription}</small>
                <h6>$ {price}</h6>
            </Link>
        </div>
    );
};

export default FoodCategory;