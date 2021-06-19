import React from "react";
import Nav from "./stile";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button'
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Logout } from "../../services/authentication";

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  const logout = () => {
    return Logout()
  }
  return (
    <Nav>
      <div>
        <Avatar className="avatarHeader">{name}</Avatar>
      </div>
      <div>
        <Button onClick={logout} href="/login">
          <ExitToApp style={{ color: "#fff" }} />
        </Button>
      </div>
    </Nav>
  );
};

export default Header;
