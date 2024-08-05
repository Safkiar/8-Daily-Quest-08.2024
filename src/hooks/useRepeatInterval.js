import { useEffect } from "react";
import { useDeleteQuest } from "../features/quests/useDeleteQuest";

function useRepeatInterval(quests) {
  const { deleteQuest } = useDeleteQuest();
  useEffect(() => {
    if (!Array.isArray(quests)) {
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString().split("T")[0];

    quests.forEach((quest) => {
      if (quest.date.split("T")[0] < formattedYesterday) {
        if (
          quest.monday ||
          quest.tuesday ||
          quest.wednesday ||
          quest.thursday ||
          quest.sunday ||
          quest.saturday ||
          quest.friday ||
          quest.everyday
        ) {
          console.log("This interval is deleted", quest);
          deleteQuest(quest.id);
        }
      }
    });
  }, [quests]);
}

export default useRepeatInterval;
