import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Button from "./Button";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  min-width: 300px;
  padding: 1rem 1rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 700px) {
    gap: 0;
    justify-content: space-between;
    nav {
      ul {
        gap: 12px;
      }
      button {
        padding: 5px 10px;
        font-size: 1.2rem;
      }
      padding: 10px 10px;
      ul:nth-child(2) {
        li button:nth-child(3) {
        }
      }
    }
  }
  @media (max-width: 540px) {
    button {
      font-size: 1.1rem;
    }
    padding: 0px 10px;
    width: 100vw;
  }

  @media (max-width: 450px) {
    gap: 0.5rem;
    flex-direction: column;
    ul:nth-child(2) {
      gap: 3rem;
      li button {
        padding: 1.2rem 2.6rem;
      }
    }
    nav {
      width: 98vw;
      ul {
        justify-content: center;
        gap: 12px;
      }
      li a {
        padding: 1rem 2.55rem !important;
      }
      li div:last-child {
        padding: 1rem 2.55rem !important;
      }
    }
  }
  @media (max-width: 350px) {
    gap: 0;

    nav {
      ul {
        gap: 24px;
      }
      li a {
        padding: 0.8rem 1.4rem !important;
      }
      li div:last-child {
        padding: 0.8rem 1.4rem !important;
      }
    }
  }
`;

function Header({ menuActivation, showMenu, disableMenu }) {
  return (
    <StyledHeader>
      <MainNav />

      <HeaderMenu disableMenu={disableMenu} />
    </StyledHeader>
  );
}

export default Header;
