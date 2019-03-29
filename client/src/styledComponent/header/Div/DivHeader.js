import styled from "styled-components";

const DivHeader = styled.div`
  grid-area: header;
  h1 {
    color: ${({ theme }) => theme.colors.lightGrey};
    text-align: center;
    margin: 10px 0 0 0;
    text-transform: uppercase;
  }
`;

export default DivHeader;
