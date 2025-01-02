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
  TextInfo,
  Img,
  Footer,
} from "./styles";

import { Link } from "../../Components/ButtonLink";
import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";
import a2 from "../../assets/a2.json";
import a3 from "../../assets/a3.json";

const Home = () => {
  const navigate = useNavigate();

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
            <Link title="Cadastrar" onClick={() => navigate("/signup")}></Link>
          </ItemsLi>
        </MenuItemsArea>
      </NavBar>
      <AreaLogoInfo>
        <AreaInfo>
          <TextInfo>
            " Uma nova maneira
            <br />
            de organizar seu estoque "
          </TextInfo>
        </AreaInfo>
        <AreaInfo>
          <Lottie animationData={a3} loop={true} />
        </AreaInfo>
      </AreaLogoInfo>
      <Footer>Set Works - 2024</Footer>
    </Wrapper>
  );
};

export { Home };
