import Banner from '../Banner/Banner';
import BeMerchant from '../BeMerchant/BeMerchant';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import KeyFeatures from '../KeyFeatures/KeyFeatures';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogosMarquee></ClientLogosMarquee>
            <KeyFeatures></KeyFeatures>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;