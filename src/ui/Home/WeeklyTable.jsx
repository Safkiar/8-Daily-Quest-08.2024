import styled from "styled-components";

const WeeklyTableLayout = styled.div`
  width: 50%;
  height: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-0);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const QuestTableHeader = styled.div`
  width: 100%;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-200);
  height: 5rem;
  color: var(--color-grey-800);
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;

  p {
    font-size: 2.2rem;
    padding: 0.4rem;
    letter-spacing: 0.3rem;
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    justify-content: center;
    padding-left: 0;
  }
`;

const InsideWeeklyTable = styled.div`
  width: 98%;
  height: 98%;
  padding: 1rem;
  margin: 0.5rem;
  /* background-color: var(--color-grey-200); */
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  ul {
    width: 100%;
  }

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 1rem;
    /* background-color: var(--color-grey-100); */
  }

  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    /* background-color: var(--color-grey-100); */
    width: 100%;
    text-align: center;
    font-size: 1.9rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    padding: 0.5rem;
    border-radius: 5%;
    /* background-color: var(--color-grey-100); */
    border-bottom: 1px solid var(--color-grey-100);
    font-size: 1.7rem;
    @media (max-width: 700px) {
      font-size: 1.4rem;
    }
    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid var(--color-grey-400);
      font-size: 1.5rem;
    }
    @media (max-width: 350px) {
      font-size: 1.5rem;
    }
  }

  div label:first-child {
    display: flex;
    justify-content: center;
    width: 6%;
    input {
      width: 55%;
      height: 90%;
      accent-color: var(--color-grey-600);
    }
    input:hover {
      color: inherit;
      accent-color: var(--color-grey-600);
    }
    input:focus {
      outline: none;
    }
    @media (max-width: 400px) {
      width: 12%;
    }
  }

  div p span {
    width: 5%;
  }

  div p:nth-child(2) {
    display: flex;
    justify-content: center;
    width: 65%;
  }

  div p:nth-child(3) {
    display: flex;
    justify-content: center;
    width: 10%;
  }

  div button:nth-child(4) {
    width: 5%;
    color: var(--color-grey-700);
    background-color: var(--color-grey-200);
    border-color: var(--color-grey-400);
    @media (max-width: 400px) {
      width: 8%;
    }
  }

  div button:nth-child(5) {
    width: 5%;

    color: var(--color-grey-700);
    background-color: var(--color-grey-200);
    border-color: var(--color-grey-400);
    @media (max-width: 400px) {
      width: 8%;
    }
  }
`;

function WeeklyTable({ children }) {
  return (
    <WeeklyTableLayout>
      <QuestTableHeader>
        <p>Weekly Quests</p>
      </QuestTableHeader>
      <InsideWeeklyTable>{children}</InsideWeeklyTable>
    </WeeklyTableLayout>
  );
}

export default WeeklyTable;
