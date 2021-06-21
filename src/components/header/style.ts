import styled from "styled-components";

const Nav = styled.header`
  background-color: #18444a;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: inherit;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  .avatarHeader {
    color: #fff;
    background-color: #20df7f;
  }
`;

export default Nav;
