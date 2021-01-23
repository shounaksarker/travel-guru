import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './hotel.css';

const Hotel = (props) => {
    const { title, guest, bath, bed, bedrooms, description1, description2, img, price, total, rating } = props.info;
    const star = <FontAwesomeIcon icon={faStar} />
    return (
        <div>
            <Card className='c'>
                <Row className='rw'>
                    <Card.Img src={img} className='c-img' />
                    <Card.Body className='c-body'>
                        <Card.Title className="c-title">{title}</Card.Title>
                        <div className="c-text">
                            <>
                                {guest} guest, {bedrooms} bedrooms, {bed} beds, {bath} baths
                            </>
                            <div className="description">
                                <>
                                    {description1} <br/> <br/>
                                </>
                                <>
                                    {description2}
                                </>
                            </div>
                           
                            <Row>
                                <Col className='rating'><span>{star}</span> {rating} (20)  </Col>
                                <Col className="price"><span>${price}</span>/night</Col>
                                <Col className="total">${total} total</Col>
                            </Row>

                        </div>
                    </Card.Body>
                </Row>
            </Card>
        </div>
    );
};

export default Hotel;