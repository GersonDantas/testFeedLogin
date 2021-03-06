import styled from "styled-components";

const Post = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #7286a0;
  border-radius: 20px;
  width: 610px;
  height: 205px;
  padding: 15px;
  margin-bottom: 50px;
  .divAvatarMessage {
    p {
      font-size: 1rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    height: 25%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
    .avatarMessage {
      position: static;
      background-color: #20df7f;
      margin-right: 10px;
      color: #fff;
      width: 50px;
      height: 50px;
    }
    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      div {
        width: max-content;
        span {
          font-size: 20px;
          color: #fff;
          background-color: #698f3f;
          border-radius: 10px;
          height: 30px;
          width: 100px;
          text-align: center;
        }
      }
      p {
        display: flex;
        justify-content: flex-end;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
      }
    }
  }
  .divMessage {
    background-color: #6e819a;
    border-top: 0.9px solid #525f71;
    border-bottom: 0.9px solid #525f71;
    height: 72%;
    overflow-y: scroll;
    word-break: break-word;
    padding: 10px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 1.05em;
      line-height: 1.05em;
      color: #ffffff;
    }
  }
`;

export default Post;
