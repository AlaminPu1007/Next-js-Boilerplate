'use client';

import Link from 'next/link';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HeaderComponent = () => {
    return (
        <div id='navbar' className=''>
            <Navbar bg='dark' data-bs-theme='dark'>
                <div className='container'>
                    <Navbar.Brand as={Link} href='/'>
                        Navbar
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} href='/dashboard'>
                            dashboard
                        </Nav.Link>
                        <Nav.Link as={Link} href='/features'>
                            Features
                        </Nav.Link>
                        <Nav.Link as={Link} href='/pricing'>
                            Pricing
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
