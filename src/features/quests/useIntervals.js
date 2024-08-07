import { useEffect } from "react";
import { useCreateQuest } from "./useCreateQuest";
import { useQuests } from "./useQuests";

function useIntervals() {
  const { createQuest } = useCreateQuest();
  const { quests, isLoading, error } = useQuests();

  useEffect(() => {
    if (isLoading || error || !Array.isArray(quests)) {
      return;
    }

    const today = new Date();
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const sevenDaysLater = new Date(today.getTime() + 7 * oneDayInMillis);

    const existingQuestKeys = new Set(
      quests.map((quest) => `${quest.id2}-${quest.date}`)
    );

    const newQuests = [];

    quests.forEach((quest) => {
      const questDate = new Date(quest.date);
      const questDayOfWeek = daysOfWeek[questDate.getDay()];

      if (questDate <= sevenDaysLater && !quest.everyday) {
        daysOfWeek.forEach((day) => {
          if (quest[day] && day !== questDayOfWeek) {
            const newQuestDate = new Date();
            newQuestDate.setDate(
              today.getDate() +
                ((daysOfWeek.indexOf(day) - today.getDay() + 7) % 7)
            );

            const newQuest = {
              ...quest,
              id: Math.floor(Math.random() * 1000000).toString(),
              date: newQuestDate.toISOString().split("T")[0],
              show: true, // Ensure the new quest has show set to true
            };

            const newQuestKey = `${quest.id2}-${newQuest.date}`;
            if (!existingQuestKeys.has(newQuestKey)) {
              newQuests.push(newQuest);
              existingQuestKeys.add(newQuestKey);
            }
          }
        });
      }
    });

    newQuests.forEach((newQuest) => {
      createQuest(newQuest, {
        onSuccess: (data) => {
          console.log(`Quest ${newQuest.name} created for ${newQuest.date}`);
        },
        onError: (err) => {
          console.error(
            `Failed to create quest ${newQuest.name}: ${err.message}`
          );
        },
      });
    });
  }, [quests, isLoading, error, createQuest]);
}

export default useIntervals;
