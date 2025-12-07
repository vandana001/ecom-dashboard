// src/components/ThemeToggle.tsx
import { Switch } from "antd";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { mode, toggle } = useTheme();

  return (
    <Switch
      checked={mode === "dark"}
      onChange={toggle}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  );
};
