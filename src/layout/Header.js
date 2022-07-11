import React, { useState, useContext } from 'react';
// import nisbLogo from "../images/nisbLogo.png"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    NavbarBrand
} from "reactstrap";

import { Link } from "react-router-dom"
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import firebase from "firebase/compat/app";

const Header = () => {
    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color='dark' light expand='md' >
            <NavbarBrand><Link to="/" className="text-white ms-3" style={{ textDecoration: 'none' }} >GitFire - Github User Finder</Link></NavbarBrand>
            <NavbarText className='text-white'>
                {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        context.user ? (
                            <NavItem className='mx-3 '>
                                <NavLink onClick={() => {
                                    context.setUser(null)
                                    toast("See ya soon❤️",
                                        { type: "success" }
                                    );
                                }
                                } className="text-white" style={{ cursor: 'pointer' }} >
                                    Logout
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem >
                                    <NavLink tag={Link} to="/signup" className="text-white" >
                                        Signup
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className="text-white" >
                                        Signin
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;