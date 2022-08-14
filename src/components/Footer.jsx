import {
    Facebook,
    Instagram,
    MailOutline,
    PhoneIphoneOutlined,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";

  
  const Container = styled.div`
   color: ${({ theme }) => theme.text};
    display: flex;
    background-color: ${({ theme }) => theme.gray};
    ${mobile({ flexDirection: "column" })};
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color: #ce0808;
  font-weight: bold;
  letter-spacing: 2px;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.text};
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "gray" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>eShop</Logo>
          <Desc>
           One of the best online shop. You can fulfill your requirement from this eShop. 
          </Desc>
          <SocialContainer>
          <a href="https://www.facebook.com/suraj.kabirath"><SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon></a>
            <a href="https://www.instagram.com/surajkabirath"><SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon></a>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Laptop Brand</ListItem>
            <ListItem>Mobile</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Dharan(Bargachhi), Sunsari, Nepal
          </ContactItem>
          <ContactItem>
            <PhoneIphoneOutlined style={{marginRight:"10px"}}/> +9779810549624
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> eshop112@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/r4Y2YPx/payment-removebg-preview.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;