import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';

function Header() {
    return (
        <>
            <nav className='flex header-absolute justify-between items-center p-5 sm:p-14'>
                <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
                <div className='flex space-x-4'>
                    <Link to="/login" className='text-white' title="Login">
                        <FaSignInAlt size={24} />
                    </Link>
                    <Link to="/contact" className='text-white hidden sm:inline' title="Contact">
                        <FaPhoneAlt size={24} />
                    </Link>
                    <Link to="/help" className='text-white hidden sm:inline' title="Help">
                        <FaQuestionCircle size={24} />
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Header;
