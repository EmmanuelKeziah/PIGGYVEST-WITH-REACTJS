import './MeetSaverBlock.css'

const MeetSaverVid = () => {
    return (
        <div className="meetSaverVid">
            <h1>Meet Saver Video</h1>
            <p>
                Watch our video to learn more about how Saver can help you save effectively. Our platform is designed to make saving easy and rewarding.
            </p>
            <video controls>
                <source src="path_to_your_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default MeetSaverVid;