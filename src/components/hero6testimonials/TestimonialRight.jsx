import './TestimonialBlock.css';

const TestimonialRight = () => {
    return (
        <div className="testimonialRight">
            <h3>
                Join 5+ million people who save and invest with us
            </h3>

            <div className="buttonDiv">
                <button className='light'>
                    <img src="/images/apple.png" alt="appleicon" />Get on iPhone
                </button>

                <button className='light'>
                    <img src="/images/googleplaystore.svg" alt="apple-icon" />Get on Android
                </button>
            </div>
        </div>
    );
}

export default TestimonialRight;