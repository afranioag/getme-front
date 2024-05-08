import APIContextProvider from "@/contexts/api-context/api-context-provider";
import SessionContextProvider from "@/contexts/session-context/session-context-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    })
  ).current;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <APIContextProvider>
          <SessionContextProvider>
            <Component {...pageProps} />
          </SessionContextProvider>
        </APIContextProvider>
      </QueryClientProvider>

      <Toaster />
    </>
  );
}
