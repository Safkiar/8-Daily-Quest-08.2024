import { useQuery } from "@tanstack/react-query";
import { getQuests } from "../../services/apiQuests";

export function useQuests() {
  // QUERY
  const {
    isLoading,
    data: { data: quests, count } = {},
    error,
  } = useQuery({
    queryKey: ["quests"],
    queryFn: getQuests,
  });

  return { isLoading, error, quests, count };
}
