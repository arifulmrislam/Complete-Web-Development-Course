// src/pages/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div
            className="
        card 
        bg-base-100 
        border border-gray-100 
        shadow-md 
        hover:shadow-xl 
        transition-all 
        duration-300 
        hover:bg-primary/10 
        hover:-translate-y-1
    "
        >
            <div className="card-body items-center text-center p-6">
                <div className="text-4xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary">
                    <Icon />
                </div>
                <h3 className="card-title text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
