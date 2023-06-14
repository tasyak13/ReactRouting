import Menu from "../components/Menu";
import {useParams} from "react-router-dom";

function User() {
    let {userID} = useParams();
    
        return (<>
        <Menu />
            <h2>This is a user {userID}</h2>
        </>)
    }

    export default User;