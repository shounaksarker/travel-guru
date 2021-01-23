import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import './Home.css';
import { DataContext } from '../../App';
import TravelPart from '../TravelPart/TravelPart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// const rArrow = <FontAwesomeIcon icon={faAngleRight} />
// const lArrow = <FontAwesomeIcon icon={faAngleLeft} />

const Home = () => {
    const [showPlace , ,] = useContext(DataContext);

    return (
        <div className='bg' style={{backgroundImage: `url(${showPlace.img})`}}>
            <div className='overlay'>
                <div className='containerr'>
                    <Row>
                        <TravelPart></TravelPart>
                    </Row>
                    {/* <Row className='arw'>
                        <button className='l-arrow'>{lArrow}</button>
                        <button className='r-arrow'>{rArrow}</button>
                    </Row> */}
                </div>
            </div>
        </div >
    );
};

export default Home;