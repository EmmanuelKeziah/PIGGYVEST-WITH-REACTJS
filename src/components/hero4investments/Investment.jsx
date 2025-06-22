import './Investments.css'
import InvestmentHeader from './InvestmentHeader';
import InvestmentBody from './InvestmentBody.jsx';

const Investment = () => {
    return (
        <div className="investments">
            <InvestmentHeader />
            <InvestmentBody />
        </div>
    );
}

export default Investment;