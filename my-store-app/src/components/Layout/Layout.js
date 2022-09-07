import React from 'react';
import {NavLink, } from "react-router-dom";

import Store from "../StoreComponent/Store";

const Layout = () => {

    return (
        <>
            <NavLink to="/"><Store/></NavLink>
        </>
    );
};

export default Layout;