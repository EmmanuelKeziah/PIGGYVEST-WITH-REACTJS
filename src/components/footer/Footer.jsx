import './Footer.css';
import FooterSection1 from './FooterSection1.jsx';
import FooterSection2 from './FooterSection2.jsx';

const Footer = () => {
    return (
        <div className="footerBlock">
            <FooterSection1 />
            <FooterSection2 />
        </div>
    );
}

export default Footer;