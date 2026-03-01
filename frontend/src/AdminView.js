import React, { useState, useEffect } from "react";

const BUILDING_ICONS = {
  solar_farm: "☀️", grid: "🔌", dorm_a: "🏠", dorm_b: "🏠",
  library: "📚", gym: "💪", lecture_hall: "🎓", research_lab: "🔬", admin: "🏢",
  "dorm-a": "🏠", "dorm-b": "🏠", "lecture-hall": "🎓",
  "research-lab": "🔬", "admin-building": "🏢",
};

const SEVERITY_COLORS = { high: "#ef4444", medium: "#f59e0b", low: "#22c55e" };

const CAMPUS_BUILDINGS_MAP = [
  { id: "dorm-a",         name: "Dorm A",          buildingType: "dorm",    hasIssue: false, x: 18, y: 22 },
  { id: "library",        name: "Library",          buildingType: "library", hasIssue: false, x: 62, y: 12 },
  { id: "dorm-b",         name: "Dorm B",           buildingType: "dorm",    hasIssue: false, x: 82, y: 28 },
  { id: "lecture-hall",   name: "Lecture Hall",     buildingType: "lecture", hasIssue: false, x: 22, y: 68 },
  { id: "gym",            name: "Gym",              buildingType: "gym",     hasIssue: false, x: 63, y: 63 },
  { id: "research-lab",   name: "Research Lab",     buildingType: "lab",     hasIssue: false, x: 38, y: 35 },
  { id: "admin-building", name: "Admin Building",   buildingType: "admin",   hasIssue: false, x: 35, y: 82 },
];

const ID_MAP = {
  "dorm-a": "dorm_a", "dorm-b": "dorm_b", "lecture-hall": "lecture_hall",
  "research-lab": "research_lab", "admin-building": "admin",
  "gym": "gym", "library": "library",
};

function DormBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="15" y="30" width="70" height="80" fill="#d4755f" rx="4" />
      <polygon points="15,30 50,10 85,30" fill="#8b4513" />
      <rect x="25" y="45" width="12" height="12" fill="#87ceeb" />
      <rect x="25" y="62" width="12" height="12" fill="#87ceeb" />
      <rect x="45" y="45" width="12" height="12" fill="#87ceeb" />
      <rect x="45" y="62" width="12" height="12" fill="#87ceeb" />
      <rect x="65" y="45" width="12" height="12" fill="#87ceeb" />
      <rect x="65" y="62" width="12" height="12" fill="#87ceeb" />
      <rect x="43" y="95" width="14" height="20" fill="#6b4423" />
    </svg>
  );
}

function LibraryBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="10" y="35" width="80" height="75" fill="#6b5344" rx="4" />
      <polygon points="10,35 50,5 90,35" fill="#4a3728" />
      <rect x="18" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="35" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="52" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="69" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="18" y="65" width="11" height="11" fill="#a0a0d0" />
      <rect x="35" y="65" width="11" height="11" fill="#a0a0d0" />
      <rect x="35" y="95" width="10" height="15" fill="#4a3728" />
      <rect x="56" y="95" width="10" height="15" fill="#4a3728" />
    </svg>
  );
}

function LectureHallBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="12" y="32" width="76" height="80" fill="#b8860b" rx="4" />
      <polygon points="12,32 50,8 88,32" fill="#8b6914" />
      <rect x="20" y="45" width="15" height="18" fill="#87ceeb" />
      <rect x="42" y="45" width="15" height="18" fill="#87ceeb" />
      <rect x="64" y="45" width="15" height="18" fill="#87ceeb" />
      <rect x="42" y="95" width="16" height="17" fill="#6b5914" />
    </svg>
  );
}

function GymBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="15" y="35" width="70" height="75" fill="#455a64" rx="4" />
      <polygon points="15,35 50,10 85,35" fill="#263238" />
      <rect x="15" y="48" width="70" height="3" fill="#2196f3" opacity="0.8" />
      <rect x="15" y="65" width="70" height="3" fill="#2196f3" opacity="0.8" />
      <rect x="22" y="42" width="8" height="8" fill="#81d4fa" />
      <rect x="70" y="42" width="8" height="8" fill="#81d4fa" />
      <rect x="41" y="95" width="18" height="15" fill="#1a237e" />
    </svg>
  );
}

function LabBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="10" y="32" width="80" height="80" fill="#9c27b0" rx="4" />
      <polygon points="10,32 50,5 90,32" fill="#6a1b9a" />
      <rect x="16" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="32" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="48" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="64" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="16" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="32" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="48" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="64" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="40" y="95" width="20" height="17" fill="#4a148c" />
    </svg>
  );
}

function AdminBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="18" y="32" width="64" height="80" fill="#c0392b" rx="4" />
      <polygon points="18,32 50,12 82,32" fill="#8b2e23" />
      <rect x="26" y="48" width="11" height="11" fill="#87ceeb" />
      <rect x="42" y="48" width="11" height="11" fill="#87ceeb" />
      <rect x="58" y="48" width="11" height="11" fill="#87ceeb" />
      <rect x="26" y="68" width="11" height="11" fill="#87ceeb" />
      <rect x="42" y="68" width="11" height="11" fill="#87ceeb" />
      <rect x="58" y="68" width="11" height="11" fill="#87ceeb" />
      <rect x="40" y="92" width="20" height="20" fill="#8b2e23" />
    </svg>
  );
}

function BuildingClipArt({ buildingType, isHovered }) {
  switch (buildingType) {
    case "dorm":    return <DormBuilding isHovered={isHovered} />;
    case "library": return <LibraryBuilding isHovered={isHovered} />;
    case "lecture": return <LectureHallBuilding isHovered={isHovered} />;
    case "gym":     return <GymBuilding isHovered={isHovered} />;
    case "lab":     return <LabBuilding isHovered={isHovered} />;
    case "admin":   return <AdminBuilding isHovered={isHovered} />;
    default:        return null;
  }
}

