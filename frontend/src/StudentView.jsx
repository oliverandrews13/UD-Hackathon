import { useState } from "react";

const CAMPUS_BUILDINGS = [
  { id: "dorm-a", name: "Dorm A", buildingType: "dorm", hasIssue: true, issueType: "Reduced Load", x: 18, y: 22 },
  { id: "library", name: "Library", buildingType: "library", hasIssue: false, x: 62, y: 12 },
  { id: "dorm-b", name: "Dorm B", buildingType: "dorm", hasIssue: false, x: 82, y: 28 },
  { id: "lecture-hall", name: "Lecture Hall", buildingType: "lecture", hasIssue: false, x: 22, y: 68 },
  { id: "gym", name: "Gym", buildingType: "gym", hasIssue: true, issueType: "Reduced Load", x: 63, y: 63 },
  { id: "research-lab", name: "Research Lab", buildingType: "lab", hasIssue: false, x: 38, y: 35 },
  { id: "admin-building", name: "Admin Building", buildingType: "admin", hasIssue: false, x: 35, y: 82 },
];

function DormBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="15" y="30" width="70" height="80" fill="#d4755f" rx="4" />
      <rect x="15" y="30" width="70" height="80" fill="url(#brickPattern)" opacity="0.7" rx="4" />
      <polygon points="15,30 50,10 85,30" fill="#8b4513" />
      <rect x="25" y="45" width="12" height="12" fill="#87ceeb" />
      <rect x="25" y="62" width="12" height="12" fill="#87ceeb" />
      <rect x="25" y="79" width="12" height="12" fill="#1a3a52" />
      <rect x="45" y="45" width="12" height="12" fill="#87ceeb" />
      <rect x="45" y="62" width="12" height="12" fill="#87ceeb" />
      <rect x="45" y="79" width="12" height="12" fill="#1a3a52" />
      <rect x="65" y="45" width="12" height="12" fill="#87ceeb" />
      <rect x="65" y="62" width="12" height="12" fill="#87ceeb" />
      <rect x="65" y="79" width="12" height="12" fill="#1a3a52" />
      <rect x="43" y="95" width="14" height="20" fill="#6b4423" />
      <circle cx="56" cy="105" r="1.5" fill="#ffb347" />
      <defs>
        <pattern id="brickPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="none" stroke="#8b4513" strokeWidth="0.3" opacity="0.5" />
        </pattern>
      </defs>
    </svg>
  );
}

function LibraryBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="10" y="35" width="80" height="75" fill="#6b5344" rx="4" />
      <rect x="10" y="35" width="80" height="75" fill="url(#stonePattern)" opacity="0.6" rx="4" />
      <polygon points="10,35 50,5 90,35" fill="#4a3728" />
      <rect x="18" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="35" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="52" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="69" y="48" width="11" height="11" fill="#a0a0d0" />
      <rect x="18" y="65" width="11" height="11" fill="#a0a0d0" />
      <rect x="35" y="65" width="11" height="11" fill="#a0a0d0" />
      <rect x="52" y="65" width="11" height="11" fill="#a0a0d0" />
      <rect x="69" y="65" width="11" height="11" fill="#a0a0d0" />
      <rect x="22" y="30" width="4" height="8" fill="#8b7355" />
      <rect x="52" y="30" width="4" height="8" fill="#8b7355" />
      <rect x="82" y="30" width="4" height="8" fill="#8b7355" />
      <rect x="35" y="95" width="10" height="15" fill="#4a3728" />
      <rect x="56" y="95" width="10" height="15" fill="#4a3728" />
      <defs>
        <pattern id="stonePattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.5" fill="#5a4733" opacity="0.4" />
        </pattern>
      </defs>
    </svg>
  );
}

function LectureHallBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="12" y="32" width="76" height="80" fill="#b8860b" rx="4" />
      <rect x="12" y="32" width="76" height="80" fill="url(#metalPattern)" opacity="0.5" rx="4" />
      <polygon points="12,32 50,8 88,32" fill="#8b6914" />
      <rect x="20" y="45" width="15" height="18" fill="#87ceeb" />
      <rect x="42" y="45" width="15" height="18" fill="#87ceeb" />
      <rect x="64" y="45" width="15" height="18" fill="#87ceeb" />
      <rect x="20" y="72" width="15" height="15" fill="#87ceeb" />
      <rect x="42" y="72" width="15" height="15" fill="#87ceeb" />
      <rect x="64" y="72" width="15" height="15" fill="#87ceeb" />
      <rect x="42" y="95" width="16" height="17" fill="#6b5914" />
      <circle cx="50" cy="110" r="1.5" fill="#ffb347" />
      <defs>
        <pattern id="metalPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="8" y2="8" stroke="#8b6914" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
    </svg>
  );
}

function GymBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="15" y="35" width="70" height="75" fill="#455a64" rx="4" />
      <rect x="15" y="35" width="70" height="75" fill="url(#concretePattern)" opacity="0.4" rx="4" />
      <polygon points="15,35 50,10 85,35" fill="#263238" />
      <rect x="15" y="48" width="70" height="3" fill="#2196f3" opacity="0.8" />
      <rect x="15" y="65" width="70" height="3" fill="#2196f3" opacity="0.8" />
      <rect x="15" y="82" width="70" height="3" fill="#2196f3" opacity="0.8" />
      <rect x="22" y="42" width="8" height="8" fill="#81d4fa" />
      <rect x="22" y="58" width="8" height="8" fill="#81d4fa" />
      <rect x="22" y="74" width="8" height="8" fill="#81d4fa" />
      <rect x="70" y="42" width="8" height="8" fill="#81d4fa" />
      <rect x="70" y="58" width="8" height="8" fill="#81d4fa" />
      <rect x="70" y="74" width="8" height="8" fill="#81d4fa" />
      <rect x="41" y="95" width="18" height="15" fill="#1a237e" />
      <defs>
        <pattern id="concretePattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.5" fill="#263238" opacity="0.3" />
          <circle cx="8" cy="7" r="0.5" fill="#263238" opacity="0.3" />
        </pattern>
      </defs>
    </svg>
  );
}

function LabBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="10" y="32" width="80" height="80" fill="#9c27b0" rx="4" />
      <rect x="10" y="32" width="80" height="80" fill="url(#glassPattern)" opacity="0.5" rx="4" />
      <polygon points="10,32 50,5 90,32" fill="#6a1b9a" />
      <rect x="16" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="32" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="48" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="64" y="42" width="10" height="10" fill="#b3e5fc" />
      <rect x="16" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="32" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="48" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="64" y="60" width="10" height="10" fill="#b3e5fc" />
      <rect x="16" y="78" width="10" height="10" fill="#b3e5fc" />
      <rect x="32" y="78" width="10" height="10" fill="#b3e5fc" />
      <rect x="48" y="78" width="10" height="10" fill="#b3e5fc" />
      <rect x="64" y="78" width="10" height="10" fill="#b3e5fc" />
      <rect x="40" y="95" width="20" height="17" fill="#4a148c" />
      <defs>
        <pattern id="glassPattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="5" y2="5" stroke="#6a1b9a" strokeWidth="0.3" opacity="0.3" />
        </pattern>
      </defs>
    </svg>
  );
}

function AdminBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 100 120" style={{ width: 80, height: 96, transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
      <rect x="18" y="32" width="64" height="80" fill="#c0392b" rx="4" />
      <rect x="18" y="32" width="64" height="80" fill="url(#brickPattern2)" opacity="0.6" rx="4" />
      <polygon points="18,32 50,12 82,32" fill="#8b2e23" />
      <rect x="45" y="8" width="10" height="8" fill="#8b2e23" />
      <rect x="26" y="48" width="11" height="11" fill="#87ceeb" />
      <rect x="42" y="48" width="11" height="11" fill="#87ceeb" />
      <rect x="58" y="48" width="11" height="11" fill="#87ceeb" />
      <rect x="26" y="68" width="11" height="11" fill="#87ceeb" />
      <rect x="42" y="68" width="11" height="11" fill="#87ceeb" />
      <rect x="58" y="68" width="11" height="11" fill="#87ceeb" />
      <rect x="40" y="92" width="20" height="20" fill="#8b2e23" />
      <rect x="38" y="95" width="24" height="5" fill="#a0522d" />
      <defs>
        <pattern id="brickPattern2" x="0" y="0" width="6" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="6" height="8" fill="none" stroke="#8b2e23" strokeWidth="0.4" opacity="0.4" />
        </pattern>
      </defs>
    </svg>
  );
}

function BuildingClipArt({ buildingType, isHovered }) {
  switch (buildingType) {
    case "dorm": return <DormBuilding isHovered={isHovered} />;
    case "library": return <LibraryBuilding isHovered={isHovered} />;
    case "lecture": return <LectureHallBuilding isHovered={isHovered} />;
    case "gym": return <GymBuilding isHovered={isHovered} />;
    case "lab": return <LabBuilding isHovered={isHovered} />;
    case "admin": return <AdminBuilding isHovered={isHovered} />;
    default: return null;
  }
}

