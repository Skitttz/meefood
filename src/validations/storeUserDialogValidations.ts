import {z} from "zod";

export const storeUserSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1).nullable(),
})

export type StoreProfileSchema = z.infer<typeof storeUserSchema>;