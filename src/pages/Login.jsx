import styled, { css } from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import { useState } from "react";

const LoginLayout = styled.main`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 60rem;
  align-content: center;
  justify-content: center;
  gap: 2.2rem;
  background: url("/SUN.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  color: #3d2c2e;

  main {
    /* overflow-y: auto; */

    input[type="password"] {
      /* width: 100%; */
    }
  }

  h2 {
    text-align: center;
    min-width: 0;
  }

  h3 {
    text-align: center;
    max-width: 100%; /* Prevents overflowing */
    overflow-wrap: break-word; /* Ensures long words break correctly */
  }

  @media (max-width: 650px) {
    main {
      width: 95vw;
      margin: 0 auto;
    }

    form {
      /* width: 90vw; */
      margin: 0 auto;
      font-size: 1.2rem;

      button {
        font-size: 1.4rem;
        width: 60%;
        margin: 0 auto;
      }
    }

    h3 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 420px) {
    align-content: flex-start;
    gap: 1.2rem;

    h4 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.2rem;
      max-width: 100%; /* Ensures h3 does not overflow */
      overflow-wrap: break-word;
    }

    main {
      padding-top: 40px;
      padding-bottom: 20px;
    }

    form {
      min-width: 280px;

      button {
        font-size: 1.2rem;
        width: 60%;
      }
    }
  }

  @media (max-width: 360px) {
    h4 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    form {
      button {
        font-size: 1.1rem;
        width: 80%;
      }
    }
  }
`;

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  height: 500px;
  background: transparent;
  border: 3px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  transition: height 0.2s ease;
  overflow: hidden;

  ${({ action }) =>
    action &&
    css`
      height: 520px;
    `}

  h1 {
    font-size: 36px;
    text-align: center;
  }

  button {
    width: 100%;
    height: 45px;
    background: #fae1c4;
    color: #3d2c2e;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }

  Input {
    background-color: #ffe4c4;
  }
`;

function Login() {
  const [action, setAction] = useState();

  const registerLink = () => {
    setAction(`active`);
  };

  const loginLink = () => {
    setAction(``);
  };

  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Your Quests are waiting for you!</Heading>
      <Heading as="h3">For test purposes</Heading>
      <Heading as="h3">use login and password:</Heading>
      <Heading as="h3">user@example.com</Heading>
      <Wrapper>
        <LoginForm action={action} registerLink={registerLink} />
        <SignupForm action={action} loginLink={loginLink} />
      </Wrapper>
    </LoginLayout>
  );
}

export default Login;
