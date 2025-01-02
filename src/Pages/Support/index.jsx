import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ItemsLi,
  ItemsUl,
  MenuItemsArea,
  NavBar,
  TitleNavBar,
  Wrapper,
  AreaLogoInfo,
  AreaInfo,
  Footer,
} from "./styles";

import { Link } from "../../Components/ButtonLink";
import Lottie from "lottie-react";

const Support = () => {
  const navigate = useNavigate();
  const moveToSignup = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <NavBar>
        <TitleNavBar>Set Works</TitleNavBar>

        <MenuItemsArea>
          <ItemsUl></ItemsUl>

          <ItemsLi>
            <Link title="Home" onClick={() => navigate("/home")}></Link>
          </ItemsLi>

          <ItemsLi>
            <Link title="Entrar" onClick={() => navigate("/signin")}></Link>
          </ItemsLi>

          <ItemsLi>
            <Link title="Cadastrar" onClick={() => navigate("/signup")}></Link>
          </ItemsLi>
        </MenuItemsArea>
      </NavBar>
      <AreaLogoInfo>
        <AreaInfo>Login User</AreaInfo>
        <AreaInfo>Login Administração </AreaInfo>
      </AreaLogoInfo>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { Support };
