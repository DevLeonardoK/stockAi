import React from "react";
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
import { MdCalendarViewDay } from "react-icons/md";

const Home = () => {
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
            <ItemsLi>Cadastrar</ItemsLi>
          </a>
          <a href="">
            <ItemsLi>Entrar</ItemsLi>
          </a>
        </MenuItemsArea>
      </NavBar>
      <AreaLogoInfo>
        <AreaInfo>
          <TextInfo>
            -- As suas tarefas <br />
            em um só lugar --
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
