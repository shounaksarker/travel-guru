// import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { DataContext } from '../../App';
import "../Menubar/Menubar.css";
import '../Home/Home.css';
import './boking.css'
import Menubar from '../../Components/Menubar/Menubar';
import DatePickerr from './DatePickerr';
import { useHistory } from 'react-router';

const Booking = () => {
    const [showPlace] = useContext(DataContext);
    const history = useHistory();

    const bookingSubmit = (e) => {
        e.preventDefault();
        history.push(`/spot/${showPlace.title}`)
    }
const handlePlace = () =>{
    console.log('change')
}

    return (
        <div className='bg' style={{ backgroundImage: `url(${showPlace.img})` }}>
            <div className='overlay'>
                <div className='containerr'>
                    <Menubar filter={10} color='white'></Menubar>
                    <Row>
                        <Col md={5}>
                            <Card>
                                <Card.Body style={{ padding: "0px" }}>
                                    <Card.Title className='card-title'>{showPlace.title}</Card.Title>
                                    <Card.Text>
                                        {showPlace.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={7}>
                            <Form className="booking-form" onSubmit={bookingSubmit}>
                                <Form.Group>
                                    <Form.Label className="formlevel">Origin</Form.Label>
                                    <Form.Control onChange={handlePlace} className="f-control" type="text" value="Dhaka"></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="formlevel">Destination</Form.Label>
                                    <Form.Control onChange={handlePlace} className="f-control" type="text" value={showPlace.title} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="formlevel">Date</Form.Label>
                                    <DatePickerr></DatePickerr>
                                </Form.Group>
                                
                                    <Button className='booking-btn' variant="primary" type="submit">
                                        Start Booking
                                    </Button>
                               
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Booking;