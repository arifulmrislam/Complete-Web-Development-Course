import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 guest pass per month",
                "Open gym hours only",
                "Free Wi-Fi access",
                "Access to mobile workout tracking app",
                "Discount on fitness merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room and shower access",
                "Unlimited guest passes",
                "Access to group fitness classes",
                "Extended hours access",
                "Monthly body composition analysis",
                "Free fitness orientation session",
                "10% discount on smoothies and drinks"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 69.99,
            "features": [
                "24/7 access to gym facilities",
                "All Standard Plan features",
                "1 free personal training session per month",
                "Towel and laundry service",
                "1 monthly massage session",
                "Nutrition consultation and meal planning",
                "Unlimited group class bookings",
                "Priority class booking",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 4,
            "name": "Family Plan",
            "price": 99.99,
            "features": [
                "Includes up to 4 family members",
                "All Premium Plan features",
                "Free childcare during workouts",
                "Access to family-friendly group classes",
                "Weekend family yoga and fitness events",
                "1 personal training session per family member (monthly)",
                "Dedicated family locker rooms",
                "Free birthday party rentals (once per year)"
            ]
        },
        {
            "id": 5,
            "name": "Student Plan",
            "price": 24.99,
            "features": [
                "All Basic Plan features",
                "Access during non-peak hours",
                "Valid student ID required",
                "Monthly fitness assessment",
                "Discount on meal preps and snacks",
                "Access to quiet study lounge",
                "Free exam-week stress relief classes",
                "1 free fitness workshop per semester"
            ]
        },
        {
            "id": 6,
            "name": "Special Care Plan",
            "price": 124.99,
            "features": [
                "All Basic Plan features",
                "Access during non-peak hours",
                "Valid student ID required",
                "Monthly fitness assessment",
                "Discount on meal preps and snacks",
                "Access to quiet study lounge",
                "Free exam-week stress relief classes",
                "1 free fitness workshop per semester"
            ]
        }
    ]
    return (
        <div className='m-12'>
            <h2 className="text-5xl">Best Prices in the town.</h2>
            <div className='grid md:grid-cols-3 gap-8'>
            {
                priceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;