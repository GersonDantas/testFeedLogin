import Link from "next/link";
import React from "react";
import Main from "../../components/container";
import Header from '../../components/header'
import PostFeed from '../../components/postFeed'
import Message from '../../components/message'

// import { Container } from './styles';

const feed: React.FC = () => {
  return (
    <>
    <Header name="G" />
    <Main>
      <PostFeed />
      <Message name="gerson" 
        message="sdfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg" />
      <Message name="gerson" 
        message="sdfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg" />
      <Message name="gerson" 
        message="sdfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg" />
      <Message name="gerson" 
        message="sdfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg
        dfoshdofhos dhfdsihfod shfosdhhdsofhds oosdijfisj dfdsgd fgfdgdfg dfgfdg" />
      <Link href="/auth">auth</Link>
    </Main>
    </>
  );
};

export default feed;
