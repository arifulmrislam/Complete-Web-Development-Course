import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                const phoneData = response.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const pricePart = phone.slug.split('-')[1];
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(pricePart) || 0 
                    };
                    return obj;
                });
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
            })
            .catch(error => {
                console.error("Error fetching phones:", error);
            });
    }, []);


    return (
        <div>
            
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;