import React from "react";
import LogoutIcon from "../imgs/logout.png";
import { useHistory } from "react-router-dom";
import UserConfirmation from './UserConfirmation'

const TEXT = "Logga ut";
const LogoutButton = () => {
  const history = useHistory()

  const handleLogout = () => {
    UserConfirmation({
      text:'Är du säker på att logga ut?',
      confirmAction: () => {
        localStorage.removeItem('sessionId');
        history.push('/logout');
      }
    })
  }
  return (
    <button
      className="logoutButton"
      onClick={handleLogout}
    >
      <img src={LogoutIcon} alt="Exist"></img>
      {TEXT}
    </button>
  );
};
export default LogoutButton;
