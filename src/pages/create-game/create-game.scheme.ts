import * as z from "zod"
 
export const createGameScheme = z.object({
  name: z.string().max(30),
  connectionCode: z.string().length(6),
  mode: z.enum(["quiz", "one-word", "speaking"]),
  isPublic: z.boolean()
})