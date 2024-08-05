import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNotes";

export function useNotes() {
  const {
    isLoading,
    data: { data: notes } = {},
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return { isLoading, error, notes };
}
