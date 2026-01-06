import { Layout, Switch } from "antd";
import { useTheme } from "../context/ThemeContext";

const { Header } = Layout;

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <span style={{ marginRight: 8, color: "white" }}>Dark Mode</span>
      <Switch checked={darkMode} onChange={setDarkMode} />
    </Header>
  );
}
