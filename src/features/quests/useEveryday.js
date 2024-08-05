import { useEffect } from "react";
import { useCreateQuest } from "./useCreateQuest";
import { useDeleteQuest } from "./useDeleteQuest";
import { useQuests } from "./useQuests";

function useEveryday() {
  const { createQuest } = useCreateQuest();
  const { deleteQuest } = useDeleteQuest();
  const { quests, isLoading, error } = useQuests();

  useEffect(() => {
    if (isLoading) {
      console.log("Loading quests...");
      return;
    }

    if (error) {
      console.error("Error fetching quests:", error);
      return;
    }

    if (!Array.isArray(quests)) {
      console.warn("Quests is not an array");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const existingQuestKeys = new Set(
      quests.map((quest) => `${quest.id2}-${quest.date}`)
    );

    const expiredQuests = quests.filter((quest) => {
      const questDate = new Date(quest.date);
      return quest.everyday && questDate < new Date(today);
    });

    expiredQuests.forEach((expiredQuest) => {
      const newQuestKey = `${expiredQuest.id2}-${today}`;

      if (existingQuestKeys.has(newQuestKey)) {
        console.log(
          `Quest with id2 ${expiredQuest.id2} already exists for today`
        );
        return;
      }

      const newQuest = {
        ...expiredQuest,
        id: Math.floor(Math.random() * 1000000).toString(),
        date: today,
        show: true,
      };

      createQuest(newQuest, {
        onSuccess: (data) => {
          console.log(`Quest ${newQuest.name} created for ${newQuest.date}`);

          deleteQuest(expiredQuest.id, {
            onSuccess: () => {
              console.log(
                `Old quest ${expiredQuest.name} deleted for ${expiredQuest.date}`
              );
            },
            onError: (err) => {
              console.error(
                `Failed to delete old quest ${expiredQuest.name}: ${err.message}`
              );
            },
          });
        },
        onError: (err) => {
          console.error(
            `Failed to create quest ${newQuest.name}: ${err.message}`
          );
        },
      });
    });
  }, [quests, isLoading, error, createQuest, deleteQuest]);
}

export default useEveryday;
