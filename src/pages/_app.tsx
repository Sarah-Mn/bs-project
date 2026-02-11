import { QueryClientProvider } from "@/providers/QueryClientProvider";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <>{page}</>);

  return (
    <QueryClientProvider>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}
