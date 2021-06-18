import React from "react";
import Post from "./style";
import Avatar from "@material-ui/core/Avatar";

interface Props {
  name: string
  message: string
}

const Message: React.FC<Props> = ({name, message}) => {
  return (
    <Post>
      <div className="divAvatarMessage">
        <Avatar className="avatarMessage"></Avatar>
        <em>{name}</em>
      </div>
      <div className="divMessage">
          <p>{message}</p>
      </div>
    </Post>
  );
};

export default Message;