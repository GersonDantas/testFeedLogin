import React, { useContext, useEffect } from "react";
import Post from "./style";
import Avatar from "@material-ui/core/Avatar";
import { Context } from "@utils/Context/Contex";

interface Props {
  name: string;
  message: string;
  date: string;
}

const Message: React.FC<Props> = ({ name, message, date }) => {
  const { iUserInput } = useContext(Context);

  //formatando a data
  const d = new Date(date);
  const currentDateFormatted = () => {
    let dia = d.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (d.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = d.getFullYear().toString(),
      hr = d.getHours().toString(),
      min = d.getMinutes().toString(),
      hours = hr.length != 2 ? "0" + hr : hr,
      minutes = min.length != 2 ? "0" + min : min;
    return (
      "posted at " +
      hours +
      ":" +
      minutes +
      " on dat " +
      diaF +
      "/" +
      mesF +
      "/" +
      anoF
    );
  };

  return (
      <Post>
        <div className="divAvatarMessage">
          <Avatar className="avatarMessage">
            <p>{name}</p>
          </Avatar>
          <div>
            <div>{iUserInput.username === name && <span>your post</span>}</div>
            <p>{currentDateFormatted()}</p>
          </div>
        </div>
        <div className="divMessage">
          <p>{message}</p>
        </div>
      </Post>
  );
};

export default Message;
