import React from 'react';
import "./LeftMenu.scss"
import LogoWhite from "../../assets/png/logo-white.png"
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faHome,
    faUser,
    faUsers,
    faPowerOff
}from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function LeftMenu() {
  return (
    <div className="left-menu">
      <img  className='logo' src={LogoWhite} alt="Twittor" />
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link to="/users">
        <FontAwesomeIcon icon={faUsers} /> Users
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} /> Profile
      </Link>
      <Link to="/logout">
        <FontAwesomeIcon icon={faPowerOff} /> Logout
      </Link>
      <Button>Buzz</Button>
    </div>
  );
}