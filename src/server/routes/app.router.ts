import { createRouter } from "../createRouter";

export const appRouter = createRouter().query("hello", {
  resolve: () => {
    return "Hello, from tRPC";
  },
});

export type AppRouter = typeof appRouter;