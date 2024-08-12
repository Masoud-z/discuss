import { paths } from "@/core/constants/routes";
import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get("term");
  if (!term || typeof term !== "string") {
    redirect(paths.home);
  } else {
    redirect(paths.search(term));
  }
}
