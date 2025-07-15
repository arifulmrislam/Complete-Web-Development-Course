import reactLogo from '../assets/react.svg'
export default function Logo() {
    return (
        <div className='flex items-center'>
            <a href='https://react.dev' target='_blank'>
                <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
        </div>
    )
}