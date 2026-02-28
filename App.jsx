import { useState, useEffect } from "react";

const API = "http://localhost:5000/api";

const BUILDING_ICONS = {
  solar_farm: "☀️",
  grid: "🔌",
  dorm_a: "🏠",
  dorm_b: "🏠",
  library: "📚",
  gym: "💪",
  lecture_hall: "🎓",
  research_lab: "🔬",
  admin: "🏢",
};

export default function App() {
  const [buildings, setBuildings] = useState([]);
  const [schedule, setSchedule] = useState(null);
  const [issues, setIssues] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [issueForm, setIssueForm] = useState({ building_id: "", description: "", severity: "medium" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API}/buildings`)
      .then(r => r.json())
      .then(setBuildings);
    fetch(`${API}/issues`)
      .then(r => r.json())
      .then(setIssues);
  }, []);

  const runOptimizer = async () => {
    setLoading(true);
    const res = await fetch(`${API}/optimize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buildings }),
    });
    const data = await res.json();
    setSchedule(data.schedule);
    setLoading(false);
  };

  const submitIssue = async () => {
    if (!issueForm.building_id || !issueForm.description) return;
    const res = await fetch(`${API}/report-issue`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issueForm),
    });
    const data = await res.json();
    setIssues(prev => [...prev, data.issue]);

    // Flag building locally so optimizer sees it
    setBuildings(prev =>
      prev.map(b => b.id === issueForm.building_id ? { ...b, flagged: true } : b)
    );
    setIssueForm({ building_id: "", description: "", severity: "medium" });
    alert(`Issue flagged! ${issueForm.building_id} will have reduced energy allocation.`);
  };

  const consumers = buildings.filter(b => b.type === "consumer");

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#38bdf8" }}>
          ⚡ University Energy Optimizer
        </h1>
        <p style={{ color: "#94a3b8", marginTop: 4 }}>
          Smart campus energy scheduling — solar first, grid as fallback
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["dashboard", "optimizer", "issues"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              background: activeTab === tab ? "#38bdf8" : "#1e293b",
              color: activeTab === tab ? "#0f172a" : "#94a3b8",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Dashboard Tab */}
      {activeTab === "dashboard" && (
        <div>
          <h2 style={{ fontSize: 18, marginBottom: 16, color: "#cbd5e1" }}>Campus Buildings</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {buildings.map(b => (
              <div key={b.id} style={{
                background: "#1e293b",
                borderRadius: 12,
                padding: 16,
                border: b.flagged ? "1px solid #ef4444" : "1px solid #334155"
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{BUILDING_ICONS[b.id] || "🏗️"}</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{b.name}</div>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>
                  {b.type === "source"
                    ? `Generates: ${b.supply} kWh`
                    : `Demand: ${b.demand} kWh`}
                </div>
                {b.flagged && (
                  <div style={{ marginTop: 8, fontSize: 12, color: "#ef4444", fontWeight: 600 }}>
                    ⚠️ Issue Flagged — Reduced Load
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optimizer Tab */}
      {activeTab === "optimizer" && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <button
              onClick={runOptimizer}
              disabled={loading}
              style={{
                padding: "12px 28px",
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              {loading ? "Optimizing..." : "▶ Run Optimizer"}
            </button>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>
              Allocates solar energy first, grid as fallback
            </span>
          </div>

          {schedule && (
            <div>
              {/* Summary */}
              <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                {[
                  { label: "Solar Used", value: `${schedule.summary.solar_used_kwh} kWh`, color: "#facc15" },
                  { label: "Grid Used", value: `${schedule.summary.grid_used_kwh} kWh`, color: "#f87171" },
                  { label: "Grid Dependency", value: `${schedule.summary.grid_dependency_pct}%`, color: "#fb923c" },
                  { label: "Solar Surplus", value: `${schedule.summary.solar_remaining_kwh} kWh`, color: "#34d399" },
                ].map(s => (
                  <div key={s.label} style={{
                    background: "#1e293b", borderRadius: 10, padding: "12px 20px",
                    border: `1px solid #334155`, minWidth: 150
                  }}>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Allocations */}
              <h3 style={{ marginBottom: 12, color: "#cbd5e1" }}>Building Allocations</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {schedule.allocations.map(a => {
                  const solarPct = a.allocated_kwh > 0 ? (a.solar_kwh / a.allocated_kwh) * 100 : 0;
                  return (
                    <div key={a.building_id} style={{
                      background: "#1e293b", borderRadius: 10, padding: "12px 16px",
                      border: a.flagged ? "1px solid #ef4444" : "1px solid #334155"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontWeight: 600 }}>
                          {BUILDING_ICONS[a.building_id]} {a.building_name}
                          {a.flagged && <span style={{ color: "#ef4444", marginLeft: 8, fontSize: 12 }}>⚠️ Reduced</span>}
                        </span>
                        <span style={{ fontSize: 13, color: "#94a3b8" }}>
                          {a.solar_kwh} kWh solar + {a.grid_kwh} kWh grid
                        </span>
                      </div>
                      {/* Bar */}
                      <div style={{ background: "#334155", borderRadius: 4, height: 8, overflow: "hidden" }}>
                        <div style={{
                          width: `${solarPct}%`, height: "100%",
                          background: "#facc15", borderRadius: 4
                        }} />
                      </div>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                        {Math.round(solarPct)}% solar powered
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Issues Tab */}
      {activeTab === "issues" && (
        <div>
          <h2 style={{ fontSize: 18, marginBottom: 16, color: "#cbd5e1" }}>Report Infrastructure Issue</h2>
          <div style={{
            background: "#1e293b", borderRadius: 12, padding: 20,
            border: "1px solid #334155", marginBottom: 24, maxWidth: 500
          }}>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 13, color: "#94a3b8", display: "block", marginBottom: 4 }}>Building</label>
              <select
                value={issueForm.building_id}
                onChange={e => setIssueForm(p => ({ ...p, building_id: e.target.value }))}
                style={{
                  width: "100%", padding: "8px 12px", borderRadius: 8,
                  background: "#0f172a", border: "1px solid #334155", color: "#e2e8f0", fontSize: 14
                }}
              >
                <option value="">Select building...</option>
                {consumers.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 13, color: "#94a3b8", display: "block", marginBottom: 4 }}>Description</label>
              <input
                value={issueForm.description}
                onChange={e => setIssueForm(p => ({ ...p, description: e.target.value }))}
                placeholder="e.g. Drawing unusually high current"
                style={{
                  width: "100%", padding: "8px 12px", borderRadius: 8,
                  background: "#0f172a", border: "1px solid #334155", color: "#e2e8f0", fontSize: 14
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, color: "#94a3b8", display: "block", marginBottom: 4 }}>Severity</label>
              <select
                value={issueForm.severity}
                onChange={e => setIssueForm(p => ({ ...p, severity: e.target.value }))}
                style={{
                  width: "100%", padding: "8px 12px", borderRadius: 8,
                  background: "#0f172a", border: "1px solid #334155", color: "#e2e8f0", fontSize: 14
                }}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <button
              onClick={submitIssue}
              style={{
                padding: "10px 24px", background: "#ef4444", color: "#fff",
                border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 14
              }}
            >
              🚨 Flag Issue
            </button>
          </div>

          {/* Issues Log */}
          <h3 style={{ marginBottom: 12, color: "#cbd5e1" }}>Issues Log</h3>
          {issues.length === 0 ? (
            <p style={{ color: "#64748b" }}>No issues reported yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {issues.map((issue, i) => (
                <div key={i} style={{
                  background: "#1e293b", borderRadius: 10, padding: "12px 16px",
                  border: "1px solid #ef4444"
                }}>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>
                    {BUILDING_ICONS[issue.building_id]} {issue.building_id}
                    <span style={{
                      marginLeft: 8, fontSize: 11, padding: "2px 8px", borderRadius: 4,
                      background: issue.severity === "high" ? "#7f1d1d" : issue.severity === "medium" ? "#78350f" : "#14532d",
                      color: "#fff"
                    }}>{issue.severity}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#94a3b8" }}>{issue.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
