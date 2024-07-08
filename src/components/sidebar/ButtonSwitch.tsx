import { ChangeEvent, useEffect } from "react";
import { useThemeStore } from "@store/theme.store";
import "./button-switch.scss";

export const ButtonSwitch = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const body = document.body;
    if (theme) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked);
  };

  return (
    <label className="ui-switch">
      <input type="checkbox" checked={theme} onChange={handleThemeChange} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};
