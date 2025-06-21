import './Footer.css';

const Footer = () => {
    return (
        <div className="footerBlock">
        <h2>Footer</h2>
        <p>© 2023 PiggyVest. All rights reserved.</p>
        <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        </div>
    );
}

export default Footer;