import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'User data' : 'Please Login'}
        </div>
    )
}

export default Profile;