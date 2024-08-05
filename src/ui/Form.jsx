import styled, { css } from "styled-components";

const Form = styled.form`
  overflow-y: auto;
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-50);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 500px) {
        padding: 10px 30px;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 50rem;

      @media (max-width: 750px) {
        width: 100%;
        font-size: 1.2rem;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  /* typeA --- */
  ${(props) =>
    props.typeA === "typeA" &&
    css`
      width: 100%;
      padding: 40px;
      transition: 0.18s ease transform;
      translate: 0;
      background-color: transparent;
      border: none;

      ${({ action }) =>
        action &&
        css`
          transition: none;
          transform: translateX(-600px);
        `}
    `}
  ${(props) =>
    props.typeB === "typeB" &&
    css`
      position: absolute;
      transform: translateX(600px);
      /* transition: none; */
      width: 100%;
      padding: 40px;
      transition: 0.28s ease transform;
      background-color: transparent;
      border: none;

      ${({ action }) =>
        action &&
        css`
          transform: translateX(0);
        `}
    `}
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
