import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
      margin-top: 10px;

      h1 {
        margin-left: 5%;
      }

      @media (max-width: 1000px) {
        justify-content: space-evenly;
        gap: 0;
        margin: 0;
        h1 {
          margin-left: 0;
        }
      }
      @media (max-width: 900px) {
        margin-top: 10px;
        button {
          font-size: 2rem;
        }
      }
      @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        h1 {
          display: flex;
          justify-content: center;
          padding: 0;
          gap: 0;
          width: 100%;
          padding-bottom: 10px;
          padding-top: 10px;
        }
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
      @media (max-width: 505px) {
        form {
          padding: 2rem 3rem;
        }

        form div {
          grid-template-columns: 8rem 1fr 1fr;
        }
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
