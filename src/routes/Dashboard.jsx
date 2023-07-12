import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../mock/auth";
import styles from "../styles/Dashboard.module.scss"

export default function Dashboard(){
    const navigate=useNavigate();
    const [isLogged,setLogged]=useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility= ()=>{
        setShowPassword(!showPassword)
    }

    useEffect(()=>{
       setLogged(JSON.parse(localStorage.getItem("auth")))
    },[])

    return(
        <div className={styles.Dashboard}>
            <p>User logged name: <b>{auth.username} </b></p>
            <p>User logged password: <b>{showPassword ? auth.password:"*******"}   </b>
            <button  onClick={togglePasswordVisibility}>  {showPassword ? "Hide": "Show"}</button></p>
            
        </div>
    )
 
}