import React from "react";
import { Container } from 'react-bootstrap';
import { CreateAccount } from "./createAccount";
import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header = () => {
    return (
        <Container fluid className="divider">
            <Container>
                <div className="header-section">
                    <div className='row'>
                        <div className='col-md-3'>
                            <Logo />
                        </div>
                        <div className='col-md-7'>
                            <Navigation />
                        </div>
                        <div className='col-md-2'>
                            <CreateAccount />
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}