import React from 'react';
import {useDispatch} from "react-redux";
import {LOGIN, LOGOUT} from "../redux-store/ActionConst";

const Auth = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=> dispatch({type:LOGIN})}>Login</button>
            <button onClick={()=> dispatch({type:LOGOUT})}>Logout</button>
        </div>
    );
};

export default Auth;