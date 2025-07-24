import Header from "../components/header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layoyt-components/LeftNavbar";
import MainContent from "../components/layoyt-components/MainContent";
import RightNavbar from "../components/layoyt-components/Rightnavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar />
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='left col-span-6'><MainContent></MainContent></section>
                <aside className='left col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;