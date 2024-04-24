"use server";

import * as auth from "@/auth";

export function signIn() {
  return auth.signIn("github");
}

export function signOut() {
  return auth.signOut();
}
