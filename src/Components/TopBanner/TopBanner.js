import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <>
            <section className="top-banner d-flex align-items-center text-center">
                <div className="container">
                    <h1>Best Food Waiting  for your Belly</h1>
                    <div className="search-box col-md-6 my-5 mx-auto">
                        <input id="" type="text" className="form-control" placeholder="Search Food Item..." />
                        <button className="btn search-food">Search</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopBanner;