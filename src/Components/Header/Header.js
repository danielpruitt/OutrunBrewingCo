import React from 'react';
import './Header.css';
import MyParticles from '../Particles/Particles';

const Header = () => (
    <div>
        <MyParticles />
        <img 
        src={require('../../Images/FollowTheNeonPink.png')}
        alt='follow the neon'
        className='cust-img mx-auto d-block'
        />

        {/* <img src={require('../../Images/FollowTheNeon_Sign_Outrun.jpg')} alt='follow the neon' className='cust-img mx-auto d-block'/> */}
    </div>
)

export default Header; 