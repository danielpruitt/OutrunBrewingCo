import React from 'react';
import {Container, Col, Row} from '../Grid';

const Footer = () =>
    <footer id='footer' className='mt-5'>
        <Container>
            <Row>
    
                <Col size='4'/>
                <Col size='4'>
                <div className="clickable" 
                        onClick={() => window.open('https://goo.gl/maps/HqzUoCGs48AexUXA9', '_blank')}
                        >
                            <p>5368 East Mountain Street Stone Mountain, Ga 30083</p>

                        </div>
                </Col>
                <Col size='4'/>
                
            </Row>    
        </Container> 
    </footer> 

export default Footer;