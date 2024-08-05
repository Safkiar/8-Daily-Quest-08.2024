import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteNote as deleteNoteApi } from "../../services/apiNotes";

export function useDeleteNotes() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteNote } = useMutation({
    mutationFn: deleteNoteApi,
    onSuccess: () => {
      toast.success("Notes successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteNote };
}
