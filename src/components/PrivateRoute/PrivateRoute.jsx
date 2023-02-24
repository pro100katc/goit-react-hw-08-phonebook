import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectToken } from "redux/selectors";

export const PrivateRoute = () => {

    const token = useSelector(selectToken)

    return token ? <div><Outlet /></div> : <Navigate to="/login" replace />;
}