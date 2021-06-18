import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 45px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #224957;
  border-color: transparent;
  margin-bottom: 32px;
  &[placeholder="password"] {
    margin-bottom: 23px;
  }
`;

export default Input;
