import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Heading from "../../ui/Heading";
import RegisterLink from "../../ui/Login/RegisterLink";
import styled from "styled-components";

const LoginFormForInput = styled.div`
  input {
    width: 100%;
  }
`;

function LoginForm({ action, registerLink }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form typeA="typeA" onSubmit={handleSubmit} action={action}>
      <Heading as="h4">Login</Heading>
      <FormRowVertical label="Email address">
        <LoginFormForInput>
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </LoginFormForInput>
      </FormRowVertical>

      <FormRowVertical label="Password">
        <LoginFormForInput>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </LoginFormForInput>
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <RegisterLink registerLink={registerLink}></RegisterLink>
    </Form>
  );
}

export default LoginForm;
