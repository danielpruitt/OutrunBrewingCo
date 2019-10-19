import React from 'react';
import './NotOldEnough.css';
import {Container, Row, Col} from '../Components/Grid';
import MyParticles from '../Components/Particles/Particles';

const NotOldEnough = () => (
    
    // <div>
    //     <MyParticles/>
    //     <div className='game-over'>
    //         <Container> 
    //             <Row>
    //                 <Col size='12'> 
    //                     <h1 className='neon lazer84 game-over-text'>Game Over</h1>
    //                 </Col>    
    //             </Row> 
    //         </Container>
    //     </div>
    //     <div className='margin-fix'>
    //         <Container>
    //             <Row>
    //                 {/* <Col size='2' /> */}
    //                 <Col size='12'>
    //                     <img className='not-old-image' src={require('../Images/OutrunGifs/OutrunMachoMan.gif')} alt='Outrun No Page' />
    //                 </Col>
    //                 {/* <Col size='2' /> */}
    //             </Row>
    //         </Container>
    //     </div>
    // </div>
    <div>
        <img className='not-old-image' src={require('../Images/OutrunGifs/OutrunMachoMan.gif')} alt='Outrun No Page' />
    </div>


);

export default NotOldEnough;