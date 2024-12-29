import React from "react";
import { useNavigate } from "react-router-dom";
import imgCalendar from "../../assets/calendarImg.png";
import {
  ItemsLi,
  ItemsUl,
  MenuItemsArea,
  NavBar,
  TitleNavBar,
  Wrapper,
  AreaLogoInfo,
  AreaInfo,
  TextInfo,
  Img,
  Footer,
} from "./styles";

import { Link } from "../../Components/ButtonLink";

const Home = () => {
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
          <a href="">
            <ItemsLi>Suporte</ItemsLi>
          </a>
          <a href="">
            <ItemsLi>Entrar</ItemsLi>
          </a>

          <ItemsLi>
            <Link title="Cadastrar" onClick={moveToSignup}></Link>
          </ItemsLi>
        </MenuItemsArea>
      </NavBar>
      <AreaLogoInfo>
        <AreaInfo>
          <TextInfo>
            As suas tarefas <br />
            em um só lugar
          </TextInfo>
        </AreaInfo>
        <AreaInfo>
          <Img src={imgCalendar}></Img>
        </AreaInfo>
      </AreaLogoInfo>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { Home };
