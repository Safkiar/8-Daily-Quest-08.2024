import useTestDays from "./useTestDays";

const groupQuestsByDay = (quests) => {
  const groupedQuests = {};
  const today = new Date();

  const startDate = new Date(today);
  startDate.setHours(0, 0, 0, 0);
  startDate.setDate(today.getDate() + 1);

  const endDate = new Date(today);
  endDate.setHours(23, 59, 59, 999);
  endDate.setDate(today.getDate() + 7);

  if (Array.isArray(quests)) {
    quests.forEach((quest) => {
      if (useTestDays({ quest })) {
        return;
      }

      const questDate = new Date(quest.date);
      const normalizedQuestDate = new Date(questDate);
      normalizedQuestDate.setHours(0, 0, 0, 0);

      if (normalizedQuestDate >= startDate && normalizedQuestDate <= endDate) {
        const day = questDate.toLocaleDateString("en-US", {
          weekday: "long",
        });

        if (!groupedQuests[day]) {
          groupedQuests[day] = [];
        }

        groupedQuests[day].push(quest);
      }
    });
  }

  return groupedQuests;
};

export default groupQuestsByDay;
