import { useEffect , use} from "react";
import {  useNavigate } from "react-router-dom";
import Login from "./Login";

function Logout(){
    const navigate = useNavigate() 
    useEffect(() => {
        setTimeout( () => navigate('/Login'), 1000)} , [])
        window.localStorage.removeItem('user')

    return(
        <div  className="content">
            Logout...
        </div>
        
    )
}

export default Logout;