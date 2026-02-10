import { QueryClientProvider } from "@/providers/QueryClientProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}
