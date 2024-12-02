import React from "react";
import {
  ItemsLi,
  ItemsUl,
  MenuItemsArea,
  NavBar,
  TitleNavBar,
  Wrapper,
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <NavBar>
        <TitleNavBar>Set Works</TitleNavBar>
        <MenuItemsArea>
          <ItemsUl></ItemsUl>
          <a href="">
            <ItemsLi>Planos</ItemsLi>
          </a>
          <a href="">
            <ItemsLi>Works</ItemsLi>
          </a>
          <a href="">
            <ItemsLi>Suporte</ItemsLi>
          </a>
        </MenuItemsArea>
      </NavBar>
    </Wrapper>
  );
};

export { Home };
