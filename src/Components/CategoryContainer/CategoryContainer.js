import React, { createContext, useState, useContext, useEffect } from 'react';
import { FoodContext } from '../../App';
import './CategoryContainer.css';
import fakeData from '../../FakeData'
import FoodCategory from '../FoodCategory/FoodCategory';
import { Link } from 'react-router-dom';

const CategoryContainer = () => {
    const [foodCategory, setFoodCategory] = useState('Lunch')
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const foodData = fakeData.filter(food => food.type === foodCategory);
        setFoods(foodData)
    }, [foodCategory])
    return (
        <>
            <div className="container category text-center mt-5">
                <button onClick={() => setFoodCategory('Breakfast')}>Breakfast</button>
                <button onClick={() => setFoodCategory('Lunch')}>Lunch</button>
                <button onClick={() => setFoodCategory('Dinner')}>Dinner</button>
            </div>
            <div className="container text-center">
                <div className="row mt-5 d-flex justify-content-center">
                    {
                        foods.map(fd => <FoodCategory foods={fd}></FoodCategory>)
                    }
                </div>
                <div className="text-center mt-4">
                    <button disabled className="checkout-btn">Check Out Your Food</button>
                </div>
            </div>
        </>
    );
};

export default CategoryContainer;