import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledAppLayout = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 8rem 1fr; */
  height: 100vh;

  @media (max-width: 1125px) {
    /* grid-template-columns: 1fr; */
  }
  @media (max-width: 450px) {
    /* grid-template-rows: 13rem 1fr; */
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  min-width: 300px;
  @media (max-width: 1150px) {
    padding: 32px 36px 58px;
  }
  @media (max-width: 875px) {
    padding: 30px 30px;
  }
  @media (max-width: 875px) {
    padding: 30px 30px;
  }
  @media (max-width: 600px) {
    padding: 10px 10px;
    div {
      font-size: 1.1rem;
    }
  }
`;

const Container = styled.div`
  max-width: 99%;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [menuActivation, setMenuActivation] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const showMenu = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const disableMenu = () => {
    setShowSideBar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1125) {
        setMenuActivation(true);
      } else {
        setMenuActivation(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledAppLayout>
      <Header
        menuActivation={menuActivation}
        showMenu={showMenu}
        disableMenu={disableMenu}
      />

      <Main>
        <Container>
          <Outlet />
          {/* used in the parent route component to indicate where the child route components should be rendered. */}
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
