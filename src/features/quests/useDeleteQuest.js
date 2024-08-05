import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteQuest as deleteQuestApi } from "../../services/apiQuests";

export function useDeleteQuest() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteQuest } = useMutation({
    mutationFn: deleteQuestApi,
    onSuccess: () => {
      // toast.success("Quest successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["quests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteQuest };
}
