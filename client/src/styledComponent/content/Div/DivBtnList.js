import styled from "styled-components";

const DivBtnList = styled.div`
  display: inline-block;
  width: 30px;

  ul {
    li {
      border: none;
      padding: 0;
      margin: 0 0 5px 0;
    }
    button {
      cursor: pointer;
      font-size: 1.4rem;
      padding: 2px;
      height: 30px;
      width: 25px;
      background: ${({ theme }) => theme.colors.grey};
      border-radius: 5px;
      border: 0;
      color: ${({ theme }) => theme.colors.lightestGrey};

      :hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export default DivBtnList;
