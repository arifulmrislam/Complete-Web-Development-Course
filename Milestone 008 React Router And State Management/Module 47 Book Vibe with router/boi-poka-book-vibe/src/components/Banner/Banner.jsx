import bannerImg from '../../assets/cover_img.jpg';
const Banner = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div
                className='flex-2 bg-cover bg-center rounded-sm'
                style={{ backgroundImage: `url(${bannerImg})` }}
            ></div>

            <div className='flex-1 bg-base-200 flex items-center justify-center'>
                <div className='max-w-lg text-center'>
                    <h1 className='text-5xl font-bold uppercase'>Welcome</h1>
                    <p className='py-6 text-xl'>
                        Bangladesh's First Study Café — a cozy space to study, work, read,
                        relax with friends, and enjoy great food
                    </p>
                    {/* <button className='btn btn-primary'>Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;