

const ErrorPage = () => {
    return (
        <div className='text-black bg-white flex flex-col md:flex-row min-h-screen'>
            <div className='w-full md:w-1/2 p-6 md:p-10 flex-col justify-center'>
                <h2 className='text-4xl md:text-5xl font-bold text-center md:text-left'>
                    Page Not Found
                </h2>
                <p className='text-center md:text-left mt-4'>
                    The Page you requested does not exist.
                </p>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-6 md:p-10m-15'>
                <img src='/temoc-icecream.png'></img>
            </div>
        </div>
    );
};

export default ErrorPage;