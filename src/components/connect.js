// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerimg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { useAuth0 } from "@auth0/auth0-react";

function ContactForm() {
    const [state, handleSubmit] = useForm("xnqydkvn");
    
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    if (state.succeeded) {
        return <p className='popup'>Thanks for joining!</p>;
    }
    return (
        <section className="contact" id='connect'>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={headerImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Connect with us</h2>
                            {isAuthenticated ? (
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col size={12} sm={6} className="px-1">
                                            <label htmlFor="name">
                                                Your Name
                                            </label>
                                            <input
                                                id="nama"
                                                type="text"
                                                name="Name"
                                            />
                                            <ValidationError
                                                
                                                field="text"
                                                errors={state.errors}
                                            />
        
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <label htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
        
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                        <label htmlFor="Message">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />    
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <button type="submit" disabled={state.submitting}>
                                                Submit
                                            </button>
                                        </Col>
                                    </Row>
                                    <button
                                        className="btn btn-light"
                                        onClick={() =>
                                            logout({
                                                logoutParams: { returnTo: window.location.origin },
                                            })
                                        }
                                    >
                                        Log Out
                                    </button>
                                </form>
                            ):(
                                <form>
                                    <button onClick={loginWithRedirect} className="btn btn-light">
                                        Log In
                                    </button> 
                                </form>
                            )}
                            
                    </Col>
                </Row>    
            </Container>

        </section>
      
    
    
  );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;