import React from 'react';
import location from '../../../assets/location-merchant.png';

const BeMerchant = () => {
    return (
        <div data-aos="zoom-in-up" className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373d] p-20 rounded-4xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location}
                    className="max-w-s rounded-lg shadow-8xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary ">Become A Merchant</button>
                    <button className="btn btn-primary ml-4 btn-outline">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;