import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import './blog.css'
// cox pic
import cox1 from '../../Img/Image/cox1.jpg';
import cox2 from '../../Img/Image/cox2.jpg';
import cox3 from '../../Img/Image/cox3.jpg';
// sreemangal pic
import sree1 from '../../Img/Image/sree1.jpg';
import sree2 from '../../Img/Image/sree2.jpg';
import sree3 from '../../Img/Image/sree3.jpg';

const Blog = () => {
    return (
        <div className='containerr'>
            <Menubar filter={0} color='black'></Menubar>
            <div className='blog'>
                <h3>Cox's Bazar</h3>
                <Row className='blog-row'>
                    <Col>
                        <img src={cox1} alt='cox' />
                    </Col>
                    <Col>
                        <img src={cox2} alt='cox' />
                    </Col>
                    <Col>
                        <img src={cox3} alt='cox' />
                    </Col>
                </Row>
                <p>
                    Cox's Bazar (Bengali: কক্সবাজার) is a town, a fishing port and district headquarters in Bangladesh. It is known for its wide sandy beach which is the world's longest natural sandy sea beach. It is an unbroken 125 km sandy sea beach with a gentle slope. It is located 150 km south of Chittagong. Cox’s Bazar is also known by the name "Panowa", the literal translation of which means "yellow flower". Its other old name was "Palongkee".
                </p>
                <p>
                    <span className="para-span">How to go : </span>
                    The transportation system of cox bazar is extremely fine. Government took good initiatives to make the Dhaka to Cittagong and Chittagong to Coxbazar more stunning and wide.
                    If you want to enjoy the natural beauty of Bangladesh you may choose the Chair Coach to go to Chittagong First. It is a sorrowful matter that there is no direct bus service from Dhaka to Cox’s Bazar. It is better to rent a car which will drive you directly to the Cox’s Bazar Sea Beach at hassle free along with taking less time.
                    So eventually if you decide to go by any Bus Service you may get it in the Sayedabad Bus-stand where lots of renowned chair coach service is available. After reaching chittagong you should rent a Texi to go at Sea Beach.
                    Those who want to reach the coxbazar even swift they may ride on the Biman Bangladesh Airlines service from Dhaka to Chittagong. Then you will find the next rush to Cox Bazar from Chittagong to Sea Beach easy.
                </p>
                <p>
                    <span className="para-span">Tourists and accommodation : </span>
                    Cox's Bazar, arguably the most popular tourist spot in Bangladesh, is visited by a large number of tourists from Britain, America, Korea, Japan, India, Nepal, Pakistan and many other countries each year. Though there is no record kept by the Bangladesh Porjatan Corporation (BPC) on how many people visit the beach annually, an AFP report says that during the winter there can be 10,000 available rooms in the beach area Accommodations near the beach range from expensive high-end resorts to more reasonable options. Many private hotels, BPC Motels and two "Five star" hotels are located on or near the beach.
                </p>
            </div>

            {/* Sree mangal */}

            <div className='blog'>
                <h3>Sreemangal</h3>
                <Row className='blog-row'>
                    <Col>
                        <img src={sree1} alt='sreemangal' />
                    </Col>
                    <Col>
                        <img src={sree2} alt='sreemangal' />
                    </Col>
                    <Col>
                        <img src={sree3} alt='sreemangal' />
                    </Col>
                </Row>
                <p>
                    Sreemangal, The Tea Capital of Bangladesh, is a hilly area covered with tea estates. There are 47 tea gardens in Sreemangal. A large portion of world’s highest quality tea is grown here. It is also called the city of ‘two leaves and a bud. Sreemangal is famous for nature, forests and wildlife.
                </p>
                <p>
                    <span className="para-span">Tourists Attraction : </span>
                     Main attraction are the Lawachara National Park (tropical rain forest), Madhabpur lake (the lake of lotus), Tea gardens, Monipuri, Khashia tribal villages, Baikkabeel (wetland of seasonal birds) and also the world famous 7 layer-color tea cabin.
                </p>
                <p>
                    <span className="para-span">Other Sight seen : </span>
                    Madhabkunda Waterfall (highest waterfall in Bangladesh), Humhum Waterfall (new discovered exclusive waterfall), Satchari National Park, Jaflong-Tamabeel (scenic spots in Sylhet), The shrine of Hazrat Shah Jalal and Shah Poran in Sylhet etc, Nimai Shib Tample, Hakaluki Haor (wetland)
                </p>
            </div>
        </div>
    );
};

export default Blog;