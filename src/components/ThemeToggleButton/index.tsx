import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type ThemeToggleButtonProps = {
  buttonClass: string;
  iconClass: {
    light: string;
    dark: string;
  };
};

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  buttonClass,
  iconClass,
}) => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [currentIcon, setCurrentIcon] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  useEffect(() => {
    if (theme === "light") setCurrentIcon("light");
    if (theme === "dark") setCurrentIcon("dark");
  }, [theme]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className={buttonClass}
      type="button"
      aria-pressed
    >
      {currentIcon === "dark" ? (
        <SunIcon className={iconClass.dark} />
      ) : (
        <MoonIcon className={iconClass.light} />
      )}
    </motion.button>
  );
};

export default ThemeToggleButton;
