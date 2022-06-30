import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Name too short"),
  email: z.string().email(),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
