import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function signOut(){
  await api.post(ApiRoutesEnum.SIGN_OUT);
}