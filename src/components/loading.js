import { BeatLoader } from "react-spinners";
import './loading.css';

const Loading = () => {
    return(
        <div className='loadingContainer'>
            <div className="loadingSpinner">
                <BeatLoader color="rgba(123, 123, 123, 1)" size={25}
                margin={10}
                speedMultiplier={1}/>
            </div>
            <div className="loadingText">Loading...</div>
        </div>
    )
}

export default Loading;