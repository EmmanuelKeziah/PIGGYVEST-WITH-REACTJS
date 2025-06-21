import "./HeaderBlock.css"

const HeaderBlock1 = () => {
    return (
        <div className="navLeft">
            <nav><img src="./public/Images/logo.svg" alt="Piggyvest-navLogo" /></nav>
            <nav>Save <img src="./public/Images/arrow-icon.svg" alt="arrow-dropdown" /></nav>
            <nav>Invest</nav>
            <nav>Stories</nav>
            <nav>FAQs</nav>
            <nav>Resources <img src="././public/Images/arrow-icon.svg" alt="arrow-dropdown" /></nav>
        </div>
    );
}

export default HeaderBlock1;