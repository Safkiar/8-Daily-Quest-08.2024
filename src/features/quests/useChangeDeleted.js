import { useEffect } from "react";
import { useEditQuest } from "./useEditQuest";
import { useQuests } from "./useQuests";

function useChangeDeleted(questId2, questDate) {
  const { quests, isLoading, error } = useQuests();
  const { isEditing, editQuest } = useEditQuest();

  useEffect(() => {
    if (isLoading || error) {
      return;
    }

    if (!questId2 || !questDate) {
      return;
    }

    const dayOfWeek = new Date(questDate)
      .toLocaleDateString("en-US", { weekday: "long" })
      .toLowerCase();

    const questsToUpdate = quests.filter((quest) => quest.id2 === questId2);

    questsToUpdate.forEach((quest) => {
      const updatedQuest = { ...quest, [dayOfWeek]: false };

      editQuest(
        { newQuestData: updatedQuest, id: quest.id },
        {
          onSuccess: (data) => {
            console.log(`Quest ${quest.id} updated successfully`);
          },
          onError: (err) => {
            console.error(`Failed to update quest ${quest.id}: ${err.message}`);
          },
        }
      );
    });
  }, [quests, isLoading, error, questId2, questDate, editQuest]);

  return {
    isEditing,
  };
}

export default useChangeDeleted;
