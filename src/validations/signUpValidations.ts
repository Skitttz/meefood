import { z } from "zod";

export const SignUpForm = z.object({
  restaurantName: z
    .string()
    .min(1, { message: "Restaurant name is required." }) ,
  managerName: z
    .string()
    .min(1, { message: "Manager name is required." }) ,
  email: z
    .string()
    .email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters." }),
});

export type SignUpForm = z.infer<typeof SignUpForm>;
