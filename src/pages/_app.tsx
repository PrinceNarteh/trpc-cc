import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import superjson from "superjson";
import { url } from "utils/constants";
import { AppRouter } from "../server/routes/app.router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        url,
        maxBatchSize: 10,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 1000,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      links,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
