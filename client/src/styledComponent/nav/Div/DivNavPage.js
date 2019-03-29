import styled from "styled-components";

const DivNavPage = styled.div`
    grid-area: nav-page;
    display: flex;
    justify-content: center;

    ul {
      list-style: none;
      margin: 20px;
      li {
        display: inline-block;
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.grey};
          margin: 20px;
          font-size: 1.8rem;
        }
      }
`;

export default DivNavPage;
