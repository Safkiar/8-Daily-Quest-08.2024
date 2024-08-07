import Heading from "../ui/Heading";
import DailyTable from "../ui/Home/DailyTable";
import WeeklyTable from "../ui/Home/WeeklyTable";
import Row from "../ui/Row";
import styled from "styled-components";
import { HiArrowsPointingIn, HiPaperAirplane } from "react-icons/hi2";

import { useQuests } from "../features/quests/useQuests";
import Quest from "../ui/Quest";
import QuestV from "../ui/QuestV";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import CreateQuestsForm from "../features/quests/CreateQuestsForm";
import groupQuestsByDay from "../hooks/useGroupQuestsByDay";
import useIntervals from "../features/quests/useIntervals";
import useDeleteExpired from "../features/quests/useDeleteExpired";
import useRepeatInterval from "../hooks/useRepeatInterval";
import useEveryday from "../features/quests/useEveryday";
import { useUser } from "../features/authentication/useUser";

const QuestTables = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 5rem;
  @media (max-width: 1000px) {
    flex-direction: column;

    height: auto;
  }
`;

function Dashboard() {
  const { isLoading, error, quests } = useQuests();
  const { user, isLoadingUser } = useUser();

  useDeleteExpired(quests);
  useIntervals();
  useEveryday();
  useRepeatInterval(quests);

  const groupedQuests = groupQuestsByDay(quests);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Add Quest</Heading>
        <Modal type="form">
          <Modal.Open opens="cabin-form">
            <Button variation="third">
              {" "}
              <HiPaperAirplane />
            </Button>
          </Modal.Open>
          <Modal.Window name="cabin-form">
            <CreateQuestsForm />
          </Modal.Window>
        </Modal>
      </Row>
      <QuestTables>
        <DailyTable>
          {!isLoading && quests && (
            <ul>
              {quests.map((quest) => (
                <Quest key={quest.id} quest={quest} type="daily" />
              ))}
            </ul>
          )}

          {!isLoading && quests && (
            <ul>
              {quests.map((quest) => (
                <QuestV key={quest.id} quest={quest} type="daily" />
              ))}
            </ul>
          )}
        </DailyTable>
        <WeeklyTable>
          {!isLoading && quests && (
            <ul>
              {Object.entries(groupedQuests).map(([day, quests]) => {
                const visibleQuests = quests.filter(
                  (quest) => quest.show && quest.nr === user.email
                );
                if (visibleQuests.length > 0) {
                  return (
                    <li key={day}>
                      <h4>{day}</h4>
                      {visibleQuests.map((quest) => (
                        <Quest key={quest.id} quest={quest} type="weekly" />
                      ))}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          )}
        </WeeklyTable>
      </QuestTables>
    </>
  );
}

export default Dashboard;
