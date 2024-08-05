import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useUser } from "../../features/authentication/useUser";
import { format, startOfDay, isSameDay } from "date-fns";
import QuestDetails from "./QuestDetails";
import useDeleteExpired from "../../features/quests/useDeleteExpired";
import useIntervals from "../../features/quests/useIntervals";
import useEveryday from "../../features/quests/useEveryday";
import useRepeatInterval from "../../hooks/useRepeatInterval";

// Styled components
const CalendarTable = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
  @media (max-width: 900px) {
    justify-content: flex-start;
    width: 100%;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 99%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 99%;
  }

  .react-calendar {
    width: 60%;
    max-width: 100%;
    background-color: white;
    border: 1px solid #a0a096;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: bold;
    padding: 5px;
    @media (max-width: 900px) {
      width: 350px;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .react-calendar__month-view__days__day {
    height: 100px;
  }

  .react-calendar__tile--now {
    background-color: var(--color-grey-500) !important;
    border-radius: 10%;
  }

  .react-calendar__tile--marked {
    background-color: var(--color-grey-200);
    border: 1px solid black;
    color: black;
    border-radius: 10%;
  }

  .react-calendar__tile--active {
    background-color: var(--color-grey-650) !important;
    color: white !important;
    border-radius: 10% !important;
  }

  .react-calendar__month-view__days__day:hover {
    background-color: rgba(0, 0, 0, 0.516) !important;
    border-radius: 10% !important;
  }
`;

const MontlyQuest = styled.div`
  width: 50%;
  padding: 2rem;
  overflow-y: auto;
  @media (max-width: 900px) {
    padding: 1rem 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

function CalendarView({ quests }) {
  const [date, setDate] = useState(new Date());
  const [filteredQuests, setFilteredQuests] = useState([]);
  const { user, isLoading } = useUser();

  useDeleteExpired(quests);
  useIntervals();
  useEveryday();
  useRepeatInterval(quests);

  useEffect(() => {
    if (!isLoading && user) {
      const userFilteredQuests = quests.filter(
        (quest) => quest.nr === user.email
      );

      setFilteredQuests(userFilteredQuests);
    }
  }, [quests, user, isLoading]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const formattedDate = format(newDate, "yyyy-MM-dd");
    const filtered = filteredQuests.filter(
      (quest) => quest.date === formattedDate
    );
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const calendarDate = startOfDay(date);

      const userFilteredQuests = quests.filter(
        (quest) => quest.nr === user.email
      );

      const markedDates = userFilteredQuests.map((quest) => {
        const [year, month, day] = quest.date.split("-");
        return startOfDay(new Date(year, month - 1, day));
      });

      const isMarked = markedDates.some((markedDate) =>
        isSameDay(calendarDate, markedDate)
      );

      return isMarked ? "react-calendar__tile--marked" : null;
    }
  };

  return (
    <CalendarTable>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={tileClassName}
      />
      <MontlyQuest>
        <QuestDetails
          date={date}
          quests={filteredQuests.filter(
            (quest) => quest.date === format(date, "yyyy-MM-dd")
          )}
        />
      </MontlyQuest>
    </CalendarTable>
  );
}

export default CalendarView;
