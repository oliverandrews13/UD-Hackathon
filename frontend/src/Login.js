import { useState } from "react";

const PASSWORDS = {
  admin123: "admin",
  student123: "student",
};

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const role = PASSWORDS[password];
    if (role) {
      onLogin(role);
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        background: "#1e293b",
        borderRadius: 16,
        padding: "40px 48px",
        border: "1px solid #334155",
        width: 360,
        textAlign: "center",
      }}>
        {/* Logo */}
        <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#38bdf8", marginBottom: 4 }}>
          UniGrid
        </h1>
        <p style={{ fontSize: 13, color: "#64748b", marginBottom: 32 }}>
          University Energy Management System
        </p>

        {/* Input */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(""); }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            background: "#0f172a",
            border: error ? "1px solid #ef4444" : "1px solid #334155",
            color: "#e2e8f0",
            fontSize: 15,
            marginBottom: 12,
            outline: "none",
          }}
        />

        {error && (
          <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>
        )}

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "11px",
            background: "#38bdf8",
            color: "#0f172a",
            border: "none",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Sign In
        </button>

        <p style={{ fontSize: 12, color: "#475569", marginTop: 24 }}>
          Students and university staff use separate passwords
        </p>
      </div>
    </div>
  );
}
