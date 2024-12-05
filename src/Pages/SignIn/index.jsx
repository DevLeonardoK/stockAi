import React from "react";
import {
  Wrapper,
  ContainerLogin,
  Footer,
  ItemsLi,
  ItemsUl,
  MenuItemsArea,
  NavBar,
  TitleNavBar,
  TextInfo,
} from "./styles";
import { Inputs } from "../../Components/Input";
import { Button } from "../../Components/Button";

const SignIn = () => {
  const sendMessage = () => {
    alert("Data was sent");
  };

  return (
    <Wrapper>
      <NavBar>
        <TitleNavBar>Set Works</TitleNavBar>
        <MenuItemsArea>
          <ItemsUl>
            <ItemsLi>1</ItemsLi>
            <ItemsLi>2</ItemsLi>
            <ItemsLi>3</ItemsLi>
          </ItemsUl>
        </MenuItemsArea>
      </NavBar>
      <ContainerLogin>
        <TextInfo>Coloque seus dados</TextInfo>
        <Inputs
          placeHolder="Digite seu Login"
          name="email-Login"
          type="email"
        ></Inputs>
        <Inputs
          placeHolder="Digite sua Senha"
          name="senha-Login"
          type="password"
        ></Inputs>
        <Button onClick={sendMessage} content="Entrar"></Button>
      </ContainerLogin>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { SignIn };
