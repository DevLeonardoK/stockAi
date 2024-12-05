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
import { MdCalendarViewDay } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();
  const moveToSignin = () => {
    navigate("/signin");
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
            <ItemsLi>Cadastrar</ItemsLi>
          </a>

          <ItemsLi>
            <Link title="Entrar" onClick={moveToSignin}></Link>
          </ItemsLi>
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
