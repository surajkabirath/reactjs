import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
const Container = styled.div`

`;

const Wrapper = styled.div`
 background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const AddContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  ${mobile({ width: "100%" })}
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const Buttons = styled.button`
  border: none;
  background-color: rgba(121, 69, 69, 0.119);
  padding: 0.5vmax;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s;
  &:hover {
    background-color: #4c4848;
    color: white;
  }
`;
const Buttonss = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  color: ${({ theme }) => theme.text};
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
 color: ${({ theme }) => theme.text};`;

const ProductId = styled.span`
 color: ${({ theme }) => theme.text};`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  color: ${({ theme }) => theme.text};
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  ${mobile({ flexDirection: "column" })}
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;
const Price = styled.div`
  padding-top: 10px;
  font-weight: 100;
  font-size: 40px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR ORDER</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/yN8JDFX/iphone-removebg-preview.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Iphone
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 326587326587
                  </ProductId>
                  <ProductColor color="sky" />
                </Details>
              </ProductDetail>
              <AddContainer>
            <AmountContainer>
              <Buttons>
                <Remove />
              </Buttons>
              <Buttonss>
                <Amount>1</Amount>
              </Buttonss>
              <Buttons>
                <Add />
              </Buttons>
            </AmountContainer>
            <Price>Rs.2,00,000/-</Price>
          </AddContainer>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs.200100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charge</SummaryItemText>
              <SummaryItemPrice>Rs.100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs.200100</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;