import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Link } from "../../Components/ButtonLink";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const sendMessage = () => {
    if (password || email == null) {
      alert("Data was sent", console.log(email, password));
    } else {
      alert("Data wasn't sent");
    }
  };

  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <NavBar>
        <TitleNavBar>Set Works</TitleNavBar>
        <MenuItemsArea>
          <ItemsUl>
            <ItemsLi>
              <Link title="Suporte" onClick={""}></Link>
            </ItemsLi>
            <ItemsLi>
              <Link title="Home" onClick={moveToHome}></Link>
            </ItemsLi>
            <ItemsLi>
              <Link title="Cadastrar" onClick={""}></Link>
            </ItemsLi>
          </ItemsUl>
        </MenuItemsArea>
      </NavBar>
      <ContainerLogin>
        <TextInfo>Coloque seus dados</TextInfo>
        <Inputs
          placeHolder="Digite seu Login"
          name="email-Login"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Inputs>
        <Inputs
          placeHolder="Digite sua Senha"
          name="senha-Login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Inputs>
        <Button onClick={sendMessage} content="Entrar"></Button>
      </ContainerLogin>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { SignIn };
