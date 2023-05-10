import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/Home.css";



const Home = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
      },[]);
  return (
    <div className="home-container">
      <h1 className="title">Welcome {user?.name} !</h1>
      <nav className="navbar">
        <ul className="navbarList">
          <li className="navbarItem">
            <Link to="/info" className="navbarButton">
              Info
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/todos" className="navbarButton">
              Todos
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/posts" className="navbarButton">
              Posts
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/albums" className="navbarButton">
              Albums
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/logout" className="navbarButton">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
        <Outlet user={user}/>
    </div>
  );
};

export default Home;

