import styled from "styled-components";

const DivNav = styled.div`
    grid-area: nav-sub;

    ul {
      list-style: none;
      padding: 80px 0 0 20%;
      width: 150px;
      text-align: center;

      li {
        a {
          display: flex;
          flex-direction: column;
          padding: 5px;
          margin: 10px 0 0 0;
          width: 100%;
          border-bottom: 1px ${({ theme }) => theme.colors.grey} solid;
          color: ${({ theme }) => theme.colors.white};
          text-decoration: none;
          &:hover {
            color: ${({ theme }) => theme.colors.lightestGrey};
          }
        }
      }
    }
  }
`;

export default DivNav;
