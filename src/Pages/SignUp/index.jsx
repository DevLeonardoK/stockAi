import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  ContainerData,
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
import axios from "axios";

var SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const sendMessage = () => {
    console.clear();
    console.table("email: ", email, "Senha: ", password);
  };
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/home");
  };

  const addUser = () => {
    axios
      .post("http://localhost:3001/items", {
        username: email,
        password: password,
      })
      .then((response) => setUser([...user, response.data]))
      .catch((error) => console.error(error));
    console.log(user);
    verificarCadastro();
  };

  const verificarCadastro = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/verify_User",
        email
      );
      if (response.data.username) {
        console.log("user encontrado: ", response.data.username);
      } else {
        console.log("User nao encontrado");
      }
    } catch (error) {
      console.error("Erro ao verificar user", error);
    }
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
              <Link title="Entrar" onClick={""}></Link>
            </ItemsLi>
          </ItemsUl>
        </MenuItemsArea>
      </NavBar>
      <ContainerData>
        <TextInfo>Coloque seus dados</TextInfo>
        <Inputs
          placeHolder="Cadastre um E-MAIL"
          name="email-SignUp"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Inputs>
        <Inputs
          placeHolder="Cadastre uma Senha"
          name="senha-SignUp"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Inputs>
        <Button onClick={addUser} content="Registrars"></Button>
      </ContainerData>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { SignUp };
