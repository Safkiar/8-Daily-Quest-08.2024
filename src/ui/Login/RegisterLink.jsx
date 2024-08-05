import styled from "styled-components";

const RegisterLinkDiv = styled.div`
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
  p {
    text-decoration: none;
    font-weight: 600;
  }
  p:last-child:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function RegisterLink({ loginLink, registerLink }) {
  return (
    <RegisterLinkDiv>
      {loginLink && (
        <>
          <p>Already have an account?</p>
          <p href="#" onClick={loginLink}>
            Login
          </p>
        </>
      )}
      {registerLink && (
        <>
          <p>Don`t have an account?</p>
          <p href="#" onClick={registerLink}>
            Register
          </p>
        </>
      )}
    </RegisterLinkDiv>
  );
}

export default RegisterLink;
