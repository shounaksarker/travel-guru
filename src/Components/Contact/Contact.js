import React from 'react';
import Menubar from '../Menubar/Menubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';

const Contact = () => {
    const phone = <FontAwesomeIcon icon={faPhoneSquare} />
    const home = <FontAwesomeIcon icon={faHome} />

    return (
        <div className='containerr'>
            <Menubar filter={0} color='black'></Menubar>

            <Col md={{ span: 3, offset: 4 }}>
                <h2 style={{fontStyle: 'italic', textDecoration: 'underline dashed #727272'}}>Contact with us</h2>
                <br/>
                <br/>
                <h4>{home} Office : Dhaka, Bangladesh</h4>
                <br/>
                <h4>{phone} Mobile : 01234-56789</h4>
            </Col>

        </div>
    );
};

export default Contact;