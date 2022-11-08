import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const PrivateRouter = ({children}) => {
    const { user, loader } = useContext(AuthProvider)

    //current location 
    const location = useLocation()

    //spanier add
    if (loader) {
        return (
                    <div className='spanier text-center '>
                        <div className="spanier-center spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
    }

    //current User location replace
    if (user) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRouter;