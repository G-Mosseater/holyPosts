import { supabase } from "../supabase/client";
import { redirect } from "react-router-dom";

export async function postsLoader() {
  const { data: posts, error } = await supabase
    .from("holy_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);

  return posts;
}

export async function postAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const { error } = await supabase.from("holy_posts").insert([postData]);
  if (error) {
    throw new Error(" An error occured, cannot post");
  }
  return redirect("/");
}

export async function postDetailsLoader({ params }) {
  const { data: post, error } = await supabase
    .from("holy_posts")
    .select("*")
    .eq("id", params.id)
    .single();
  if (error) {
    throw new Error("Could not find the post.");
  }
  return post;
}

export async function deletePost({ params }) {
  const { error } = await supabase
    .from("holy_posts")
    .delete()
    .eq("id", Number(params.id));
  if (error) {
    throw new Error(error.message);
  }
  return redirect("/");
}
