import React, { useContext } from "react";
import Nav from "./style";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Logout } from "@services/authentication";
import { Context } from "@utils/Context/Contex";

interface Props {
  name: string;
}

const Header: React.FC = () => {
  const { isLoading, setIsloading } = useContext(Context);

  const logout = () => {
    setIsloading(!isLoading);
    return Logout();
  };

  return (
    <Nav>
      <div>
        <Avatar className="avatarHeader"></Avatar>
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
