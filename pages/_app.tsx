import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";

import { AppProps } from "next/app";

interface CustomPageProps {}

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps<CustomPageProps>) {
  return (
    <NextUIProvider>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </NextUIProvider>
  );
}
