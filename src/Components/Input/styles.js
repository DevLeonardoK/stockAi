import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: -5%;
`;

export const InputText = styled.input`
  width: 350px;
  height: 50px;
  background-color: transparent;

  color: #000;
  border: 0;
  border-radius: 10px;
  padding-left: 30px;

  &:focus {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: "Poppins";
  margin-bottom: 20px;
  margin-left: 5px;
`;
