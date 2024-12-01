import { ApiRoutesEnum } from "@/routes/routes";
import { api } from "@/lib/axios";
export interface SignInBody {
  email: string;
}

export async function signIn({ email }: SignInBody): Promise<void> {
  try {
    await api.post(ApiRoutesEnum.AUTH, { email });
  } catch {
    throw new Error("Unable to sign in. Please try again later.");
  }
}
