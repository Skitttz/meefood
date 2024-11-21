import {z} from "zod";

export const SignUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

export type SignUpForm = z.infer<typeof SignUpForm>