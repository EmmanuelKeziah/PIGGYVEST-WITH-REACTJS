import './MiniHero.css';
import PadlockDiv from './PadlockDiv.jsx';
import SecuritySection from './SecuritySection.jsx';


const MiniHero = () => {
    return (
        <div className="miniHero">
            <PadlockDiv />
            <SecuritySection />
        </div>
    );
}

export default MiniHero;