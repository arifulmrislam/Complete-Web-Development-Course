import Header from "../components/header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav/>
            <main/> 
        </div>
    );
};

export default HomeLayout;