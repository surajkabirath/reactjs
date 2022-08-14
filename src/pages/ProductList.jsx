import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
`
const Title = styled.h1`
padding-top: 5px;
 text-align: center;
  font-family: Roboto;
  font-size: 25px;
  width: 15vmax;
  margin: 1vmax auto;
  color: ${({ theme }) => theme.text};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: ${({ theme }) => theme.text};
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Wrapper>
      <Title>PRODUCTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>High Price</Option>
            <Option>Medium Price</Option>
            <Option>Low Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductList;