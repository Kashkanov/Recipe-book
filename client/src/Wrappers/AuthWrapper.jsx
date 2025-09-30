import {useAuth} from "../Contexts/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

function AuthWrapper({children}) {
    const {user, loading} = useAuth();

    if (loading) {
        return <div>Loading...</div>
    }
    if (!user) {
        return <Navigate to="/login"/>
    }
    console.log("authenticated user is: ", user.username);         //<===
    return children;

}

export default AuthWrapper;

AuthWrapper.propTypes = {
    children: PropTypes.node
}