import {useAuth} from "../Contexts/AuthContext.tsx";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

function ReverseAuthWrapper({children}) {
    const {user} = useAuth();
    if (user) {
        return <Navigate to="/"/>
    }
    return children;
}

export default ReverseAuthWrapper;

ReverseAuthWrapper.propTypes = {
    children: PropTypes.node
}