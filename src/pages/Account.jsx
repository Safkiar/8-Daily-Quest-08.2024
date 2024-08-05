import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";

const StyledAccount = styled.div`
  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 950px) {
    width: auto;
    max-width: 97%;
    form {
      padding: 1.8rem 3rem;
    }
    h3 {
      font-size: 1.6rem;
      margin-top: 7px;
    }
    h1,
    h3 {
      text-align: center;
    }
    div {
      grid-template-columns: 18rem 24rem 0.8fr;
    }
    button {
      font-size: 1.2rem;
      padding: 1rem 1.4rem;
    }
    @media (max-width: 600px) {
      div {
        grid-template-columns: 16rem 22rem 0.8fr;
        justify-content: center;
      }
    }

    @media (max-width: 505px) {
      form div {
        grid-template-columns: 1fr 1fr;
      }
      form div:nth-of-type(3) {
        display: flex;
        flex-direction: column;
      }
      form div:nth-of-type(4) {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

function Account() {
  return (
    <StyledAccount>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </StyledAccount>
  );
}

export default Account;
