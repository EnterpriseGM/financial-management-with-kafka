"use client";

import { useEffect, useState } from "react";

export default function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    // if (darkTheme) {
    //   document.querySelector("html")?.classList.add("dark");
    // } else {
    //   document.querySelector("html")?.classList.remove("dark");
    // }
    document.querySelector("html")?.classList.toggle("dark");
  }, [darkTheme]);

  return { darkTheme, setDarkTheme };
}
