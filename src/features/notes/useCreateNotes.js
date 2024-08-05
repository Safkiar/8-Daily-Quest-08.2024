import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditNotes } from "../../services/apiNotes";

export function useCreateNotes() {
  const queryClient = useQueryClient();

  const { mutate: createNote, isLoading: isCreating } = useMutation({
    mutationFn: createEditNotes,
    onSuccess: () => {
      toast.success("New Notes successfully created");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNote };
}
