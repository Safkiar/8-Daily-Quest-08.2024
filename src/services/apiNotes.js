import supabase from "./supabase";

export async function getNotes() {
  let query = supabase.from("notes").select("*");
  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Notes could not be loaded");
  }
  return { data };
}

export async function createEditNotes(noteData, id) {
  let query = supabase.from("notes");

  if (!id) {
    query = query.insert([noteData]);
  }

  if (id) {
    query = query.update(noteData).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Notes could not be created to supabase");
  }

  return data;
}

export async function deleteNote(id) {
  const { data, error } = await supabase.from("notes").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Notes could not be deleted");
  }
  return data;
}
