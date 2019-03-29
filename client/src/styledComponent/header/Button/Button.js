import styled from "styled-components";

const Button = styled.button`
  margin: 5px 0;
  width: 50%;
  height: 30px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  border: 0;
  color: ${({ theme }) => theme.colors.lightestGrey};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
