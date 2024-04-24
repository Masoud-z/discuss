"use server";

import * as auth from "@/auth";

export async function signIn() {
  return await auth.signIn("github");
}

export async function signOut() {
  return await auth.signOut();
}
