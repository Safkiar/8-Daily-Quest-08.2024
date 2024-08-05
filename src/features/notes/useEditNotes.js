import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditNotes } from "../../services/apiNotes";

export function useEditNotes() {
  const queryClient = useQueryClient();

  const { mutate: editNotes, isLoading: isEditing } = useMutation({
    mutationFn: ({ newNotesData, id }) => createEditNotes(newNotesData, id),
    onSuccess: () => {
      toast.success("Notes successfully edited");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editNotes };
}
