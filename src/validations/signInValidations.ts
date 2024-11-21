import {z} from "zod";

export const SignInForm = z.object({
  email: z.string().email()
})

export type SignInForm = z.infer<typeof SignInForm>