import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditQuest } from "../../services/apiQuests";

export function useCreateQuest() {
  const queryClient = useQueryClient();

  const { mutate: createQuest, isLoading: isCreating } = useMutation({
    mutationFn: createEditQuest,
    onSuccess: () => {
      // toast.success("New Quest successfully created");
      queryClient.invalidateQueries({ queryKey: ["quests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createQuest };
}
