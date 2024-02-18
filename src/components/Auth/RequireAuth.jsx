import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({allowedRoles}) {

    const {isLoggedIn,role} = useSelector((state)=>state.auth);

    return isLoggedIn && allowedRoles.find((myrole)=> myrole == role) ? (<Outlet />): isLoggedIn ? (<Navigate to='denied'></Navigate>) : (<Navigate to='signin'></Navigate>)
}

export default RequireAuth;