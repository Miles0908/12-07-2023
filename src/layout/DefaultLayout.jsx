import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";
import { useEffect, useState } from "react";

const DefaultLayout = ({ children }) => {
  const navigate= useNavigate();
  const [isLoggedIn,setLoggedIn]=useState(false);

  useEffect(()=>{
    setLoggedIn(JSON.parse(localStorage.getItem("auth")))
  },[]);

  const handleLogout= ()=>{
    localStorage.removeItem("auth");
    setLoggedIn(false);
    navigate("/login")

  }

  
  const links = [
    {
      id: 1,
      name: "Homepage",
      value: "/",
    },
    {
      id: 2,
      name: "About",
      value: "/about",
    },
    {
      id:3,
      name:isLoggedIn?"Dashboard":"Login",
      value:isLoggedIn ? "/dashboard": "/login",
    },
    {
      id:4,
      name:isLoggedIn ? "Logout":"Logout",
      value:isLoggedIn?"":"",
      onClick : handleLogout,
    }
  ];
  return (
    <div className={styles.DefaultLayout}>
    
      <div className={styles.Navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              {link.value ?(
              <Link to={link.value}>{link.name}</Link>
              ):(
                <button onClick={link.onClick}>{link.name}</button>
              )}
            </li>
            ))}
        </ul>
      </div>
      {children}
      <div className={styles.content}>  <Outlet /></div>
  
    </div>
  );
};
export default DefaultLayout;
