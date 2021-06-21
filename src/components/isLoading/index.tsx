import React, { useContext } from "react";
import Image from "next/image";
import Loading from "../../../public/wait.gif";
import Div from "./style";

const IsLoading: React.FC = () => {
  return (
    <Div>
      <div className="loader">
        <Image
          src={Loading}
          width={Loading.width / 3}
          height={Loading.height / 3}
          alt="image please wait"
          className="loaderImg"
        />
      </div>
    </Div>
  );
};

export default IsLoading;
