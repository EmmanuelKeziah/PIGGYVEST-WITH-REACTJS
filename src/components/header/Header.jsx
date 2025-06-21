import './Header.css';
import HeaderBlock1 from './HeaderBlock1.jsx';
import HeaderBlock2 from './HeaderBlock2.jsx';

const Header = () => {
    return (
        <header className="header">
            <HeaderBlock1 />
            <HeaderBlock2 />
        </header>
    );
}

export default Header;