import styled from "styled-components";

export const Wrapper = styled.main`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  align-items: center;
`;

export const NavBar = styled.nav`
  position: static;
  margin-top: 20px;
  width: 95%;
  height: 120px;
  background-color: #fff;
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
`;

export const TitleNavBar = styled.h1`
  font-size: 80px;
  font-family: "Montserrat";
  margin-left: 90px;
  font-weight: 700;
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
  font-size: 21px;
  font-weight: 500;
  color: #000;
  padding: 35px;
  list-style: none;
  font-family: "Montserrat";
  text-decoration: none;
  opacity: 0.8;

  &:hover {
    color: #000;
    opacity: 1;
    text-decoration: underline;
  }
`;

export const AreaLogoInfo = styled.section`
  display: flex;
  width: 100%;
  height: 75vh;
  justify-content: space-evenly;
`;

export const AreaInfo = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.h2`
  font-family: "Ubuntu";
  font-size: 50px;
  font-weight: 500;
  color: #fff;
  line-height: 80px;
  text-indent: 50px;
`;

export const Img = styled.img`
  width: 390px;
  height: 390px;
  filter: drop-shadow(3px 3px 7px #2e2e2e);
  transition: 0.85s;

  &:hover {
    transform: rotate(30deg);
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 95%;
  height: 70px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 25px;
  font-family: "Montserrat";
  font-weight: 400;
`;
