import { Layout, Menu } from "antd";
import { UserOutlined, TableOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider collapsible>
      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => navigate(key)}
        items={[
          { key: "/", icon: <UserOutlined />, label: "Users" },
          { key: "/spreadsheet", icon: <TableOutlined />, label: "Spreadsheet" },
          { key: "/editor", icon: <EditOutlined />, label: "Text Editor" },
        ]}
      />
    </Sider>
  );
}
