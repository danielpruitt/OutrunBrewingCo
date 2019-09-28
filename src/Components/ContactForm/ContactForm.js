import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Container, Row, Col } from '../Grid';
import './Contact.css'

class Demo extends Component {
    render() {
        const url = 'https://outrunbrewingco.us3.list-manage.com/subscribe/post?u=2f57f101819640b330c446189&amp;id=c69ec2c0e6';

        return (
            <div>
                
                {/* <h5 className='din16 white-text'>FOLLOW THE NEON</h5> */}
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        );
    }
}

// render(<Demo />, document.querySelector("#demo"));

export default Demo;

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <div
            style={{
                borderRadius: 2,
            }}
        >
            <Container>
                <Row>
                    <Col size='12'>
                        <div>
                            <label className=''>Name</label>
                            <input id='nameInput' className='form-control'
                            type='text' 
                            ref={node => (name=node)}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='12'>
                        <div>
                            <label className=''>Email</label>
                            <input className='form-control'
                            type='email' 
                            ref={node => (email=node)}/>
                        </div>
                    </Col>
                </Row>
                <div className='m-3'>
                    <Row>
                    <Col size='4'>
                        <button className='btn btn-sm btn-primary' onClick={submit}>
                            Submit
                        </button>
                    </Col>
                </Row> 
                </div>
            
                {status === "sending" && <div className='din16' style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    className='din16'
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className='din16'
                    style={{ color: '#bb1581' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            </Container>
        </div>
    )

};