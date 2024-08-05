import {
  HiArrowPathRoundedSquare,
  HiPencil,
  HiTrash,
  HiOutlineSun,
  HiExclamationCircle,
  HiXMark,
} from "react-icons/hi2";
import { useUser } from "../features/authentication/useUser";
import useCountdown from "../hooks/useCountdown";
import Modal from "./Modal";
import CreateQuestsForm from "../features/quests/CreateQuestsForm";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteQuest } from "../features/quests/useDeleteQuest";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import useTestDays from "../hooks/useTestDays";
import { useState } from "react";
import { useEditQuest } from "../features/quests/useEditQuest";

function Quest({ quest, type = "general" }) {
  const timeLeft = useCountdown(quest.date, quest.time);
  const { user, isLoading } = useUser();
  const { isDeleting, deleteQuest } = useDeleteQuest();

  const IntervalGate = useTestDays({ quest });

  const { editQuest } = useEditQuest();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    if (checked) {
      const newQuestData = { show: false };

      editQuest({ newQuestData, id: quest.id });
    }
  };

  return (
    <>
      {isLoading && <p>Wait for data...</p>}
      {type === "general" && quest.nr === user.email && (
        <li key={quest.id}>
          <p>Info: {quest.info}</p>
          <p>
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </p>
          <hr />
        </li>
      )}
      {type === "weekly" && quest.nr === user.email && quest.show && (
        <div>
          <label>
            <input
              type="checkbox"
              id="myCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
          <Tooltip
            title={
              <span
                style={{
                  fontSize: "2rem",
                  color: "var(--color-grey-200)",
                  backgroundColor: "var(--color-grey-800)",
                  padding: "10px 30px",
                  borderRadius: "8px",
                }}
              >
                {quest.info}
              </span>
            }
          >
            <p>{quest.name}</p>
          </Tooltip>
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
                {quest.date}
              </span>
            }
          >
            <p>{quest.time.substring(0, 5)}</p>
          </Tooltip>

          <Modal type="form">
            <Modal.Open opens="edit">
              <button>
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
        </div>
      )}
      {type === "daily" &&
        quest.nr === user.email &&
        timeLeft.ExpireIn === 1 &&
        !IntervalGate &&
        quest.show && (
          <li key={quest.id}>
            <label>
              <input
                type="checkbox"
                id="myCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
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
                  {quest.info}
                </span>
              }
            >
              <p>{quest.name}</p>
            </Tooltip>
            <p>{quest.time.substring(0, 5)}</p>
            <Modal type="form">
              <Modal.Open opens="edit">
                <button>
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
            {!IntervalGate && !quest.everyday && (
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
            {!IntervalGate && quest.everyday && (
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
          </li>
        )}
    </>
  );
}

export default Quest;
