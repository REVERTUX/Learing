import styled from "styled-components";

const Input = styled.input`
  color: ${({ theme }) => theme.colors.white};
  margin: 5px 0;
  background: transparent;
  border: 0;
  outline: none;
  border-bottom: 1px ${({ theme }) => theme.colors.white} solid;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.darkGrey} inset;
  }

  :-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
  }
`;

export default Input;
