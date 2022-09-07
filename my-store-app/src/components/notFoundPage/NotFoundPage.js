import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>something went wrong</h1>
            <Link to='/' className="text-black">
                <h1>Go to catalog</h1>
            </Link>
        </div>
    );
};

export default NotFoundPage;