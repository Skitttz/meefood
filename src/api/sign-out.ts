import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function signOut(): Promise<void> {
  try {
    await api.post(ApiRoutesEnum.SIGN_OUT);
  } catch {
    throw new Error("Unable to sign out. Please try again later.");
  }
}
