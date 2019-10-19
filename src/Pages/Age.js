import React from 'react';
import { Link } from "react-router-dom";
import {Animated} from 'react-animated-css';
import MyParticles from '../Components/Particles/Particles';
import {Container, Row, Col} from '../Components/Grid';

import './Age.css';
const Age =()=>(
    <div>
        <MyParticles />
            <div className='age-area'>

            <Animated animationIn="bounceInDown" animationOut="lightSpeedOut" animationInDuration={800} animationOutDuration={800} isVisible={true}>

            <Container>
                    <div className='age-gif'>

                    <Row>
                        <Col size='12'>
                            <div className='mt-5 text-center'>
                                <h5 className='lazer84 neon'>Are you 21 or older?</h5>
                            </div>
                        </Col>
                    </Row>
                    <div className='pt-1'>
                            <Container>
                                <Row>
                                    <Col size='6'>
                                        <Link to={'/Home'}>
                                        <button className='btn btn-outline-primary float-right' type='button' data-dismiss='modal' aria-label='close'>
                                            <span className=''>Yes</span>
                                        </button>
                                        </Link>
                                        
                                    </Col>
                                    <Col size='6'>
                                        <Link to={'/notoldenough'}>
                                            <button className='btn btn-outline-primary float-left' type='button'>
                                                <span className=''>No</span>
                                            </button>
                                        </Link>
                                    </Col>

                                </Row>
                            </Container>
                        </div>
                </div>
                </Container>
            </Animated>
            
                
            </div>
        
    </div>

);

export default Age;