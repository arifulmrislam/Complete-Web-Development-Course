import React from "react";

// Replace these with your own Freepik image paths
import trackingImg from "../../../assets/live-tracking.png";
import safeDeliveryImg from "../../../assets/safe-delivery.png";
import callCenterImg from "../../../assets/callCenter.png";


const features = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        description:
            "Track your parcel in real time with our smart delivery tracking system that keeps you updated at every step.",
        image: trackingImg,
    },
    {
        id: 2,
        title: "100% Safe Delivery",
        description:
            "We ensure your packages are handled with care and delivered safely to their destination.",
        image: safeDeliveryImg,
    },
    {
        id: 3,
        title: "24/7 Call Center Support",
        description:
            "Our support team is available around the clock to assist you with any delivery-related inquiries.",
        image: callCenterImg,
    },
];

const KeyFeatures = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-10">
                    Why Choose Us
                </h2>

                <div className="flex flex-col gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex items-center bg-base-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
                        >
                            {/* Left Image */}
                            <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Vertical hyphen divider */}
                            <div className="mx-8 text-primary font-bold text-lg leading-none flex flex-col justify-center items-center">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <span key={i}>|</span>
                                ))}
                            </div>

                            {/* Text content */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-primary">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 max-w-md">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;