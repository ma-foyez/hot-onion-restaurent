import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="d-flex justify-content-center">
                <div className="col-md-12 text-center pt-5">
                    <h1>Best Food Waiting For Your Belly</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <div className="search-food mt-5">
                                <input type="text" placeholder="Search Food Items" />
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;