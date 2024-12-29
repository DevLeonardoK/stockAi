import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #000;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 150px;
`;

export const ContainerForms = styled.div`
  width: 1100px;
  height: 450px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDataSignUp = styled.div`
  width: 600px;
  height: 450px;
  background-color: #fff;
  border-radius: 25px 0px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;
export const ContainerDataOptions = styled.div`
  width: ${(props) => (props.active ? "350px" : "70px")};
  height: 450px;
  background-color: #dcdcdc;
  border-radius: 0px 25px 25px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: width 0.65s ease;
  text-align: center;
  font-size: 25px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 95%;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 25px;
  font-family: "Montserrat";
  font-weight: 400;
`;

export const NavBar = styled.nav`
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
  font-size: 20px;
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

export const TextInfo = styled.h2`
  font-family: "Montserrat";
  font-size: 42px;
  font-weight: 400;
  color: #000;
  line-height: 80px;
`;

export const InfoText = styled.p`
  color: #000;
  font-family: "Montserrat";
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: left;
  margin-left: 10px;
`;
