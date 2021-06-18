import styled from "styled-components";

const Form = styled.form`
  max-width: 400px;
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .button {
    background-color: #20df7f;
    width: 300px;
    height: 45px;
    color: #fff;
    border-radius: 10px;
    :hover {
        background-color: #78e08094;
    }
  }
`;

export default Form;
