import './HeroCard.css';
import HeroCardHeader from './HeroCardHeader';
import HeroCardBody from './HeroCardBody.jsx';

const HeroCard = () => {
    return (
        <div className="heroCard">
            <HeroCardHeader />
            <HeroCardBody />
        </div>
    );
}

export default HeroCard;