import { useEffect } from "react";
import { useDeleteQuest } from "./useDeleteQuest";

function useDeleteExpired(quests) {
  const { deleteQuest } = useDeleteQuest();

  useEffect(() => {
    if (!Array.isArray(quests)) {
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    quests.forEach((quest) => {
      if (quest.date < today) {
        if (
          !quest.monday &&
          !quest.tuesday &&
          !quest.wednesday &&
          !quest.thursday &&
          !quest.sunday &&
          !quest.saturday &&
          !quest.friday &&
          !quest.everyday
        ) {
          console.log("Deleting quest:", quest);
          deleteQuest(quest.id);
        }
      }
    });
  }, [quests, deleteQuest]);
}

export default useDeleteExpired;
