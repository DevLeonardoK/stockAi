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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é válido")
      .required("O Email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

var SignIn = () => {
  const [password, setPassword] = useState(""); //pegando senha do input
  const [email, setEmail] = useState(""); //pegando email do input e tambem validando se foi cadastrado no db
  const [user, setUser] = useState([]);
  const [resData, setResData] = useState([]);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const moveToHome = () => {
    navigate("/home");
  };

  //ADD USERS
  const LoginUser = (data) => {
    // axios
    //   .post("http://localhost:3001/auth/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     // setUser([...user, response.data]);
    //     console.log("User criado com sucesso:");
    //   })
    //   .catch((error) => console.error(error));

    console.log(JSON.stringify(data));
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
        <form onSubmit={handleSubmit(LoginUser)}>
          <Inputs
            control={control}
            placeholder="Login E-mail"
            leftIcon={<MdEmail />}
            type="email"
            errorMessage={errors?.email?.message}
            name="email"
          ></Inputs>

          <Inputs
            type="password"
            control={control}
            placeholder="Login Senha"
            leftIcon={<MdEmail />}
            errorMessage={errors?.password?.message}
            name="password"
          ></Inputs>

          {/* <Inputs
            activate={false}
            placeHolder="Login Senha"
            name="senha-SignIn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<MdLock />}
          ></Inputs> */}
          <Button type="submit" content="Entrar"></Button>
        </form>
      </ContainerData>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { SignIn };
