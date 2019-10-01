import React from 'react';
import {Container, Row, Col} from '../Grid';
import './ImageContainer.css';

const BrewerContainer = () => (
    <div>
        <Container> 
            <Row>
                <div className='col-2'></div>
                <Col size='8'>
                    <img className='img-fluid rounded brewer-image' src={require('../../Images/OutrunJAndR.jpg')} alt='Josh and Ryan'/>
                </Col>

                <div className='col-2'></div>
            </Row>
        </Container>
    </div>

);

export default BrewerContainer;