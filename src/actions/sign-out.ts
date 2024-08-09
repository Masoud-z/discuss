"use server";

import * as auth from "@/auth";
import { paths } from "@/core/constants/routes";

export async function signOut() {
  return auth.signOut({ redirectTo: paths.home, redirect: true });
}
