import { useState } from "react";
import Login from "./Login";
import AdminView from "./AdminView";
import StudentView from "./StudentView";

export default function App() {
  const [role, setRole] = useState(null);

  if (!role) return <Login onLogin={setRole} />;
  if (role === "admin") return <AdminView onSignOut={() => setRole(null)} />;
  if (role === "student") return <StudentView onSignOut={() => setRole(null)} />;
}
