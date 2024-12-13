import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #16697a;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 150px;
`;

export const ContainerLogin = styled.div`
  width: 450px;
  height: 420px;
  background-color: #fdc500;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 95%;
  height: 70px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fdc500;
  color: #16697a;
  font-size: 25px;
  font-family: "Parkinsans";
  border-radius: 20px 50px;
`;

export const NavBar = styled.nav`
  width: 95%;
  height: 120px;
  background-color: #fdc500;
  display: flex;
  color: #16697a;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px 20px;
`;

export const TitleNavBar = styled.h1`
  font-size: 80px;
  font-family: "Parkinsans";
  margin-left: 90px;
  font-weight: 600;
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
  color: #16697a;
  padding: 35px;
  list-style: none;
  font-family: "Parkinsans";
  text-decoration: none;
  opacity: 0.8;

  &:hover {
    color: #16697a;
    opacity: 1;
    text-decoration: underline;
  }
`;

export const TextInfo = styled.h2`
  font-family: "Manrope";
  font-size: 30px;
  font-weight: 500;
  color: #16697a;
  line-height: 80px;
  text-shadow: 1px 1px 3px #1e1e1e;
`;
