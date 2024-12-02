import styled from "styled-components";

export const Wrapper = styled.main`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const NavBar = styled.nav`
  min-width: 100%;
  height: 120px;
  background-color: blue;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const TitleNavBar = styled.h1`
  font-size: 36px;
  font-family: Arial;
  margin-left: 90px;
`;

export const MenuItemsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 90px;
`;

export const ItemsUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsLi = styled.li`
  font-size: 20px;
  color: yellow;
  padding: 30px;
  list-style: none;
  font-family: Arial;
  text-decoration: none;
`;
