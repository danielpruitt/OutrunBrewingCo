import React from 'react';
import {Col, Row, Container} from '../Grid';
import Links from './Links';
import LoadModal from '../Modal/LoadModal';

export const OurStory = () =>
<div>
    <LoadModal/>
    <Container> 
        <Row>
            <Col size='12'>
                <h2 className=' neon lazer84 neon-bottom'>Our Story</h2>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col size='12'>
                <h5 className="din16 ">We are a brewer owned and operated small-scale production brewery that focuses on approachable and highly drinkable small-batch brews. We put our own spin on a variety of styles, old and new. Our beer is brewed in house and only available in our taproom. We take our beer seriously, but not ourselves, and are dedicated to brewing rarities, untasted originals, and re-imagined favorites.
                                </h5>
                <h4 className='din16 '>Remember to #followtheneon</h4>
            </Col>
        </Row>
    </Container>
    <div className=' mt-5'>
        <Links/>
    </div>
</div>