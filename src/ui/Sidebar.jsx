import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1125px) {
    display: ${(props) => (props.showSideBar ? "flex" : "none")};
    position: ${(props) => (props.showSideBar ? "fixed" : "relative")};
    z-index: 1000;
    height: 100%;
    width: 100vw;
    margin-top: 50px;
  }
`;

function Sidebar({ showSideBar, disableMenu }) {
  return (
    <StyledSidebar showSideBar={showSideBar}>
      {/* <MainNav disableMenu={disableMenu} /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
