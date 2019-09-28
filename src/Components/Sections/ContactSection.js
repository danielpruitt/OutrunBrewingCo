import React from 'react';
import {Container, Row, Col} from '../Grid';
import Demo from '../ContactForm/ContactForm';
import Subscribe from './Subscribe';

export const ContactSection = () => 
    <div className='mt-5'> 
        <Container>
            <Row>
                <Col size='12'>
                    <h2 className='neon lazer84 neon-bottom'> Contact</h2>
                </Col>    
            </Row>   
            <br/> 
            <Row>
                <Col size='2'/>
                <Col size='4'>
                    <div className='mx-auto'>
                        <h5 className='din16 ml-5'>Josh Miller</h5>
                        <h5 className='din16'>josh@outrunbrewingco.com</h5>
                    </div>
                </Col>
                <Col size='1'/>
                <Col size='4'>
                    <div className='mx-auto'>
                        <h5 className='din16 ml-5'> Ryan Silva</h5>
                        <h5 className='din16'>ryan@outrunbrewingco.com</h5>
                    </div>
                </Col>
            </Row>
        </Container> 
    
        <Container>
            <Row>
                <Col size='4'></Col>
                <Col size='4'>
                    <Subscribe />
                </Col>
                <Col size='4'></Col>

            </Row>
        </Container>
    </div>

