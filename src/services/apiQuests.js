import supabase from "./supabase";

export async function getQuests() {
  let query = supabase
    .from("quests")
    .select("*", { count: "exact" })
    .order("date", { ascending: true })
    .order("time", { ascending: true });
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Quests could not be loaded");
  }

  return { data, count };
}

export async function updateQuestInfo({ id, info }) {
  const { data, error } = await supabase
    .from("quests")
    .update({ info })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Quest info could not be updated");
  }

  return data;
}

export async function createEditQuest(newQuest, id) {
  let query = supabase.from("quests");

  if (!id) query = query.insert([{ ...newQuest }]);

  if (id) query = query.update({ ...newQuest }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Quest could not be created to supabase");
  }

  return data;
}

export async function deleteQuest(id) {
  const { data, error } = await supabase.from("quests").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Quest could not be deleted");
  }

  return data;
}
