import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 5rem;
  border-radius: 50%;
  width: auto;
  width: 5rem;
  margin-right: 20px;
  @media (max-width: 700px) {
    width: 3.5rem;
    height: 3.5rem;
  }
  @media (max-width: 450px) {
    width: 2.4rem;
    height: 2.4rem;
    min-width: 2.4rem;
    min-height: 2.4rem;
    margin-right: 3px;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo.jpg" : "/logo.jpg";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
