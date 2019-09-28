import React from 'react';
import {Container, Row, Col} from '../Grid';
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
                <Col size='12'>
                    <div className='text-center m-1'>
                        <h5 className='din16'>Josh Miller</h5>
                        <h5 className='din16'>josh@outrunbrewingco.com</h5>
                    </div>
                </Col>
                <Col size='12'>
                    <div className='text-center m-1'>
                        <h5 className='din16 '> Ryan Silva</h5>
                        <h5 className='din16'>ryan@outrunbrewingco.com</h5>
                    </div>
                </Col>
            </Row>
        </Container> 
    
        <Container>
            <Row>
                <Col size='5'></Col>
                <Col size='2'>
                    <div className='pl-3'>
                        <Subscribe />
                    </div>
                </Col>
                <Col size='5'></Col>

            </Row>
        </Container>
    </div>

