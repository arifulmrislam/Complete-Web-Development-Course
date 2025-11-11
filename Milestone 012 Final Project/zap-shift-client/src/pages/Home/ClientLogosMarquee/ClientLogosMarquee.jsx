import Marquee from "react-fast-marquee";

import company1 from "../../../assets/brands/amazon.png";
import company2 from "../../../assets/brands/amazon_vector.png";
import company3 from "../../../assets/brands/casio.png";
import company4 from "../../../assets/brands/moonstar.png";
import company5 from "../../../assets/brands/randstad.png";
import company6 from "../../../assets/brands/start-people 1.png";
import company7 from "../../../assets/brands/start.png";

const logos = [company1, company2, company3, company4, company5, company6, company7];

const ClientLogosMarquee = () => {
    return (
        <section className="py-16 bg-base-200">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary">Trusted by Leading Brands</h2>
                <Marquee
                    pauseOnHover={true}
                    speed={40}
                    gradient={false}
                    className="overflow-hidden"
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-8 flex items-center justify-center p-4 rounded-xl hover:shadow-md transition-shadow duration-300"
                        >
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="h-5 w-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default ClientLogosMarquee;
