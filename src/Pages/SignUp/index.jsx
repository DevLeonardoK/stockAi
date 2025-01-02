import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  ContainerDataSignUp,
  Footer,
  ItemsLi,
  ItemsUl,
  MenuItemsArea,
  NavBar,
  TitleNavBar,
  TextInfo,
  InfoText,
  ContainerForms,
  ContainerDataOptions,
  LoadingContainer,
} from "./styles";

import { IconContainer } from "../../Components/Input/styles";
import { OrbitProgress } from "react-loading-indicators";

import { Inputs } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from "../../Components/ButtonLink";
import { MdEmail, MdLock } from "react-icons/md";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minímo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

var SignUp = () => {
  const [user, setUser] = useState([]); //user data (password and email)
  const navigate = useNavigate();
  const [mode, setMode] = useState(false);

  function AlertInfoError() {
    Swal.fire({
      title: "Error",
      text: "Ocorreu um erro",
      icon: "error",
      confirmButtonText: "Ok, fechar",
    }).then((result) => {
      if (result.isConfirmed) {
        setMode(false);
      }
    });
  }

  function AlertInfOk() {
    Swal.fire({
      title: "Sucesso",
      text: "Usuário cadastrado",
      icon: "success",
      confirmButtonText: "OK, fazer login",
    }).then((result) => {
      if (result.isConfirmed) {
        setMode(false);
        navigate("/home");
      }
    });
  }

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  //ADD USER DATA
  const addUser = (data) => {
    setMode(true);
    axios
      .post("http://localhost:3001/auth/register", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        AlertInfOk();
        setUser((prevUser) => [...prevUser, response.data]);
      })
      .catch((error) => {
        AlertInfoError();
        console.log(error);
      });
    console.log(user);
  };

  const [isAct, setAct] = useState(false);

  const toggleAct = () => {
    setAct(!isAct);
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
              <Link title="Home" onClick={() => navigate("/home")}></Link>
            </ItemsLi>
            <ItemsLi>
              <Link title="Entrar" onClick={""}></Link>
            </ItemsLi>
          </ItemsUl>
        </MenuItemsArea>
      </NavBar>
      <ContainerForms>
        <ContainerDataSignUp>
          <TextInfo>Cadastro</TextInfo>
          <form onSubmit={handleSubmit(addUser)}>
            <Inputs
              activate={true}
              control={control}
              errorMessage={errors?.email?.message}
              placeholder="Cadastre um Email"
              name="email"
              type="email"
              leftIcon={<MdEmail />}
            ></Inputs>
            <Inputs
              activate={true}
              control={control}
              errorMessage={errors?.password?.message}
              placeholder="Cadastre uma Senha"
              name="password"
              type="password"
              leftIcon={<MdLock />}
            ></Inputs>

            {mode ? (
              <LoadingContainer>
                <OrbitProgress
                  color="#000000"
                  size="small"
                  text="loading"
                  textColor=""
                />
              </LoadingContainer>
            ) : (
              <Button type="submit" content="Registrar"></Button>
            )}
          </form>
        </ContainerDataSignUp>
        <ContainerDataOptions active={isAct}>
          {isAct ? (
            <InfoText>
              <InfoText>
                <FcCheckmark />
                Aqui estão algumas dicas para obter uma senha forte:
              </InfoText>
              <br />
              <InfoText>
                <FcBookmark /> Pelo menos 12 caracteres.
              </InfoText>
              <br />
              <InfoText>
                <FcBookmark /> Maiúsculas, minúsculas, números e símbolos
              </InfoText>
              <br />
              <InfoText>
                <FcBookmark /> Use frases e palavras secretas
              </InfoText>
            </InfoText>
          ) : null}
          {isAct ? (
            <BsChevronDoubleLeft onClick={toggleAct} />
          ) : (
            <BsChevronDoubleRight onClick={toggleAct} />
          )}
        </ContainerDataOptions>
      </ContainerForms>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { SignUp };
