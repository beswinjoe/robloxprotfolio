import React from "react";

interface RobloxGameFrameProps {
  gameName: string;
  gameId: string;
  category?: string;
  bugId?: string;
  aspectRatio?: "video" | "wide";
  className?: string;
}

export const RobloxGameFrame: React.FC<RobloxGameFrameProps> = ({
  gameName,
  gameId,
  category = "QA Testing Capture",
  bugId,
  aspectRatio = "video",
  className = "",
}) => {
  // Tailored SVG scene based on game type
  const renderScene = () => {
    switch (gameId) {
      case "qa-paid-01":
      case "BUG-CL-001":
        // Cannon Launch: Trajectory & Velocity telemetry
        return (
          <g>
            <rect width="800" height="450" fill="#121316" />
            {/* Grid ground */}
            <path
              d="M0 340 L800 340 M0 380 L800 380 M0 420 L800 420"
              stroke="#1e2229"
              strokeWidth="1.5"
            />
            {/* Mountain / Canyon backdrops */}
            <polygon
              points="120,340 240,180 360,340"
              fill="#1a1c22"
              stroke="#262a35"
              strokeWidth="1"
            />
            <polygon
              points="420,340 580,120 740,340"
              fill="#16181f"
              stroke="#222630"
              strokeWidth="1"
            />
            {/* Cannon Ramp */}
            <polygon
              points="80,340 180,260 210,290 90,360"
              fill="#2a2e39"
              stroke="#3a404f"
              strokeWidth="2"
            />
            <circle cx="100" cy="340" r="16" fill="#181a20" stroke="#4b5563" />
            {/* Launch Trajectory Vector & Sub-stepping Raycast Dots */}
            <path
              d="M 180 260 Q 380 90 620 340"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <circle cx="180" cy="260" r="5" fill="#f59e0b" />
            <circle cx="310" cy="165" r="4" fill="#f59e0b" />
            <circle cx="440" cy="160" r="4" fill="#f59e0b" />
            <circle cx="560" cy="245" r="4" fill="#f59e0b" />
            {/* Bug Impact Breach Marker */}
            <circle
              cx="620"
              cy="340"
              r="14"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
            />
            <line
              x1="620"
              y1="320"
              x2="620"
              y2="360"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <line
              x1="600"
              y1="340"
              x2="640"
              y2="340"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text
              x="620"
              y="380"
              fill="#ef4444"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
            >
              TUNNELING SEAM [v=312 st/s]
            </text>
          </g>
        );

      case "qa-paid-05":
      case "BUG-MCR-002":
        // Miami Crime RP: Urban grid & vehicle wall breach
        return (
          <g>
            <rect width="800" height="450" fill="#0f1115" />
            {/* City buildings */}
            <rect
              x="80"
              y="140"
              width="140"
              height="240"
              fill="#181a22"
              stroke="#272b38"
            />
            <rect
              x="260"
              y="90"
              width="220"
              height="290"
              fill="#1f232f"
              stroke="#343a4c"
            />
            <rect
              x="520"
              y="170"
              width="180"
              height="210"
              fill="#161820"
              stroke="#242834"
            />
            {/* Road */}
            <rect x="0" y="380" width="800" height="70" fill="#131418" />
            <line
              x1="0"
              y1="415"
              x2="800"
              y2="415"
              stroke="#e2b053"
              strokeWidth="2"
              strokeDasharray="24 16"
            />
            {/* Sports vehicle adjacent to bank wall */}
            <rect
              x="320"
              y="330"
              width="130"
              height="45"
              rx="6"
              fill="#2c303f"
              stroke="#434b61"
              strokeWidth="2"
            />
            <polygon points="340,330 365,305 425,305 440,330" fill="#1b1d26" />
            <circle cx="350" cy="375" r="12" fill="#0b0c10" stroke="#4b5563" />
            <circle cx="420" cy="375" r="12" fill="#0b0c10" stroke="#4b5563" />
            {/* Collision breach ray */}
            <line
              x1="385"
              y1="320"
              x2="280"
              y2="280"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="280" cy="280" r="8" fill="#ef4444" fillOpacity="0.4" />
            <text
              x="280"
              y="260"
              fill="#ef4444"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
            >
              [BREACH] VAULT DISMOUNT
            </text>
          </g>
        );

      case "qa-paid-09":
      case "BUG-CKD-003":
        // Cooked: Kitchen prep counter with dual interaction race condition
        return (
          <g>
            <rect width="800" height="450" fill="#141312" />
            {/* Countertops */}
            <rect
              x="120"
              y="240"
              width="560"
              height="140"
              fill="#22201d"
              stroke="#38342e"
              strokeWidth="2"
            />
            <rect
              x="140"
              y="225"
              width="520"
              height="20"
              fill="#332f2a"
              stroke="#4a443c"
            />
            {/* Cutting board and meal */}
            <rect
              x="330"
              y="215"
              width="140"
              height="25"
              rx="4"
              fill="#4d3e2b"
              stroke="#6b583f"
            />
            <circle cx="400" cy="215" r="14" fill="#a16207" stroke="#ca8a04" />
            {/* Dual client request indicators */}
            <path
              d="M 230 140 L 370 210"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <text
              x="220"
              y="130"
              fill="#38bdf8"
              fontSize="12"
              fontFamily="monospace"
            >
              Client_A: Claim(0x4F)
            </text>
            <path
              d="M 570 140 L 430 210"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <text
              x="530"
              y="130"
              fill="#f59e0b"
              fontSize="12"
              fontFamily="monospace"
            >
              Client_B: Claim(0x4F)
            </text>
            {/* Mutex race condition warning */}
            <rect
              x="280"
              y="390"
              width="240"
              height="28"
              fill="#291a1a"
              stroke="#ef4444"
              rx="4"
            />
            <text
              x="400"
              y="408"
              fill="#ef4444"
              fontSize="11"
              fontFamily="monospace"
              textAnchor="middle"
            >
              RACE CONDITION: DUAL_CLAIM_ACK
            </text>
          </g>
        );

      case "qa-paid-06":
      case "BUG-DWTB-005":
        // Don't Wake Up The Baby: Stealth noise radius
        return (
          <g>
            <rect width="800" height="450" fill="#0d0e12" />
            {/* Hallway walls */}
            <polygon points="0,0 240,160 240,450 0,450" fill="#161820" />
            <polygon points="800,0 560,160 560,450 800,450" fill="#14161c" />
            <rect x="240" y="160" width="320" height="290" fill="#191c24" />
            {/* Floorboard seam */}
            <line
              x1="240"
              y1="340"
              x2="560"
              y2="340"
              stroke="#4338ca"
              strokeWidth="3"
            />
            {/* Noise radial pulses */}
            <circle
              cx="400"
              cy="340"
              r="40"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            <circle
              cx="400"
              cy="340"
              r="85"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              strokeDasharray="6 4"
            />
            <circle
              cx="400"
              cy="340"
              r="140"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <text
              x="400"
              y="320"
              fill="#ef4444"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
            >
              TRIGGER FLOOD (38 calls/sec)
            </text>
          </g>
        );

      case "qa-paid-02":
      case "BUG-TUG-004":
        // The Update Game #3: Mobile UI Viewport overlap
        return (
          <g>
            <rect width="800" height="450" fill="#111419" />
            {/* Simulator plaza terrain */}
            <circle cx="400" cy="260" r="160" fill="#182029" stroke="#253241" />
            <rect
              x="360"
              y="180"
              width="80"
              height="80"
              fill="#2a384a"
              stroke="#3e536c"
            />
            {/* Mobile Touch Overlay representation */}
            {/* Left thumbstick */}
            <circle
              cx="110"
              cy="340"
              r="45"
              fill="#222b38"
              fillOpacity="0.5"
              stroke="#475569"
            />
            <circle cx="110" cy="340" r="20" fill="#475569" />
            {/* Right jump button */}
            <circle
              cx="690"
              cy="340"
              r="42"
              fill="#222b38"
              fillOpacity="0.5"
              stroke="#475569"
            />
            <text
              x="690"
              y="345"
              fill="#94a3b8"
              fontSize="13"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              JUMP
            </text>
            {/* Overlapping Quest Box */}
            <rect
              x="540"
              y="260"
              width="210"
              height="115"
              rx="4"
              fill="#2e1a1a"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text
              x="555"
              y="285"
              fill="#ef4444"
              fontSize="12"
              fontFamily="monospace"
            >
              [QUEST] Find 5 Relics
            </text>
            <text
              x="555"
              y="305"
              fill="#f87171"
              fontSize="10"
              fontFamily="sans-serif"
            >
              Progress: 3 / 5
            </text>
            <text
              x="555"
              y="355"
              fill="#ef4444"
              fontSize="11"
              fontFamily="monospace"
            >
              OVERLAPPING TOUCH SINK
            </text>
          </g>
        );

      case "proj-01-core-combat":
        // Combat systems: Raycast hitbox sub-stepping
        return (
          <g>
            <rect width="800" height="450" fill="#0f1117" />
            {/* Arena floor */}
            <path
              d="M0 320 L800 320 M100 450 L350 320 M700 450 L450 320"
              stroke="#1f2533"
              strokeWidth="1.5"
            />
            {/* R15 Character Wireframe (Attacker) */}
            <rect
              x="260"
              y="200"
              width="40"
              height="55"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <rect
              x="265"
              y="160"
              width="30"
              height="30"
              rx="4"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            {/* Melee weapon & Raycast trail */}
            <line
              x1="295"
              y1="210"
              x2="410"
              y2="175"
              stroke="#e2b053"
              strokeWidth="3"
            />
            {/* Sub-step raycast rays */}
            <path
              d="M 295 210 Q 370 140 450 200"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle cx="360" cy="155" r="3" fill="#f59e0b" />
            <circle cx="410" cy="175" r="3" fill="#f59e0b" />
            <circle cx="450" cy="200" r="4" fill="#10b981" />
            {/* Target Character (Defender) */}
            <rect
              x="440"
              y="200"
              width="40"
              height="55"
              fill="#1e293b"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <rect
              x="445"
              y="160"
              width="30"
              height="30"
              rx="4"
              fill="#1e293b"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            {/* Server validation box */}
            <rect
              x="230"
              y="120"
              width="280"
              height="180"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            <text
              x="240"
              y="140"
              fill="#38bdf8"
              fontSize="11"
              fontFamily="monospace"
            >
              SERVER RAYCAST SUB-STEP (60Hz)
            </text>
            <text
              x="455"
              y="190"
              fill="#10b981"
              fontSize="11"
              fontFamily="monospace"
            >
              HIT VALIDATED
            </text>
          </g>
        );

      case "proj-02-movement-physics":
        // Kinetic Movement: Bezier vault curve & surface normal
        return (
          <g>
            <rect width="800" height="450" fill="#101216" />
            {/* Obstacle block */}
            <rect
              x="380"
              y="240"
              width="140"
              height="150"
              fill="#1e222b"
              stroke="#374151"
              strokeWidth="2"
            />
            <line x1="0" y1="390" x2="800" y2="390" stroke="#252a36" strokeWidth="2" />
            {/* Character approach */}
            <circle cx="280" cy="310" r="14" fill="#1e293b" stroke="#38bdf8" />
            <rect
              x="270"
              y="325"
              width="20"
              height="40"
              fill="#1e293b"
              stroke="#38bdf8"
            />
            {/* Vault curve */}
            <path
              d="M 280 310 Q 380 180 560 330"
              fill="none"
              stroke="#e2b053"
              strokeWidth="3"
            />
            {/* Normal vector arrow */}
            <line
              x1="380"
              y1="280"
              x2="320"
              y2="280"
              stroke="#10b981"
              strokeWidth="2"
            />
            <polygon points="320,276 310,280 320,284" fill="#10b981" />
            <text
              x="320"
              y="265"
              fill="#10b981"
              fontSize="11"
              fontFamily="monospace"
            >
              Surface Normal
            </text>
            {/* Vault landing point */}
            <circle cx="560" cy="330" r="5" fill="#e2b053" />
            <text
              x="560"
              y="360"
              fill="#e2b053"
              fontSize="11"
              fontFamily="monospace"
              textAnchor="middle"
            >
              Target Landing CFrame
            </text>
          </g>
        );

      default:
        // Generic Clean Editorial Roblox Viewport
        return (
          <g>
            <rect width="800" height="450" fill="#111317" />
            {/* Isometric grid lines */}
            <path
              d="M0 320 L800 320 M0 380 L800 380 M200 450 L400 280 M600 450 L400 280"
              stroke="#1d222c"
              strokeWidth="1.5"
            />
            {/* Game Geometry Blocks */}
            <rect
              x="160"
              y="220"
              width="100"
              height="100"
              fill="#1b202a"
              stroke="#2e3748"
              strokeWidth="1.5"
            />
            <rect
              x="340"
              y="180"
              width="120"
              height="140"
              fill="#222936"
              stroke="#3b465c"
              strokeWidth="1.5"
            />
            <rect
              x="540"
              y="240"
              width="90"
              height="80"
              fill="#181d26"
              stroke="#2b3444"
              strokeWidth="1.5"
            />
            {/* Center target indicator */}
            <circle
              cx="400"
              cy="250"
              r="24"
              fill="none"
              stroke="#475569"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text
              x="400"
              y="254"
              fill="#94a3b8"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
            >
              [QA_CAPTURE]
            </text>
          </g>
        );
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-[#27272a] bg-[#121214] font-sans text-xs select-none ${className}`}
    >
      {/* Roblox Topbar Emulation */}
      <div className="flex h-8 items-center justify-between border-b border-[#222225] bg-[#141518] px-3 text-[#9ca3af]">
        <div className="flex items-center gap-2">
          {/* Roblox logo / menu icon placeholder */}
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#20232a] text-[10px] font-bold text-[#e5e7eb]">
            R
          </div>
          <span className="truncate text-[11px] font-medium tracking-wide text-[#d1d5db]">
            {gameName}
          </span>
          <span className="hidden sm:inline rounded bg-[#1f2228] px-1.5 py-0.5 text-[9px] text-[#9ca3af]">
            {category}
          </span>
        </div>

        {/* Studio / QA Metrics Bar */}
        <div className="flex items-center gap-3 text-[10px] text-[#71717a]">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            60.0 FPS
          </span>
          <span className="hidden md:inline">Ping: 42ms</span>
          <span className="hidden lg:inline">Memory: 780MB</span>
          {bugId && (
            <span className="rounded border border-red-500/40 bg-red-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-red-400">
              {bugId}
            </span>
          )}
        </div>
      </div>

      {/* SVG Viewport */}
      <div
        className={`relative w-full ${
          aspectRatio === "video" ? "aspect-video" : "aspect-[16/10]"
        }`}
      >
        <svg
          viewBox="0 0 800 450"
          className="h-full w-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          {renderScene()}
        </svg>

        {/* Subtle QA Telemetry Watermark in bottom corner */}
        <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-2 rounded bg-black/70 px-2 py-1 text-[10px] text-[#9ca3af] backdrop-blur-sm">
          <span className="font-semibold text-[#f4f4f5]">LOG:</span>
          <span>{gameId}</span>
          <span className="text-[#52525b]">|</span>
          <span>VERIFIED_TEST_SAMPLE</span>
        </div>
      </div>
    </div>
  );
};
