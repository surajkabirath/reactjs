
  import { Rating } from "@material-ui/lab";
  import styled from "styled-components";
  const Main = styled.div`
  /* background-color: ${({ theme }) => theme.bgLighter}; */
  `
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(247, 110, 110, 0.2);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
  `;
  
  const Container = styled.div`
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg};
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Price = styled.div`  
  color: ${({ theme }) => theme.text};
  padding-bottom: 10px;
  `
  const Name = styled.span`
   color: ${({ theme }) => theme.text};`
   const Rate = styled.div`
   background-color:white;
   `
   const Reviews = styled.div`
    color: ${({ theme }) => theme.text};`
  const Product = ({ item }) => {
    return (
        <>
        <Main>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Name>{item.name}</Name>
        <Rate>
        <Rating />
        </Rate>
        <Reviews>{item.Reviews}</Reviews>
        <Price>{item.price}</Price>
        <Info>
        </Info>
      </Container>
      </Main>
      </>
    );
  };
  
  export default Product;