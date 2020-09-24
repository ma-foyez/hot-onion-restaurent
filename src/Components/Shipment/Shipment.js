import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './Shipment.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData';

const Shipment = (props) => {
    // const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { ID } = useParams()
    // const food = fakeData.find(food => food.id.toString() === ID);
    // console.log(food)
    const addProduct = props.addProduct;
    const setAddProduct = props.setAddProduct;
    console.log(addProduct)

    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-5">
                        <div className="form">
                            <h4>Edit Delivary Details </h4> <hr />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" name="name" placeholder="Delivar to door" disabled ref={register({ required: true })} />
                                <input type="text" name="address" placeholder="address" ref={register({ required: true })} />
                                <span className="error"> {errors.address && "Address is required"}</span>
                                <input type="text" name="subAddress" placeholder="Flat, suit or floor" ref={register({ required: true })} />
                                <span className="error">  {errors.subAddress && "Sub address is required"}</span>
                                <input type="text" name="BusinessName" placeholder="Business Name" ref={register({ required: true })} />
                                <span className="error"> {errors.BusinessName && "Business name is required"}</span>
                                <input type="text" name="instructor" placeholder="Add delivary instructor" ref={register({ required: true })} />
                                <span className="error"> {errors.instructor && "Delivary instructor is required"}</span>
                                <input className="submit-btn" type="submit" value="Save & Continue" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="food">
                            {
                                addProduct.map(fd =>
                                    <>
                                        <div className="row foods ml-2 mr-2 mb-3 d-flex align-items-center">
                                            <div className="col-5">
                                                <img src={fd.images[1]} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-7 text-center">
                                                <h5>{fd.name}</h5>
                                                <h6>${fd.price}</h6>
                                                <p>Delivery free</p>
                                                <div className="text-right">
                                                    <button>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                       
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shipment;