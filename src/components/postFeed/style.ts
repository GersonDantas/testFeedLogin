import styled from "styled-components";

const Post = styled.div`
  display: flex;
  background-color: #7286a0;
  border-radius: 20px;
  width: 610px;
  height: 205px;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 50px;
  .divAvatar {
    height: 100%;
    min-width: 70px;
    display: flex;
    flex-flow: column wrap;
    .avatarPost {
      position: static;
      margin-bottom: 20px;
      background-color: #20df7f;
      color: #fff;
      width: 50px;
      height: 50px;
    }
    em {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
      color: #ffffff;
    }
  }
  .divForm {
    width: 100%;
    display: flex;
    justify-content: center;
    .textArea {
      min-width: 500px;
      min-height: 145px;
      font-style: normal;
      font-weight: normal;
      font-size: 1.05em;
      line-height: 1.05em;
      color: #ffffff;
      padding-left: 10px;
      border-radius: 10px;
      background-color: #224957;
      border-color: transparent;
      margin-bottom: 8px;
      ::placeholder {

        font-style: normal;
        font-weight: normal;
        font-size: 1.05em;
        line-height: 1.05em;
        color: #ffffff;
      }
    }
    .divButPost {
      display: flex;
      justify-content: flex-end;
      width: 500px;
      .buttonPost {
        position: static;
        background-color: #20df7f;
        width: 150px;
        height: 45px;
        color: #fff;
        border-radius: 10px;
        :hover {
          background-color: #78e08094;
        }
      }
    }
  }
`;

export default Post;
