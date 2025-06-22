import './Extras.css';
import ExtrasStart from './ExtrasStart.jsx';
import ExtrasMiddle from './ExtraMiddle.jsx';
import ExtraEnd from './ExtraEnd.jsx';

const Extras = () => {
    return (
        <div className="extrasBlock">
            <ExtrasStart />
            <ExtrasMiddle />
            <ExtraEnd />
        </div>
    );
}

export default Extras;