export default function AdminView({ onSignOut }) {
  const [schedule, setSchedule] = useState(null);
  const [issues, setIssues] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [tick, setTick] = useState(0);
  const [replyText, setReplyText] = useState({});
  const [hoveredBuilding, setHoveredBuilding] = useState(null);
  const resolvedIds = React.useRef(new Set());
  const [mapBuildings, setMapBuildings] = useState(CAMPUS_BUILDINGS_MAP);

  const fetchData = async () => {
    try {
      const [optimizeRes, issuesRes] = await Promise.all([
        fetch("http://127.0.0.1:5001/api/optimize", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({}) }),
        fetch("http://127.0.0.1:5001/api/issues"),
      ]);
      const optimizeData = await optimizeRes.json();
      const issuesData = await issuesRes.json();

      if (optimizeData.schedule) setSchedule(optimizeData.schedule);

      const withTime = issuesData
        .filter(issue => !resolvedIds.current.has(issue.building_id))
        .map(issue => ({ ...issue, status: issue.status || "open", time: issue.time || "just now" }));
      setIssues(withTime);

      const flaggedIds = new Set(issuesData.map(i => i.building_id));
      setMapBuildings(prev => prev.map(b => ({
        ...b,
        hasIssue: flaggedIds.has(b.id) || flaggedIds.has(ID_MAP[b.id])
      })));
    } catch (e) {
      console.error("Failed to fetch data", e);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setTick(t => t + 1);
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const resolveIssue = async (i) => {
    const issue = issues[i];
    resolvedIds.current.add(issue.building_id);
    setIssues(prev => prev.filter((_, idx) => idx !== i));
    try {
      await fetch("http://127.0.0.1:5001/api/resolve-issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ building_id: issue.building_id }),
      });
    } catch(e) { console.error("Resolve failed", e); }
  };

  const openIssues = issues.filter(i => i.status === "open");
  const summary = schedule?.summary || { solar_used_kwh: "--", grid_used_kwh: "--", grid_dependency_pct: "--", solar_remaining_kwh: "--", anomalies: 0 };
  const allocations = schedule?.allocations || [];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", color: "#e2e8f0", fontFamily: "'Courier New', monospace" }}>

      {/* Top Bar */}
      <div style={{ background: "#0d1526", borderBottom: "1px solid #1e3a5f", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#38bdf8", letterSpacing: 2 }}>UNIGRID</span>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "#0f3460", color: "#38bdf8", letterSpacing: 1 }}>ADMIN</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 11, color: "#22c55e", letterSpacing: 1 }}>LIVE</span>
          </div>
          {openIssues.length > 0 && (
            <div style={{ background: "#7f1d1d", color: "#fca5a5", padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>
              {openIssues.length} OPEN ISSUE{openIssues.length > 1 ? "S" : ""}
            </div>
          )}
          <button onClick={onSignOut} style={{ padding: "5px 14px", background: "transparent", border: "1px solid #334155", color: "#64748b", borderRadius: 6, cursor: "pointer", fontSize: 12 }}>Sign Out</button>
        </div>
      </div>

      <div style={{ padding: "24px 32px" }}>

        {/* Summary Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 28 }}>
          {[
            { label: "SOLAR OUTPUT",     value: `${summary.solar_used_kwh} kWh`, color: "#facc15", icon: "☀️" },
            { label: "GRID DRAW",        value: `${summary.grid_used_kwh} kWh`,  color: "#f87171", icon: "🔌" },
            { label: "GRID DEPENDENCY",  value: `${summary.grid_dependency_pct}%`, color: summary.grid_dependency_pct > 50 ? "#ef4444" : "#22c55e", icon: "📊" },
            { label: "SOLAR SURPLUS",    value: `${summary.solar_remaining_kwh} kWh`, color: "#34d399", icon: "🔋" },
            { label: "ANOMALIES",        value: summary.anomalies || 0, color: (summary.anomalies || 0) > 0 ? "#f87171" : "#22c55e", icon: "⚠️" },
            { label: "OPEN ISSUES",      value: openIssues.length, color: openIssues.length > 0 ? "#f59e0b" : "#22c55e", icon: "🚨" },
          ].map(card => (
            <div key={card.label} style={{ background: "#0d1526", borderRadius: 10, padding: "16px", border: "1px solid #1e3a5f" }}>
              <div style={{ fontSize: 11, color: "#475569", letterSpacing: 1, marginBottom: 8 }}>{card.icon} {card.label}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: card.color }}>{card.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid #1e3a5f" }}>
          {["dashboard", "map", "issues"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "8px 20px", background: "transparent", border: "none",
              cursor: "pointer", fontSize: 12, letterSpacing: 1, fontFamily: "inherit",
              color: activeTab === tab ? "#38bdf8" : "#475569",
              borderBottom: activeTab === tab ? "2px solid #38bdf8" : "2px solid transparent",
              marginBottom: -1,
            }}>
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div>
            <div style={{ fontSize: 11, color: "#475569", letterSpacing: 1, marginBottom: 16 }}>
              ENERGY ALLOCATION — AUTO-UPDATING EVERY 5s — TICK #{tick}
            </div>
            {allocations.length === 0 ? (
              <div style={{ color: "#334155", fontSize: 13 }}>Loading data from backend...</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {allocations.map(a => {
                  const solarPct = a.allocated_kwh > 0 ? (a.solar_kwh / a.allocated_kwh) * 100 : 0;
                  return (
                    <div key={a.building_id} style={{
                      background: "#0d1526", borderRadius: 10, padding: "14px 18px",
                      border: a.anomaly ? "1px solid #ef4444" : a.flagged ? "1px solid #f59e0b" : "1px solid #1e3a5f",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ fontWeight: 700, fontSize: 14 }}>
                          {BUILDING_ICONS[a.building_id]} {a.building_name}
                          {a.flagged && <span style={{ color: "#f59e0b", marginLeft: 8, fontSize: 11 }}>⚠ FLAGGED</span>}
                          {a.anomaly && <span style={{ color: "#ef4444", marginLeft: 8, fontSize: 11 }}>🔴 ANOMALY</span>}
                        </span>
                        <span style={{ fontSize: 12, color: "#475569" }}>☀️ {a.solar_kwh} kWh &nbsp;|&nbsp; 🔌 {a.grid_kwh} kWh</span>
                      </div>
                      <div style={{ background: "#1e293b", borderRadius: 4, height: 6, overflow: "hidden" }}>
                        <div style={{ width: `${solarPct}%`, height: "100%", background: solarPct > 70 ? "#22c55e" : solarPct > 30 ? "#facc15" : "#ef4444", borderRadius: 4, transition: "width 1s ease" }} />
                      </div>
                      <div style={{ fontSize: 10, color: "#334155", marginTop: 4, letterSpacing: 1 }}>{Math.round(solarPct)}% SOLAR POWERED</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Map Tab */}
        {activeTab === "map" && (
          <div style={{ position: "relative", width: "100%", height: "60vh", borderRadius: 12, overflow: "hidden", border: "1px solid #1e3a5f" }}>
            {/* Map Background */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="grassNoiseA">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
                <pattern id="grassBaseA" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="#9ccc65" />
                  <circle cx="10" cy="10" r="1.5" fill="#7cb342" opacity="0.7" />
                  <circle cx="30" cy="25" r="1" fill="#7cb342" opacity="0.5" />
                  <circle cx="15" cy="35" r="1.2" fill="#7cb342" opacity="0.6" />
                  <circle cx="35" cy="8" r="0.8" fill="#558b2f" opacity="0.4" />
                </pattern>
                <linearGradient id="roadGradientA" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#52525b" stopOpacity={1} />
                  <stop offset="50%" stopColor="#3f3f46" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2f2f35" stopOpacity={1} />
                </linearGradient>
                <pattern id="roadTextureA" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="#000000" opacity={0.08} />
                </pattern>
                <pattern id="sidewalkPatternA" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <rect width="12" height="12" fill="#cbd5e1" />
                  <path d="M0 6 H12 M6 0 V12" stroke="#94a3b8" strokeWidth={0.6} opacity={0.4} />
                </pattern>
                <g id="treeA">
                  <ellipse cx="0" cy="-18" rx="24" ry="28" fill="#2d5016" opacity="1" />
                  <ellipse cx="-14" cy="-8" rx="20" ry="25" fill="#3d6b1f" opacity="1" />
                  <ellipse cx="14" cy="-8" rx="20" ry="25" fill="#3d6b1f" opacity="1" />
                  <ellipse cx="-8" cy="5" rx="15" ry="18" fill="#388e3c" opacity="1" />
                  <ellipse cx="8" cy="5" rx="15" ry="18" fill="#388e3c" opacity="1" />
                  <rect x="-2.5" y="12" width="5" height="28" fill="#6d4c41" />
                  <rect x="-3.5" y="28" width="7" height="12" fill="#5d4037" opacity="0.8" />
                </g>
              </defs>
              <rect width="100%" height="100%" fill="url(#grassBaseA)" filter="url(#grassNoiseA)" />
              <rect x="0%" y="47%" width="100%" height="5%" fill="url(#roadGradientA)" opacity="0.9" />
              <rect x="48%" y="0%" width="4%" height="100%" fill="url(#roadGradientA)" opacity="0.9" />
              <rect x="0%" y="47%" width="100%" height="5%" fill="url(#roadTextureA)" opacity="0.8" />
              <rect x="48%" y="0%" width="4%" height="100%" fill="url(#roadTextureA)" opacity="0.8" />
              <rect x="0%" y="46%" width="100%" height="1%" fill="url(#sidewalkPatternA)" opacity="0.6" />
              <rect x="0%" y="52%" width="100%" height="1%" fill="url(#sidewalkPatternA)" opacity="0.6" />
              <rect x="47%" y="0%" width="1%" height="100%" fill="url(#sidewalkPatternA)" opacity="0.6" />
              <rect x="52%" y="0%" width="1%" height="100%" fill="url(#sidewalkPatternA)" opacity="0.6" />
              <rect x="48%" y="46.9%" width="4.22%" height="5.1%" fill="#404541" opacity="1" />
              <line x1="0" x2="100%" y1="49.5%" y2="49.5%" stroke="#facc15" strokeWidth={3} strokeDasharray="18 18" strokeLinecap="butt" />
              <line y1="0" y2="100%" x1="50%" x2="50%" stroke="#facc15" strokeWidth={3} strokeDasharray="18 18" strokeLinecap="butt" />
              <g>
                <rect x="53.2%" y="40%" width="0.4%" height="5%" fill="#1f2937" />
                <rect x="52.75%" y="36.5%" width="1.2%" height="4%" rx="0.6%" fill="#111827" />
                <circle cx="53.4%" cy="37.7%" r="0.35%" fill="#ef4444" />
                <circle cx="53.4%" cy="38.6%" r="0.35%" fill="#facc15" opacity={0.4} />
                <circle cx="53.4%" cy="39.6%" r="0.35%" fill="#22c55e" opacity={0.4} />
              </g>
              <g opacity="0.9">
                <use href="#treeA" x="8%" y="38%" />
                <use href="#treeA" x="65%" y="37%" />
                <use href="#treeA" x="88%" y="60%" />
                <use href="#treeA" x="12%" y="84%" />
                <use href="#treeA" x="92%" y="88%" />
                <use href="#treeA" x="5%" y="15%" />
              </g>
              <rect x="1%" y="1%" width="98%" height="98%" fill="none" stroke="#8d6e63" strokeWidth="2.5" opacity="0.35" strokeDasharray="5,3" />
            </svg>

            {/* Buildings */}
            <div style={{ position: "absolute", inset: 0 }}>
              {mapBuildings.map(building => {
                const backendId = ID_MAP[building.id] || building.id;
                const allocation = allocations.find(a => a.building_id === backendId);
                const solarPct = allocation && allocation.allocated_kwh > 0 ? Math.round((allocation.solar_kwh / allocation.allocated_kwh) * 100) : null;
                const ringColor = solarPct === null ? "#475569" : solarPct > 70 ? "#22c55e" : solarPct > 30 ? "#facc15" : "#ef4444";

                return (
                  <div
                    key={building.id}
                    style={{ position: "absolute", left: `${building.x}%`, top: `${building.y}%`, transform: "translate(-50%, -50%)", cursor: "default" }}
                    onMouseEnter={() => setHoveredBuilding(building.id)}
                    onMouseLeave={() => setHoveredBuilding(null)}
                  >
                    {building.hasIssue && (
                      <div style={{ position: "absolute", top: -8, right: -8, zIndex: 10, background: "#ef4444", borderRadius: "50%", padding: 4, border: "2px solid #0a0f1e" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
                          <line x1="12" y1="8" x2="12" y2="13" stroke="white" strokeWidth="2" />
                          <circle cx="12" cy="17" r="1.5" fill="white" />
                        </svg>
                      </div>
                    )}
                    <div style={{
                      position: "absolute", width: 100, height: 100,
                      left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                      borderRadius: "50%", border: `2px solid ${ringColor}`,
                      opacity: hoveredBuilding === building.id ? 1 : 0.5,
                      transition: "opacity 0.2s", pointerEvents: "none"
                    }} />
                    <div style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}>
                      <BuildingClipArt buildingType={building.buildingType} isHovered={hoveredBuilding === building.id} />
                    </div>
                    <div style={{ position: "absolute", top: 96, left: "50%", transform: "translateX(-50%)", textAlign: "center", pointerEvents: "none" }}>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "#0a0f1e", background: "rgba(255,255,255,0.85)", padding: "2px 6px", borderRadius: 4, whiteSpace: "nowrap" }}>
                        {building.name}
                      </p>
                    </div>
                    {hoveredBuilding === building.id && (
                      <div style={{
                        position: "absolute", top: 112, left: "50%", transform: "translateX(-50%)",
                        background: "#0d1526", borderRadius: 8, padding: "8px 12px",
                        border: "1px solid #1e3a5f", whiteSpace: "nowrap", zIndex: 50,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
                      }}>
                        <p style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 12, marginBottom: 2 }}>{building.name}</p>
                        {solarPct !== null && <p style={{ fontSize: 11, color: ringColor }}>☀️ {solarPct}% solar powered</p>}
                        {building.hasIssue && <p style={{ color: "#ef4444", fontSize: 11, letterSpacing: 1 }}>⚠ ISSUE FLAGGED</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div style={{ position: "absolute", bottom: 16, right: 16, zIndex: 40, background: "#0d1526", borderRadius: 10, padding: "12px 16px", border: "1px solid #1e3a5f" }}>
              <p style={{ fontSize: 10, color: "#475569", letterSpacing: 2, marginBottom: 8 }}>ENERGY STATUS</p>
              {[
                { color: "#22c55e", label: ">70% Solar" },
                { color: "#facc15", label: "30–70% Solar" },
                { color: "#ef4444", label: "<30% Solar / Issue" },
              ].map(l => (
                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", border: `2px solid ${l.color}` }} />
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Issues Tab */}
        {activeTab === "issues" && (
          <div>
            <div style={{ fontSize: 11, color: "#475569", letterSpacing: 1, marginBottom: 16 }}>
              INFRASTRUCTURE ISSUE REPORTS — {openIssues.length} OPEN
            </div>
            {issues.length === 0 ? (
              <p style={{ color: "#334155", fontSize: 13 }}>No issues reported yet.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {issues.map((issue, i) => (
                  <div key={i} style={{
                    background: "#0d1526", borderRadius: 10, padding: "16px 18px",
                    border: `1px solid ${issue.status === "resolved" ? "#1e3a5f" : SEVERITY_COLORS[issue.severity] || "#f59e0b"}`,
                    opacity: issue.status === "resolved" ? 0.5 : 1,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontWeight: 700 }}>
                        {BUILDING_ICONS[issue.building_id] || "🏗️"} {issue.building_name || issue.building_id}
                      </span>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {issue.severity && (
                          <span style={{
                            fontSize: 11, padding: "2px 8px", borderRadius: 4,
                            background: (SEVERITY_COLORS[issue.severity] || "#f59e0b") + "22",
                            color: SEVERITY_COLORS[issue.severity] || "#f59e0b", letterSpacing: 1
                          }}>{issue.severity.toUpperCase()}</span>
                        )}
                        <span style={{ fontSize: 11, color: "#334155" }}>{issue.time || "just now"}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 12 }}>{issue.description}</div>
                    {issue.status === "open" && (
                      <div style={{ display: "flex", gap: 8 }}>
                        <input
                          placeholder="Type a response..."
                          value={replyText[i] || ""}
                          onChange={e => setReplyText(p => ({ ...p, [i]: e.target.value }))}
                          style={{ flex: 1, padding: "6px 10px", borderRadius: 6, fontSize: 12, background: "#0a0f1e", border: "1px solid #1e3a5f", color: "#e2e8f0", fontFamily: "inherit" }}
                        />
                        <button onClick={() => resolveIssue(i)} style={{
                          padding: "6px 14px", background: "#14532d", color: "#22c55e",
                          border: "1px solid #22c55e", borderRadius: 6,
                          cursor: "pointer", fontSize: 11, fontFamily: "inherit", letterSpacing: 1
                        }}>RESOLVE</button>
                      </div>
                    )}
                    {issue.status === "resolved" && <span style={{ fontSize: 11, color: "#22c55e", letterSpacing: 1 }}>✓ RESOLVED</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
}
