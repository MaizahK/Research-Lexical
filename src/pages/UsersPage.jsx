import { Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
];

const data = [
  { key: 1, name: "John Doe", email: "john@example.com" },
  { key: 2, name: "Jane Smith", email: "jane@example.com" },
];

export default function Users() {
  return <Table columns={columns} dataSource={data} />;
}
