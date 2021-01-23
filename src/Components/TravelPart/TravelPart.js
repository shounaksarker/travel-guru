import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { DataContext } from '../../App';
import Menubar from '../Menubar/Menubar';
import { spot } from '../../Database'
import TravelSpot from '../TravelSpot/TravelSpot';
import { useHistory } from 'react-router';

const rArw = <FontAwesomeIcon icon={faArrowRight} />

const TravelPart = () => {
    const [showPlace] = useContext(DataContext);
    const history = useHistory();
    function handleClick() {
        history.push("/booking");
      }

    return (
        <div>
            <Menubar filter={10} color='white'></Menubar>

            <Row>
                <Col md={5}>
                    <Card>
                        <Card.Body style={{ padding: "0px" }}>
                            <Card.Title className='card-title'>{showPlace.title}</Card.Title>
                            <Card.Text>
                                {showPlace.description}
                            </Card.Text>
                            <Button onClick={handleClick} className="btn">Booking {rArw}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={7}>
                    {
                        spot.map(plc => <TravelSpot key={plc.id} plc={plc} ></TravelSpot>)

                    }
                </Col>
            </Row>


        </div>

    );
};

export default TravelPart;