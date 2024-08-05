import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: rgba(455, 455, 455, 0.3);
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-sm);
  width: 200px;
  height: 8rem;
  /* @media (max-width: 400px) {
    width: 120px;
  } */
`;

export default Textarea;
