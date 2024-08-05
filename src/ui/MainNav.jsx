import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  HiBookOpen,
  HiOutlineCalendarDays,
  HiOutlineHome,
} from "react-icons/hi2";
import Logo from "./Logo";
import Modal from "./Modal";
import CalendarView from "./Home/CalendarView";
import { useQuests } from "../features/quests/useQuests";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    @media (max-width: 700px) {
      font-size: 1.4rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
    @media (max-width: 700px) {
      width: 2rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-800);
    @media (max-width: 700px) {
      width: 2rem;
    }
  }

  @media (max-width: 700px) {
    span {
      display: none;
    }
  }
`;

const StyledCalendarLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: ${({ isActive }) =>
    isActive ? "var(--color-grey-800)" : "var(--color-grey-600)"};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-grey-50)" : "transparent"};
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ isActive }) =>
      isActive ? "var(--color-grey-800)" : "var(--color-grey-400)"};
    transition: all 0.3s;
    @media (max-width: 700px) {
      width: 2rem;
    }
  }

  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    cursor: pointer;
  }

  &:hover svg {
    color: var(--color-grey-800);
  }

  @media (max-width: 700px) {
    span {
      display: none;
    }
  }
`;

function MainNav({ disableMenu }) {
  const { isLoading, error, quests } = useQuests();
  const location = useLocation();

  const isCalendarActive = location.pathname === "/calendar";

  return (
    <nav>
      <NavList>
        <li>
          <Logo />
        </li>
        <li>
          <StyledNavLink to="/dashboard" onClick={() => disableMenu()}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <Modal type="calendar">
            <Modal.Open opens="Calendar">
              <StyledCalendarLink
                isActive={isCalendarActive}
                onClick={() => disableMenu()}
              >
                <HiOutlineCalendarDays />
                <span>Calendar</span>
              </StyledCalendarLink>
            </Modal.Open>
            <Modal.Window name="Calendar">
              <CalendarView quests={quests} />
            </Modal.Window>
          </Modal>
        </li>
        <li>
          <StyledNavLink to="/notepad" onClick={() => disableMenu()}>
            <HiBookOpen />
            <span>Notes</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
