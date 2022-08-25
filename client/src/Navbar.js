import React from 'react'
import {connect} from 'react-redux'
import store from "./store"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <nav>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/forgot_password">FORGOT PASSWORD</Link>
       </nav>
    )
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Navbar)