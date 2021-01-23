import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Menubar from '../Menubar/Menubar';
import '../Menubar/Menubar.css';
import './detail.css';
import { hotelInfo, spot } from '../../Database';
import Hotel from './Hotel';
import Hotelmap from './Hotelmap';

const Details = () => {
    const { name } = useParams();
    return (
        <div className='containerr'>
            <Menubar filter={0} color='black'></Menubar>
            <Row>
                <Col md={7}>
                    252 stays {Date()}
                    <h1 className='spotName'>Stay in {name}</h1>

                    {
                        hotelInfo.map(info => <Hotel key={info.id} info={info}></Hotel>)
                    }
                </Col>
                <Col md={5}>
                    {
                        spot.map(mapinfo => <Hotelmap key={mapinfo.id} mapinfo={mapinfo}></Hotelmap>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Details;