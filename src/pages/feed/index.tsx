/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Main from "@components/container";
import PostFeed from "@components/postFeed";
import Message from "@components/message";
import {
  getAuthorization,
  getToken,
  infoFeed,
  returnFeed,
} from "@services/authorization";
import IsLoading from "@components/isLoading";
import { Context } from "@utils/Context/Contex";
import { Login, storeToken } from "@services/authentication";

const Feed: React.FC = () => {
  const { isLoading, setIsloading, postsState, setPosts } = useContext(Context);
  const [recharge, setRecharge] = useState<boolean>();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined" && !getToken()) {
        await router.push("/login"); //authorization
      }
      setIsloading(false);
      const seq = await infoFeed();

      const data = await returnFeed(seq.lastPostSeq, 100, "desc");
      let d = await data.posts;
      setPosts(d);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsState, recharge]);

  useEffect(() => {
    const clear = setInterval(() => {
      let r = !recharge;
      setRecharge(r);
    }, 5000); //update das mensagens
    return () => clearInterval(clear);
  }, []);

  useEffect(() => {
    const clear2 = setInterval(async () => {
      const d = await Login(JSON.parse(getAuthorization()));
      await storeToken(d.authToken)
    }, 3540000); //vai realtenticar usuário após 59 minutos

    return () => clearInterval(clear2);
  }, []);

  return (
    <Main>
      <PostFeed />
      {postsState.map((text) => (
        <Message
          key={`${text.seq}${text.user}`}
          name={text.user}
          message={text.message}
          date={text.date}
        />
      ))}
      {isLoading && <IsLoading />}
    </Main>
  );
};

export default Feed;
