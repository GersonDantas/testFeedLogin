import Link from "next/link";
import React, { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Main from "@components/container";
import Header from "@components/header";
import PostFeed from "@components/postFeed";
import Message from "@components/message";
import { getToken, SeeFeed } from "@services/authorization";
import IsLoading from "@components/isLoading";
import { Context } from "@utils/Context/Contex";
import api from "@services/api/api";

const Feed: React.FC = () => {
  const { isLoading, setIsloading, iUserInput } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined" && !getToken()) {
        await router.push("/login"); //authorization
      }
      setIsloading(false)

      const data = await api
      .get("/feed", {
        headers: {
          "ens-auth-token": getToken()
        },
      })
      .then((res) => res.data)
      .catch(e => alert("server error"))

      
    })()
  }, []);

  return (
      <Main>
        <PostFeed />
        {/* {text.map((text) => (
          // eslint-disable-next-line react/jsx-key
          <Message
            count={text.count}
            name={iUserInput.username}
            message={text.message}
            date={text.lastPostDate}
          />
        ))} */}
        {isLoading && <IsLoading />}
      </Main>
  );
};

export default Feed;
