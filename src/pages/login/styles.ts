import styled from "styled-components";

const Span = styled.p`
  color: #fff;
  margin-bottom: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: #000 -1px -1px;
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`;

const H1 = styled.h1`
  width: 212px;
  height: 80px;
  left: 534px;
  top: 157px;
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 80px;
  margin-bottom: 39px;
  text-align: center;
  color: #fff;
`;

const Error = styled.div`
  height: 40px;
  .error {
    color: #ff1;
    background-color: #88292f;
    border-radius: 10px;
    min-width: 300px;
    min-height: 30px;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { Span, H1, Error };
