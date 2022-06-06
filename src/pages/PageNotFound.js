import React from 'react'
import './PageNotFound.css'
import Link from '@mui/material/Link';
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


const PageNotFound = () => {
    return (
        <div className = 'notFound'>
        <header >404: PAGE NOT FOUND</header>
        <div class="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            RETURN TO HOMEPAGE
        </div>
        </div>
        
    )
}

export default PageNotFound
