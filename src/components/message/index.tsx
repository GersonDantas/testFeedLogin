import React from "react";
import Post from "./style";
import Avatar from "@material-ui/core/Avatar";

interface Props {
  name: string;
  message: string;
  count: number;
  date: Date
}

const Message: React.FC<Props> = ({ name, message, count, date }) => {
  let formatDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
  return (
    <div key={count}>
      <Post>
        <div className="divAvatarMessage">
          <Avatar className="avatarMessage"></Avatar>
          <em>{name}</em>
          <em>{formatDate}</em>
        </div>
        <div className="divMessage">
          <p>{message}</p>
        </div>
      </Post>
    </div>
  );
};

export default Message;
