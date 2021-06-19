import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Main from "../../components/container";
import Header from "../../components/header";
import PostFeed from "../../components/postFeed";
import Message from "../../components/message";
import { getToken, SeeFeed } from "../../services/authorization";
import IsLoading from "../../components/isLoading"
import { Context } from "../../utils/Context/Contex";

// import { Container } from './styles';

const Feed: React.FC = () => {

  const {isLoading, setIsloading} = useContext(Context)

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = getToken();
      if (!auth) {
         router.push("/login"); //authorization
      }

    }
    console.log(isLoading)
    setIsloading(!isLoading)
  }, []);

  return (
    <>
      <Header name="G" />
      <Main>
        <PostFeed />
        <Message
          name="gerson"
          message="sdfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg"
        />
        <Link href="/auth">auth</Link>
        {isLoading && <IsLoading />}
      </Main>
    </>
  );
};

export default Feed;
