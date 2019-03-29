import styled from "styled-components";

const DivList = styled.div`
  ul,
  ol {
    li {
      cursor: pointer;
      text-align: right;
      padding: 2px;
      height: 30px;
      margin: 5px 0;
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  ul {
    list-style: none;
  }
`;

export default DivList;
