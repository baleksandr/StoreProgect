import React from 'react';
import "./StoreStyles.css"
import imageLabel from "../../assets/label.jpg"
import imageLogin from "../../assets/login.jpg"
import imageBasket from "../../assets/basket.jpg"
import ComponentImg from "../ComponentImg/ComponentImg";
import {NavLink} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Routes, Route, Router} from "react-router-dom";
import Auth from "../../auth/Auth";
import Layout from "../Layout/Layout";
import Header from "../Header/Header";

// class Store extends Component {
const Store = () => {
    // const auth = useSelector(state => state.auth)

    return (
        <>

            <div className={"headStore"}>
                <div  className={"logoImg"}>
                    <ComponentImg image={imageLabel} width={"130px"} height={"50px"}/>
                </div>
                <div className={"category"}>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/men'>MEN</NavLink>
                    <NavLink to='/women'>WOMEN</NavLink>
                    <NavLink to='/jewelery'>JEWELERY</NavLink>
                    <NavLink to='/electronics'>ELECTRONICS</NavLink>
                </div>
                <div className={"search"}>
                    <div className={"adminPanel"}>
                        <NavLink>HELP </NavLink>
                        <NavLink>CONTACT US</NavLink>

                        <NavLink to='/login' className={"login"}>LOGIN <ComponentImg image={imageLogin}
                                                                                     width={"10px"}
                                                                                     height={"12px"}/></NavLink>
                        {/*{auth ? <NavLink to='/adminPanel'>adminPanel</NavLink> : ''}*/}
                    </div>
                    <div className={"storeField"}>
                        <label>
                            <input type="text" placeholder={"search"}/>
                        </label>
                        <NavLink to='/basket'>
                            <ComponentImg image={imageBasket} width={"40px"} height={"32px"}/>
                        </NavLink>
                        <div className={"price"}>
                            amount
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path='/login' element={<Auth/>}/>
            </Routes>

        </>
    );
}

export default Store;