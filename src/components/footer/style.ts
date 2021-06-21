import styled from "styled-components";

const Foo = styled.footer`
  position: absolute;
  background-color: #a1ba89;
  bottom: 100;
  width: 100%;
  height: 30px;
  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 0.5rem;
      color: #fff;
    }
  }
`;

export default Foo;
