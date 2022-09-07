import React from 'react';
import {NavLink} from "react-router-dom";

const AdminPanel = () => {
    return (
        <div>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default AdminPanel;