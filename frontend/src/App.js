import { useState } from "react";
import Login from "./Login";

export default function App() {
  const [role, setRole] = useState(null); // null | "admin" | "student"

  if (!role) return <Login onLogin={setRole} />;

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#38bdf8" }}>
          ⚡ UniGrid — {role === "admin" ? "University Admin" : "Student Portal"}
        </h1>
        <button
          onClick={() => setRole(null)}
          style={{
            padding: "6px 16px", background: "#1e293b", border: "1px solid #334155",
            color: "#94a3b8", borderRadius: 8, cursor: "pointer", fontSize: 13
          }}
        >
          Sign Out
        </button>
      </div>

      {role === "admin" && (
        <p style={{ color: "#64748b" }}>Admin dashboard coming soon...</p>
      )}
      {role === "student" && (
        <p style={{ color: "#64748b" }}>Student portal coming soon...</p>
      )}
    </div>
  );
}
