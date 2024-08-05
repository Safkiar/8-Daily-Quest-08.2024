import React, { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useQuests } from "../features/quests/useQuests";
import { useUpdateQuestInfo } from "../features/quests/useUpdateInfo";
import Remainer from "../ui/Remainer";

function Bookings() {
  const { isLoading, error, quests, count } = useQuests();
  const { updateQuest } = useUpdateQuestInfo();

  const [newInfo, setNewInfo] = useState({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <></>;
}

export default Bookings;
