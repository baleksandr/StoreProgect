import React from 'react';
import {Routes, Route} from "react-router-dom";
// import Layout from "../layout/Layout";
// import Catalog from "../components/catalog/Catalog";

import NotFoundPage from "../components/notFoundPage/NotFoundPage";
// import Auth from "../auth/Auth";
import Store from "../components/StoreComponent/Store";
import Auth from "../auth/Auth";
import RequireAuth from "../auth/requireAuth";
import AdminPanel from "../components/AdminPanel/AdminPanel";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Store/>}>
                    {/*<Route index element={<Catalog/>} />*/}
                    {/*<Route path='basket' element={*/}
                    {/*    <RequireAuth>*/}
                    {/*        <Basket/>*/}
                    {/*    </RequireAuth>} />*/}
                    <Route path='adminPanel' element={
                        <RequireAuth>
                            <AdminPanel/>
                        </RequireAuth>} />
                    <Route path='*' element={<NotFoundPage/>} />
                    <Route path='login' element={<Auth/> }/>
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;