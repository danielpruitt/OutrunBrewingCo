import React from 'react';
import Demo from '../ContactForm/ContactForm'
import MyParticles from '../Particles/Particles';
const Subscribe = () => (
    <div>
        <button type='button' className=' center-block mt-3 btn btn-primary' data-toggle='modal' data-target='#subscribeModal'>
            Subscribe       
        </button>
        <div id='subscribeModal' className='modal fade' tabIndex='-1' role='dialog' >
            <div className='modal-dialog modal-lg'>
                <MyParticles/>
                <div className='modal-content'>

                    <div className='modal-header'>
                        <h5 className='modal-title'>Subscribe to #FollowTheNeon</h5>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'> &times;</span>
                        </button>
                    </div>
                    <div className='model-body'>
                        <Demo />
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default Subscribe;