import React from 'react';
import './Modal.css';
import { Link } from "react-router-dom";
import { Container, Row, Col } from '../Grid';
const LoadModal = () => (
    <div>
        <div id='loadModal' className='modal show fade' tabIndex='-1' role='dialog'>
            <div className='modal-dialog ' role='document'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        
                        <Container>
                            <Row>
                                <Col size='12'>
                                    <div className='mt-5 text-center'>
                                        <h5 className='lazer84 neon modal-title'>Are you 21 and older?</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <div className='mt-4'>
                            <Container>
                                <Row>
                                    <Col size='2' />
                                    <Col size='2'>
                                        <button className='btn btn-outline-primary' type='button' data-dismiss='modal' aria-label='close'>
                                            <span className=''>Yes</span>  
                                    </button>
                                    </Col>
                                    <Col size='4' />
                                    <Col size='2'>
                                        <Link to={'/notoldenough'}>
                                            <button className='btn btn-outline-primary' type='button'>
                                                <span className=''>No</span>
                                            </button>
                                        </Link>
                                    </Col>
                                    <Col size='2' />

                                </Row>
                            </Container>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    </div>

);

export default LoadModal;