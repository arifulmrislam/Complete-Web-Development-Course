export default function SearchBar() {
    return (
        <div className='flex items-center bg-gray-100 rounded-lg shadow-md px-4 py-2 w-5/12 mr-4'>
            <div className='mr-2'>
                <img
                    src='https://img.icons8.com/?size=100&id=59878&format=png&color=000000'
                    alt='Search Icon'
                    className='h-6 w-6'
                />
            </div>

            <input
                type='text'
                placeholder='Search'
                className='flex-1 border-none outline-none bg-transparent text-lg'
            />
        </div>
    );
}
