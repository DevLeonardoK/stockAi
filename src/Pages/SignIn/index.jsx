import React, { useCallback, useEffect, useState } from "react";
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
import { MdEmail, MdLock } from "react-icons/md";

var SignIn = () => {
  const [password, setPassword] = useState(""); //pegando senha do input
  const [email, setEmail] = useState(""); //pegando email do input e tambem validando se foi cadastrado no db
  const [user, setUser] = useState([]);
  const [resData, setResData] = useState([]);
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/home");
  };

  // --> //CHECK USER DATA
  // const verificarData = () => {
  //   axios
  //     .post("http://localhost:3001/verify_user", {
  //       username: email,
  //     })
  //     .then((response) => {
  //       setResData(response.data); //Guardando a response do server
  //       console.log("User verificado no db: ", resData); //exibindo a response data
  //     })
  //     .catch((error) => console.error(error));
  // };

  //ADD USERS e CHECK USER DATA
  const LoginUser = () => {
    axios
      .post("http://localhost:3001/items", {
        username: email,
        password: password,
      })
      .then((response) => {
        setUser([...user, response.data]);
        console.log("User criado com sucesso: DATA _>");
        console.log(user);
      })
      .catch((error) => console.error(error));
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
      <ContainerData>
        <TextInfo>Coloque seus dados</TextInfo>
        <form>
          <Inputs
            placeHolder="Login E-mail"
            name="email-SignIn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<MdEmail />}
            Required={true}
          ></Inputs>
          <Inputs
            placeHolder="Login Senha"
            name="senha-SignIn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<MdLock />}
          ></Inputs>
        </form>
        <Button onClick={LoginUser} content="Entrar"></Button>
      </ContainerData>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { SignIn };
