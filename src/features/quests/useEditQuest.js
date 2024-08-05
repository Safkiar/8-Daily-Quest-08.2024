import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditQuest } from "../../services/apiQuests";

export function useEditQuest() {
  const queryClient = useQueryClient();

  const { mutate: editQuest, isLoading: isEditing } = useMutation({
    mutationFn: ({ newQuestData, id }) => createEditQuest(newQuestData, id),
    onSuccess: () => {
      // toast.success("Quest successfully edited");
      queryClient.invalidateQueries({ queryKey: ["quests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editQuest };
}
