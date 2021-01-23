import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./travelSpot.css";
import { DataContext } from '../../App';

const TravelSpot = (props) => {
    const { title, img } = props.plc;
    const [, setShowPlace] = useContext(DataContext);
    const handleSpotClick = () => {
        setShowPlace(props.plc);
    }
    
    return (
          <div className='spot' onClick={handleSpotClick}>
                <img src={img} alt={title} />
                <div className='bottom'>{title}</div>
            </div>
    );
};

export default TravelSpot;