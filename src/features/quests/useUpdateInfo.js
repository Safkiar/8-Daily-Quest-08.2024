import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateQuestInfo } from "../../services/apiQuests";

export function useUpdateQuestInfo() {
  const queryClient = useQueryClient();

  const { mutate: updateQuest, isLoading: isUpdating } = useMutation({
    mutationFn: async ({ id, info, date, time }) => {
      const result = await updateQuestInfo({ id, info, date, time });
      return result;
    },
    onSuccess: () => {
      toast.success("Quest info updated successfully");
      queryClient.invalidateQueries("quests");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateQuest, isUpdating };
}
