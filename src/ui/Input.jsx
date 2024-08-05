import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: rgba(455, 455, 455, 0.3);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 2rem;
  width: 200px;
  /* color: black; */
  box-shadow: var(--shadow-sm);
  &[type="checkbox"]:focus {
    outline: none;
  }

  &[type="checkbox"] {
    height: 1.5rem;
  }
`;

export default Input;
