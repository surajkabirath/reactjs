import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgLighter};
`;
const ProductTitle = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 25px;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  width: 15vmax;
  margin: 1vmax auto;
  color: orange;
  ${mobile({ fontSize:"20px", fontWidth:"1000" })}
`;
const Products = () => {
  return (
    <>
      <ProductTitle>Special Product</ProductTitle>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