export default function StudentView({ onSignOut }) {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [hoveredBuilding, setHoveredBuilding] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
    setIsModalOpen(true);
    setIssueType("");
    setDescription("");
    setSubmitted(false);
  };

  const handleSubmitIssue = async () => {
    if (selectedBuilding && issueType) {
      try {
        await fetch("http://127.0.0.1:5001/api/report-issue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            building_id: selectedBuilding.id,
            building_name: selectedBuilding.name,
            description: issueType + (description ? ": " + description : ""),
            severity: "medium",
          }),
        });
      } catch (e) {
        console.error("Failed to submit issue", e);
      }
      setSubmitted(true);
      setTimeout(() => setIsModalOpen(false), 1500);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", fontFamily: "'Courier New', monospace" }}>

      {/* Top Bar */}
      <div style={{
        background: "#0d1526", borderBottom: "1px solid #1e3a5f",
        padding: "0 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 56, position: "relative", zIndex: 50
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#38bdf8", letterSpacing: 2 }}>UNIGRID</span>
          <span style={{
            fontSize: 10, padding: "2px 8px", borderRadius: 4,
            background: "#0f3460", color: "#38bdf8", letterSpacing: 1
          }}>STUDENT</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 12, color: "#475569", letterSpacing: 1 }}>CLICK A BUILDING TO REPORT AN ISSUE</span>
          <button onClick={onSignOut} style={{
            padding: "5px 14px", background: "transparent",
            border: "1px solid #334155", color: "#64748b",
            borderRadius: 6, cursor: "pointer", fontSize: 12, fontFamily: "inherit"
          }}>Sign Out</button>
        </div>
      </div>

      {/* Map Container */}
      <div style={{ position: "relative", width: "100%", height: "calc(100vh - 56px)", overflow: "hidden" }}>

        {/* Map Background — unchanged from original */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="grassNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
            <pattern id="grassBase" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="#9ccc65" />
              <circle cx="10" cy="10" r="1.5" fill="#7cb342" opacity="0.7" />
              <circle cx="30" cy="25" r="1" fill="#7cb342" opacity="0.5" />
              <circle cx="15" cy="35" r="1.2" fill="#7cb342" opacity="0.6" />
              <circle cx="35" cy="8" r="0.8" fill="#558b2f" opacity="0.4" />
            </pattern>
            <g id="tree">
              <ellipse cx="0" cy="-18" rx="24" ry="28" fill="#2d5016" opacity="0.95" />
              <ellipse cx="-14" cy="-8" rx="20" ry="25" fill="#3d6b1f" opacity="0.9" />
              <ellipse cx="14" cy="-8" rx="20" ry="25" fill="#3d6b1f" opacity="0.9" />
              <ellipse cx="-8" cy="5" rx="15" ry="18" fill="#388e3c" opacity="0.8" />
              <ellipse cx="8" cy="5" rx="15" ry="18" fill="#388e3c" opacity="0.8" />
              <rect x="-2.5" y="12" width="5" height="28" fill="#6d4c41" />
              <rect x="-3.5" y="28" width="7" height="12" fill="#5d4037" opacity="0.8" />
            </g>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#616161", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#616161", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#616161", stopOpacity: 1 }} />
            </linearGradient>
            <pattern id="roadTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#424242" strokeWidth="0.5" opacity="0.3" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="#ffeb3b" strokeWidth="1" opacity="0.6" />
            </pattern>
            <pattern id="sidewalkPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#bdbdbd" />
              <line x1="0" y1="5" x2="10" y2="5" stroke="#9e9e9e" strokeWidth="0.5" opacity="0.5" />
              <line x1="5" y1="0" x2="5" y2="10" stroke="#9e9e9e" strokeWidth="0.5" opacity="0.5" />
            </pattern>
            <pattern id="parkingPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="#757575" />
              <line x1="0" y1="15" x2="30" y2="15" stroke="#ffeb3b" strokeWidth="0.8" opacity="0.5" />
            </pattern>
            <filter id="waterRipple">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#grassBase)" filter="url(#grassNoise)" />
          <g opacity="0.9">
            <use href="#tree" x="8%" y="38%" />
            <use href="#tree" x="25%" y="42%" />
            <use href="#tree" x="88%" y="48%" />
            <use href="#tree" x="12%" y="80%" />
            <use href="#tree" x="92%" y="88%" />
            <use href="#tree" x="5%" y="15%" />
          </g>
          <rect x="0%" y="47%" width="100%" height="5%" fill="url(#roadGradient)" opacity="0.9" />
          <rect x="48%" y="0%" width="4%" height="100%" fill="url(#roadGradient)" opacity="0.9" />
          <rect x="0%" y="47%" width="100%" height="5%" fill="url(#roadTexture)" opacity="0.8" />
          <rect x="48%" y="0%" width="4%" height="100%" fill="url(#roadTexture)" opacity="0.8" />
          <rect x="0%" y="46%" width="100%" height="1%" fill="url(#sidewalkPattern)" opacity="0.6" />
          <rect x="0%" y="52%" width="100%" height="1%" fill="url(#sidewalkPattern)" opacity="0.6" />
          <rect x="47%" y="0%" width="1%" height="100%" fill="url(#sidewalkPattern)" opacity="0.6" />
          <rect x="52%" y="0%" width="1%" height="100%" fill="url(#sidewalkPattern)" opacity="0.6" />
          <path d="M 15% 20% L 35% 35% L 50% 47%" stroke="#a1887f" strokeWidth="2.8" fill="none" opacity="0.6" strokeLinecap="round" />
          <path d="M 85% 25% L 65% 40% L 50% 47%" stroke="#a1887f" strokeWidth="2.8" fill="none" opacity="0.6" strokeLinecap="round" />
          <path d="M 50% 47% L 50% 75% L 50% 85%" stroke="#a1887f" strokeWidth="2.8" fill="none" opacity="0.6" strokeLinecap="round" />
          <path d="M 50% 47% L 70% 60% L 80% 70%" stroke="#a1887f" strokeWidth="2.8" fill="none" opacity="0.6" strokeLinecap="round" />
          <rect x="5%" y="90%" width="12%" height="8%" fill="url(#parkingPattern)" opacity="0.7" />
          <rect x="83%" y="92%" width="10%" height="6%" fill="url(#parkingPattern)" opacity="0.7" />
          <ellipse cx="8%" cy="70%" rx="8%" ry="12%" fill="#4dd0e1" opacity="0.35" filter="url(#waterRipple)" />
          <ellipse cx="8%" cy="70%" rx="8%" ry="12%" fill="none" stroke="#29b6f6" strokeWidth="1" opacity="0.4" />
          <rect x="1%" y="1%" width="98%" height="98%" fill="none" stroke="#8d6e63" strokeWidth="2.5" opacity="0.35" strokeDasharray="5,3" />
          <ellipse cx="35%" cy="30%" rx="20%" ry="15%" fill="#558b2f" opacity="0.08" />
          <ellipse cx="70%" cy="45%" rx="25%" ry="20%" fill="#558b2f" opacity="0.08" />
        </svg>

        {/* Buildings */}
        <div style={{ position: "absolute", inset: 0 }}>
          {CAMPUS_BUILDINGS.map((building) => (
            <div
              key={building.id}
              style={{
                position: "absolute",
                left: `${building.x}%`,
                top: `${building.y}%`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredBuilding(building.id)}
              onMouseLeave={() => setHoveredBuilding(null)}
            >
              <button
                onClick={() => handleBuildingClick(building)}
                style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                {/* Hover ring */}
                {hoveredBuilding === building.id && (
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    width: 100, height: 100, left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    border: `2px solid ${building.hasIssue ? "#ef4444" : "#38bdf8"}`,
                    animation: "pulse 1.5s infinite",
                  }} />
                )}

                {/* Issue badge */}
                {building.hasIssue && (
                  <div style={{
                    position: "absolute", top: -8, right: -8, zIndex: 10,
                    background: "#ef4444", borderRadius: "50%", padding: 4,
                    border: "2px solid #0a0f1e",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
                      <line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="2" />
                      <circle cx="12" cy="16" r="1" fill="white" />
                    </svg>
                  </div>
                )}

                <div style={{ transform: hoveredBuilding === building.id ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}>
                  <BuildingClipArt buildingType={building.buildingType} isHovered={hoveredBuilding === building.id} />
                </div>
              </button>

              {/* Tooltip */}
              {hoveredBuilding === building.id && (
                <div style={{
                  position: "absolute", top: 100, left: "50%", transform: "translateX(-50%)",
                  background: "#0d1526", borderRadius: 10, padding: "10px 14px",
                  border: "1px solid #1e3a5f", whiteSpace: "nowrap", zIndex: 50,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}>
                  <p style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 13, marginBottom: 4 }}>{building.name}</p>
                  {building.hasIssue && (
                    <p style={{ color: "#ef4444", fontSize: 11, marginBottom: 4, letterSpacing: 1 }}>⚠ {building.issueType}</p>
                  )}
                  <p style={{ color: "#38bdf8", fontSize: 11, letterSpacing: 1 }}>CLICK TO REPORT ISSUE</p>
                </div>
              )}

              {/* Name label */}
              <div style={{
                position: "absolute", top: 96, left: "50%", transform: "translateX(-50%)",
                pointerEvents: "none", textAlign: "center", marginTop: 8
              }}>
                <p style={{
                  fontSize: 11, fontWeight: 700, color: "#0a0f1e",
                  background: "rgba(255,255,255,0.85)", padding: "2px 8px",
                  borderRadius: 4, whiteSpace: "nowrap", letterSpacing: 0.5,
                }}>
                  {building.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{
          position: "absolute", bottom: 24, right: 24, zIndex: 40,
          background: "#0d1526", borderRadius: 12, padding: "16px",
          border: "1px solid #1e3a5f", boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
        }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#475569", letterSpacing: 2, marginBottom: 12 }}>CAMPUS LEGEND</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: "2px solid #38bdf8", background: "transparent" }} />
              <span style={{ fontSize: 12, color: "#94a3b8" }}>Normal Status</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: "2px solid #ef4444", background: "transparent", position: "relative" }}>
                <div style={{ position: "absolute", top: -4, right: -4, width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
              </div>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>Issue Flagged</span>
            </div>
            <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: 8, marginTop: 4 }}>
              <p style={{ fontSize: 11, color: "#475569" }}>Click any building to report</p>
            </div>
          </div>
        </div>

        {/* Report Modal */}
        {isModalOpen && selectedBuilding && (
          <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 100, backdropFilter: "blur(4px)"
          }}>
            <div style={{
              background: "#0d1526", borderRadius: 16, padding: 32,
              border: "1px solid #1e3a5f", width: 460, maxWidth: "90vw",
              boxShadow: "0 24px 64px rgba(0,0,0,0.8)"
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                  <p style={{ color: "#22c55e", fontWeight: 700, fontSize: 16, letterSpacing: 1 }}>ISSUE REPORTED</p>
                  <p style={{ color: "#475569", fontSize: 13, marginTop: 8 }}>Campus facilities have been notified.</p>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                    <div>
                      <h2 style={{ fontSize: 16, fontWeight: 700, color: "#38bdf8", letterSpacing: 1 }}>REPORT ISSUE</h2>
                      <p style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{selectedBuilding.name}</p>
                    </div>
                    <button onClick={() => setIsModalOpen(false)} style={{
                      background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 20
                    }}>✕</button>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ fontSize: 11, color: "#475569", letterSpacing: 1, display: "block", marginBottom: 6 }}>ISSUE TYPE</label>
                    <select
                      value={issueType}
                      onChange={e => setIssueType(e.target.value)}
                      style={{
                        width: "100%", padding: "10px 12px", borderRadius: 8,
                        background: "#0a0f1e", border: "1px solid #1e3a5f",
                        color: "#e2e8f0", fontSize: 13, fontFamily: "inherit"
                      }}
                    >
                      <option value="">Select an issue type...</option>
                      <option value="reduced-load">Reduced Load</option>
                      <option value="overload">Overload</option>
                      <option value="maintenance">Maintenance Required</option>
                      <option value="blackout">Blackout / Outage</option>
                      <option value="efficiency">Low Efficiency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 11, color: "#475569", letterSpacing: 1, display: "block", marginBottom: 6 }}>ADDITIONAL DETAILS (OPTIONAL)</label>
                    <textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="Describe the issue..."
                      rows={3}
                      style={{
                        width: "100%", padding: "10px 12px", borderRadius: 8,
                        background: "#0a0f1e", border: "1px solid #1e3a5f",
                        color: "#e2e8f0", fontSize: 13, fontFamily: "inherit",
                        resize: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                    <button onClick={() => setIsModalOpen(false)} style={{
                      padding: "10px 20px", background: "transparent",
                      border: "1px solid #334155", color: "#64748b",
                      borderRadius: 8, cursor: "pointer", fontSize: 12, fontFamily: "inherit"
                    }}>Cancel</button>
                    <button
                      onClick={handleSubmitIssue}
                      disabled={!issueType}
                      style={{
                        padding: "10px 24px", background: issueType ? "#38bdf8" : "#1e3a5f",
                        color: issueType ? "#0a0f1e" : "#334155",
                        border: "none", borderRadius: 8, cursor: issueType ? "pointer" : "not-allowed",
                        fontWeight: 700, fontSize: 12, fontFamily: "inherit", letterSpacing: 1
                      }}
                    >
                      SUBMIT REPORT
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}

