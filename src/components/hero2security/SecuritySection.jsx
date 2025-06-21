import "./HeroSecurityBlock.css";

const SecuritySection = () => {
    return (
        <div className="sideHero">
            <h4>
                Your security is our priority
            </h4>
            <p className="small-p">
                PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.
            </p>
    
            <div className="arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    
                <p>
                    More on our security measures
                </p>
            </div>
        </div>
    );
}

export default SecuritySection;