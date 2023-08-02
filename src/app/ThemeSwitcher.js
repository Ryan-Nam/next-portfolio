"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Do NOT use this! It will throw a hydration mismatch error.
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <span>
        <span onClick={()=>setTheme('light')}>Light</span> | {" "}
        <span onClick={()=> setTheme('dark')}>Dark</span> | ({theme})
      </span>
  );
};

export default ThemeSwitch;
