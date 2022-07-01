import { createUserSchema } from "schema/user.schema";
import { createRouter } from "server/createRouter";
import * as trpc from "@trpc/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const userRouter = createRouter().mutation("register", {
  input: createUserSchema,
  resolve: async ({ ctx, input }) => {
    const { email, name } = input;
    try {
      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new trpc.TRPCError({
            code: "CONFLICT",
            message: "User already exists",
          });
        }
      }
      throw new trpc.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  },
});
