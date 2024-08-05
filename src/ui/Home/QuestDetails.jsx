import styled from "styled-components";
import Modal from "../Modal";
import {
  HiArrowPathRoundedSquare,
  HiExclamationCircle,
  HiOutlineSun,
  HiPencil,
  HiXMark,
} from "react-icons/hi2";
import CreateQuestsForm from "../../features/quests/CreateQuestsForm";
import ConfirmDelete from "../ConfirmDelete";
import { useDeleteQuest } from "../../features/quests/useDeleteQuest";
import { Tooltip } from "@mui/material";

const CalendarDetails = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-grey-100);
  border-radius: 5%;

  h2 {
    background-color: var(--color-grey-300);
    color: var(--color-grey-700);
    border: 1px solid var(--color-grey-350);
    border-radius: 5%;
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: center;
    font-weight: bold;
    padding: 1rem;
    @media (max-width: 750px) {
      font-size: 2.3rem;
    }
    @media (max-width: 500px) {
      font-size: 2.2rem;
    }
  }
  div {
    text-align: center;
    margin: 0 auto;
    margin-top: 20rem;
    border-radius: 5%;

    width: 60%;
    font-weight: bold;
    font-size: 2rem;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    li {
      width: 99%;
      background-color: var(--color-grey-250);
      border: 1px solid var(--color-grey-300);
      text-align: center;
      padding: 1rem;
      margin: 1rem;
      border-radius: 5%;
      display: flex;
      justify-content: space-around;
      ${(props) =>
        props.show &&
        `
        background-color: rgba(0, 0, 0, 0.1);
        text-decoration: line-through;
      `}
      p:first-child {
        width: 60%;
        font-weight: bold;
        @media (max-width: 750px) {
          width: 100%;
          margin-bottom: 5px;
        }
      }
      p:nth-child(2) {
        width: 20%;
        font-weight: bold;
        @media (max-width: 750px) {
          width: 100%;
          margin-bottom: 5px;
        }
      }
      button {
        width: 9%;
        margin-bottom: 2px;
        margin-right: 4px;
        color: var(--color-grey-700);
        background-color: var(--color-grey-200);
        border-color: var(--color-grey-400);
        @media (max-width: 750px) {
          width: 20%;
          margin: 0 auto;
          margin-bottom: 5px;
        }
      }
      @media (max-width: 750px) {
        font-size: 1.5rem;
        flex-direction: column;
        justify-content: center;
      }
      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const QuestItem = styled.li`
  ${(props) =>
    !props.show &&
    `
    background-color: rgba(0, 0, 0, 0.3) !important;
    text-decoration: line-through;
    
  `}
`;

function QuestDetails({ quests, date }) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const { isDeleting, deleteQuest } = useDeleteQuest();

  return (
    <CalendarDetails>
      <h2>Quest for {formattedDate} </h2>
      {quests.length > 0 ? (
        <ul>
          {quests.map((quest) => (
            <QuestItem key={quest.id} show={quest.show}>
              <p>{quest.name} </p>
              <p>{quest.time.substring(0, 5)}</p>
              <Modal type="form">
                <Modal.Open opens="edit">
                  <button disabled={!quest.show}>
                    <HiPencil />
                  </button>
                </Modal.Open>
                <Modal.Window name="edit">
                  <CreateQuestsForm cabinToEdit={quest} />
                </Modal.Window>
              </Modal>
              <Modal>
                <Modal.Open opens="delete">
                  <button>
                    <HiXMark />
                  </button>
                </Modal.Open>
                <Modal.Window name="delete">
                  <ConfirmDelete
                    resourceName="cabins"
                    disabled={isDeleting}
                    onConfirm={() => deleteQuest(quest.id)}
                  />
                </Modal.Window>
              </Modal>
              {(quest.monday ||
                quest.tuesday ||
                quest.wednesday ||
                quest.thursday ||
                quest.friday ||
                quest.saturday ||
                quest.sunday) && (
                <Tooltip
                  title={
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "var(--color-grey-200)",
                        backgroundColor: "var(--color-grey-800)",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      interval
                    </span>
                  }
                >
                  <span>
                    <HiArrowPathRoundedSquare />
                  </span>
                </Tooltip>
              )}
              {quest.everyday && (
                <Tooltip
                  title={
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "var(--color-grey-200)",
                        backgroundColor: "var(--color-grey-800)",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      daily
                    </span>
                  }
                >
                  <span>
                    <HiOutlineSun />
                  </span>
                </Tooltip>
              )}
              {!quest.everyday &&
                !quest.monday &&
                !quest.tuesday &&
                !quest.wednesday &&
                !quest.thursday &&
                !quest.friday &&
                !quest.saturday &&
                !quest.sunday && (
                  <Tooltip
                    title={
                      <span
                        style={{
                          fontSize: "2rem",
                          color: "var(--color-grey-200)",
                          backgroundColor: "var(--color-grey-800)",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        quest
                      </span>
                    }
                  >
                    <span>
                      <HiExclamationCircle />
                    </span>
                  </Tooltip>
                )}
            </QuestItem>
          ))}
        </ul>
      ) : (
        <div>No Quest</div>
      )}
    </CalendarDetails>
  );
}

export default QuestDetails;
