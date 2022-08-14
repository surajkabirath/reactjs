import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Search,
  ShoppingCartOutlined,
  WbSunnyOutlined
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  ${mobile({ height: "60px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 2px;
  color: #ce0808;
  ${mobile({ fontSize: "25px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const SearchSection = styled.div`
  border: 2px solid ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgLighter};
`;
const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  ${mobile({ width: "40px" , marginRight:"50px"})}
`;
const SearchIcon = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Menucart = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: capitalize;
  font-weight: 700;
  text-decoration: underline;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })}
`;

const Navbar = ({ mode, setMode }) => {
  return (
    <Container >
      <Wrapper>
        <Left>
          <Logo>eShop</Logo>
        </Left>
        <Center>
          <SearchSection>
          <Input placeholder="Search" />
            <SearchIcon>
              <Search />
            </SearchIcon>
          </SearchSection>
        </Center>
        <Right>
          <Menucart>REGISTER</Menucart>
          <Menucart>SIGN IN</Menucart>
          <Menucart onClick={() => setMode(!mode)}>
            <WbSunnyOutlined style={{fontSize: 30}}/>
          </Menucart>
          <Menucart>
            <Badge  color="primary" overlap="rectangular">
              <ShoppingCartOutlined style={{fontSize: 30}}/>
            </Badge>
          </Menucart>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
