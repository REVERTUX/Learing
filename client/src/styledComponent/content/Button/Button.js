import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 180px;
  right: 100px;
  margin: 5px 0;
  width: 150px;
  height: 30px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  border: 0;
  color: ${({ theme }) => theme.colors.lightestGrey};

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
