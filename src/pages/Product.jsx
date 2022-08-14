import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Rating } from "@material-ui/lab";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  padding-bottom: 5px;
  border-bottom: 1.5px solid ${({ theme }) => theme.text};
  font-weight: 200;
  color: ${({ theme }) => theme.text};
`;
const ProductId = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1.5px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`;
const Review = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1.5px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`;
const Desc = styled.p`
  margin: 20px 0px;
  color: ${({ theme }) => theme.text};
`;

const Price = styled.div`
  padding-top: 10px;
  font-weight: 100;
  font-size: 40px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const AddContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid ${({ theme }) => theme.text};
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #d39218;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px;
  ${mobile({
    width: "200px",
    height: "65px",
    marginLeft: "10px",
    fontSize: "12px",
  })}
  &:hover {
    background-color: orange;
  }
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
const StatusCheck = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1.5px solid ${({ theme }) => theme.text};
`;
const Status = styled.div`
  color: ${({ theme }) => theme.text};
`;
const Stock = styled.div`
  color: green;
`;
const Description = styled.div`
  padding-bottom: 5px;
`;
const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/yN8JDFX/iphone-removebg-preview.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Apple iPhone 13</Title>
          <ProductId>Id:#f32jdg53553</ProductId>
          <Review>
            <Rating /> (1 Reviews)
          </Review>
          <Price>Rs.2,00,000/-</Price>
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
            <Button>ADD TO CART</Button>
          </AddContainer>
          <StatusCheck>
            <Status>Status:</Status>
            <Stock>InStock</Stock>
          </StatusCheck>
          <Desc>
            <Description>Description:</Description>
            iPhone 13 Pro takes a huge leap forward, bringing incredible speed
            to everything you do and dramatic new photo and video capabilities —
            all in two great sizes.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
