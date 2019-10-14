import React from 'react';
import { Col, Row, Container } from '../Grid';


const Links = () => (
    <div>
        <Container>
            <Row>
                <Col size='3'>
                    <div className='clickable' onClick={() => window.open('https://www.instagram.com/outrunbrewingco/', '_blank')}>
                        <i className='fab fa-instagram fa-5x'></i>
                    </div>
                </Col>
                <Col size='3'>
                <div className='clickable' onClick={() => window.open('https://www.facebook.com/outrunbrewingco/', '_blank')}>
                        <i className='fab fa-facebook-square fa-5x'></i>
                    </div>           
                </Col>
                <Col size='3'>
                    <div className='clickable' onClick={() => window.open('https://www.twitter.com/outrunbrewingco/', '_blank')}>
                        <i className='fab fa-twitter-square fa-5x'></i>
                    </div>
                </Col>
                <Col size='3'>
                    <div className='clickable' onClick={() => window.open('https://untappd.com/OutrunBrewingCompany', '_blank')}>
                        <i className='fab fa-untappd fa-5x  '></i>
                    </div>            
                </Col>
            </Row>
        </Container>
    </div>
)

export default Links;