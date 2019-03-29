import styled from "styled-components";

const InputModifi = styled.input`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1.8rem;
  margin: 5px;
  width: 20px;
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

export default InputModifi;
