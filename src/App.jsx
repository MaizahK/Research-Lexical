import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/AppLayout";
import Users from "./pages/UsersPage";
import Spreadsheet from "./pages/SpreadsheetPage";
import Editor from "./pages/EditorPage";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </MainLayout>
  );
}
