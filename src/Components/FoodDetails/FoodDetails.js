import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData'

const FoodDetails = () => {

    const { foodID } = useParams();
    const selectedFood = fakeData.find(food => food.id === foodID);
    console.log(selectedFood) // here I face problem
 
    return (
        <div>
            <h2>Food Details of {foodID}</h2>
        </div>
    );
};

export default FoodDetails;