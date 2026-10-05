"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { ThemeName } from "@/lib/public-site-data";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const storageKey = "code-e-manipal-theme";

function systemTheme(): ThemeName {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("light");

  const applyTheme = useCallback((nextTheme: ThemeName) => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey) as ThemeName | null;
    const nextTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme();
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  }, [applyTheme]);

  const setTheme = useCallback(
    (nextTheme: ThemeName) => {
      setThemeState(nextTheme);
      window.localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    },
    [applyTheme],
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    }),
    [setTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
