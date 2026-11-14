import {
  BugReport,
  QARecord,
  ScriptingProject,
  SkillCategory,
  PortfolioStatistic,
} from "@/types/portfolio";

export const PORTFOLIO_HERO = {
  name: "Beswin Joe",
  username: "beswinjee",
  role: "Roblox Developer & QA Tester",
  website: "beswinjoe.me/roblox",
  tagline:
    "I script gameplay systems, test game experiences, identify bugs and help developers improve their Roblox games.",
  headline: "I build and test",
  headlineAccent: "Roblox games.",
  availability: "Available for QA testing & Luau scripting",
};

export const PORTFOLIO_STATS: PortfolioStatistic[] = [
  {
    label: "Games Tested",
    value: "15",
    subtext: "Documented testing records",
    verifiedStatus: "Documented",
  },
  {
    label: "Paid QA Contracts",
    value: "9",
    subtext: "Studio QA contracts",
    verifiedStatus: "Verified",
  },
  {
    label: "Defects Documented",
    value: "50+",
    subtext: "100% reproducible bug reports",
    verifiedStatus: "Documented",
  },
  {
    label: "Earned in QA",
    value: "10K+ R$",
    subtext: "Robux payouts & $3+ supporter earnings",
    verifiedStatus: "Verified",
  },
];

// Carousel gallery with ONLY genuine cropped thumbnails
export const GALLERY_GAMES = [
  {
    title: "Miami Crime RP [BETA]",
    studio: "Blox Star Games",
    image: "/games/thumbs/miami-crime-rp.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Run a Dry Cleaner!",
    studio: "Playmade",
    image: "/games/thumbs/run-a-dry-cleaner.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Don't Wake Up The Baby",
    studio: "Lamp Studios!",
    image: "/games/thumbs/dont-wake-up-the-baby.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Duck Dominion [ALPHA]",
    studio: "Winter Wolves Studios",
    image: "/games/thumbs/duck-dominion.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Cooked 🍳 [DEV]",
    studio: "lol just cooking",
    image: "/games/thumbs/cooked.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "The Update Game",
    studio: "The Woods Company",
    image: "/games/thumbs/the-update-game.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "+1 Ninja Leveling",
    studio: "Hidden Ninja World",
    image: "/games/thumbs/ninja-leveling.jpg",
    category: "Community QA",
  },
  {
    title: "[🎃 GIANT CROPS] Become the Farmer 🌾",
    studio: "@ozeafh394",
    image: "/games/thumbs/become-the-farmer.jpg",
    category: "QA Central Voluntary",
  },
  {
    title: "Beam and Steal an Egg",
    studio: "QA Central Record",
    image: "/games/thumbs/beam-and-steal-an-egg.jpg",
    category: "QA Central Voluntary",
  },
  {
    title: "One Piece Farm",
    studio: "Anime Tycoons",
    image: "/games/thumbs/one-piece-farm.jpg",
    category: "Community QA",
  },
];

// Games Tested - ONLY real thumbnail games, no blank placeholders!
export const QA_RECORDS: QARecord[] = [
  {
    id: "qa-01",
    gameName: "Run a Dry Cleaner!",
    developer: "Playmade",
    verifiedDeveloper: true,
    category: "Paid Testing",
    image: "/games/thumbs/run-a-dry-cleaner.jpg",
    testingSummary: "Tycoon progression curves and conveyor physics reliability.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: ["Conveyor collision drop on framerate dips"],
    gameplayFeedback: "Kinematic CFrame translation recommended for conveyors.",
    focusAreas: ["Tycoon", "Physics"],
    evidenceAvailable: true,
    genre: "Tycoon",
    verified: true,
  },
  {
    id: "qa-02",
    gameName: "Miami Crime RP [BETA]",
    developer: "Blox Star Games",
    verifiedDeveloper: false,
    category: "Paid Testing",
    image: "/games/thumbs/miami-crime-rp.jpg",
    testingSummary: "Vehicle handling and urban boundary collision testing.",
    bugsDiscoveredCount: 7,
    keyBugsHighlight: ["Vehicle seat exit wall breach"],
    gameplayFeedback: "Raycast safe-zone validation required on dismount.",
    focusAreas: ["Vehicle Physics", "Collision"],
    evidenceAvailable: true,
    genre: "Roleplay",
    verified: true,
  },
  {
    id: "qa-03",
    gameName: "Don't Wake Up The Baby",
    developer: "Lamp Studios!",
    verifiedDeveloper: false,
    category: "Paid Testing",
    image: "/games/thumbs/dont-wake-up-the-baby.jpg",
    testingSummary: "Stealth detection and sound trigger debounce testing.",
    bugsDiscoveredCount: 6,
    keyBugsHighlight: ["Proximity trigger debounce memory leak"],
    gameplayFeedback: "Add debounce cooldown on floorboard triggers.",
    focusAreas: ["Stealth", "Audio Triggers"],
    evidenceAvailable: true,
    genre: "Survival",
    verified: true,
  },
  {
    id: "qa-04",
    gameName: "Duck Dominion [ALPHA]",
    developer: "Winter Wolves Studios",
    verifiedDeveloper: false,
    category: "Paid Testing",
    image: "/games/thumbs/duck-dominion.jpg",
    testingSummary: "Alpha unit flocking and territory capture testing.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: ["Unit cluster pathfinding choke"],
    gameplayFeedback: "Strip dev debug remotes before public testing.",
    focusAreas: ["AI", "Territory"],
    evidenceAvailable: true,
    genre: "Strategy",
    verified: true,
  },
  {
    id: "qa-05",
    gameName: "Cooked 🍳 [DEV]",
    developer: "lol just cooking",
    verifiedDeveloper: false,
    category: "Paid Testing",
    image: "/games/thumbs/cooked.jpg",
    testingSummary: "Multiplayer co-op cooking and item handoff race condition testing.",
    bugsDiscoveredCount: 6,
    keyBugsHighlight: ["Dual-claim ingredient duplication exploit"],
    gameplayFeedback: "Atomic ownership locks on server pickups.",
    focusAreas: ["Multiplayer", "Economy"],
    evidenceAvailable: true,
    genre: "Party / Co-op",
    verified: true,
  },
  {
    id: "qa-06",
    gameName: "The Update Game",
    developer: "The Woods Company",
    verifiedDeveloper: true,
    category: "Paid Testing",
    image: "/games/thumbs/the-update-game.jpg",
    testingSummary: "Live-ops quest debounce and mobile viewport testing.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: ["Quest dialogue box overlaps jump button"],
    gameplayFeedback: "Anchor tracker respecting GuiService insets.",
    focusAreas: ["Mobile UI", "Quests"],
    evidenceAvailable: true,
    genre: "Simulator",
    verified: true,
  },
  {
    id: "qa-07",
    gameName: "+1 Ninja Leveling",
    developer: "Hidden Ninja World",
    verifiedDeveloper: false,
    category: "Unverified / Pending Audit",
    image: "/games/thumbs/ninja-leveling.jpg",
    testingSummary: "Progression multipliers and training ground testing.",
    bugsDiscoveredCount: 3,
    keyBugsHighlight: ["Chakra training multiplier infinite stack"],
    gameplayFeedback: "Transactional saves for gem expenditures.",
    focusAreas: ["Progression", "Balance"],
    evidenceAvailable: true,
    genre: "RPG",
    verified: false,
  },
  {
    id: "qa-08",
    gameName: "[🎃 GIANT CROPS] Become the Farmer 🌾",
    developer: "@ozeafh394",
    verifiedDeveloper: false,
    category: "QA Central Voluntary",
    image: "/games/thumbs/become-the-farmer.jpg",
    testingSummary: "Crop growth timers and grid placement testing.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: ["Crop growth timer reset on rejoin"],
    gameplayFeedback: "Save absolute epoch timestamps for crop cycles.",
    focusAreas: ["Timers", "Farming"],
    evidenceAvailable: true,
    genre: "Farming",
    verified: true,
  },
  {
    id: "qa-09",
    gameName: "Beam and Steal an Egg",
    developer: "QA Central Record",
    verifiedDeveloper: true,
    category: "QA Central Voluntary",
    image: "/games/thumbs/beam-and-steal-an-egg.jpg",
    testingSummary: "Secret egg drop rates, hit detection debounce, and currency multiplier balance.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: ["Admin egg hit registration desync under high latency"],
    gameplayFeedback: "Add server-side rate-limiting on hit interaction remotes.",
    focusAreas: ["Hit Registration", "RNG Tables"],
    evidenceAvailable: true,
    genre: "Simulator",
    verified: true,
  },
  {
    id: "qa-10",
    gameName: "One Piece Farm",
    developer: "Anime Tycoons",
    verifiedDeveloper: false,
    category: "Paid Testing",
    image: "/games/thumbs/one-piece-farm.jpg",
    testingSummary: "Boss raid arena boundaries, treasure claim concurrency, and power scaling.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: ["Treasure chest simultaneous claim item duplication"],
    gameplayFeedback: "Implement atomic mutex locks on chest reward distribution.",
    focusAreas: ["Concurrency", "Boss Raids"],
    evidenceAvailable: true,
    genre: "Anime / RPG",
    verified: true,
  },
];

// Scripting: Show ONLY the games & what Beswin contributed (NO codes or brainrot!)
export const SCRIPTING_PROJECTS: ScriptingProject[] = [
  {
    id: "proj-01-combat",
    title: "Melee Combat & Hit Detection Engine",
    subtitle: "Combat Systems & Client-Server Replication",
    contribution:
      "Scripted the complete melee combat system including server-authoritative raycast hitbox validation, attack combo chains, stun states, and lag-compensated hit registration.",
    systemsScripted: [
      "Server-authoritative raycast hitbox detection (60 Hz sub-stepping)",
      "State-machine attack combo counter with cancel windows",
      "Stun and poise mechanics linked to character attributes",
      "Network replication guarding against reach and teleport exploits",
    ],
    technologies: ["Luau", "Roblox Studio", "RaycastParams", "RunService"],
    developmentDetails:
      "Engineered to maintain responsive combat feel under 150ms+ ping while rejecting manipulated client hit events.",
    projectStatus: "Gameplay Systems",
    isPlaceholderNotice: false,
    image: "/games/thumbs/miami-crime-rp.jpg",
  },
  {
    id: "proj-02-parkour",
    title: "Parkour & Locomotion Movement Controller",
    subtitle: "Custom Character Movement & Physics",
    contribution:
      "Scripted custom character parkour locomotion mechanics: procedural ledge-grabbing, momentum-preserving slope sliding, and smooth vaulting over obstacles without humanoid jitter.",
    systemsScripted: [
      "Procedural ledge detection using multi-ray world queries",
      "Slope-aware slide physics using VectorForce constraints",
      "Dynamic bezier vaulting trajectory calculator",
      "Custom responsive camera spring physics for high-speed parkour",
    ],
    technologies: ["Luau", "VectorForce", "ContextActionService", "Camera"],
    developmentDetails:
      "Replaced standard Roblox humanoid movement on slopes with custom physics states to eliminate stepping stutter.",
    projectStatus: "Locomotion Systems",
    isPlaceholderNotice: false,
    image: "/games/thumbs/do-not-stop.jpg",
  },
  {
    id: "proj-03-lifecycle",
    title: "Match Lifecycle & Data Persistence Framework",
    subtitle: "Round Management & Save Systems",
    contribution:
      "Built the round lifecycle state machine (Lobby → Intermission → Round → Results) alongside session-locked player DataStore saving to prevent item duplication.",
    systemsScripted: [
      "Finite State Machine managing match transitions and player spawns",
      "Session-locking DataStore persistence preventing duplicate item write bugs",
      "Automatic dynamic team balancer on player disconnects",
      "Synchronized round countdown replication across server and clients",
    ],
    technologies: ["Luau", "DataStoreService", "BindableEvents", "Remotes"],
    developmentDetails:
      "Built modular lifecycle interface with robust pcall retry wrappers around Roblox DataStore calls to handle service throttles.",
    projectStatus: "Framework Architecture",
    isPlaceholderNotice: false,
    image: "/games/thumbs/run-a-dry-cleaner.jpg",
  },
];

export const BUG_REPORTS: BugReport[] = [
  {
    id: "BUG-01",
    bugTitle: "Vehicle Seat Dismount Exploits Vault Wall Collision Bounds",
    game: "Miami Crime RP [BETA]",
    severity: "Critical",
    stepsToReproduce: [
      "Spawn vehicle and reverse flush against exterior south wall of the Downtown Bank.",
      "While pressing against the wall surface, tap the Exit Vehicle key (Space / Button Y).",
      "Observe character dismount position.",
    ],
    expectedBehaviour:
      "Player should dismount on the safe, unobstructed side of the vehicle.",
    actualBehaviour:
      "The exit offset pushes the character through the single-sided wall mesh, bypassing security vault doors.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Video demonstrating 100% reproducible vault breach via passenger dismount geometry offset.",
    suggestedImprovement:
      "Wrap vehicle exit positions in a Raycast query verifying clear line-of-sight from vehicle root to dismount point.",
    resolutionStatus: "Confirmed by Dev",
    category: "Physics",
    image: "/games/thumbs/miami-crime-rp.jpg",
  },
  {
    id: "BUG-02",
    bugTitle: "Atomic Pickup Race Condition Causes Item Duplication",
    game: "Cooked 🍳 [DEV]",
    severity: "High",
    stepsToReproduce: [
      "Place prepared meal on central counter prep surface.",
      "Position two players directly adjacent to the counter.",
      "Both players press interact key simultaneously on the same frame.",
      "Inspect player inventories and counter surface.",
    ],
    expectedBehaviour:
      "Server should grant ownership to first verified packet and reject the second claim.",
    actualBehaviour:
      "Both client requests approve concurrently because item existence is checked before locking, cloning the meal.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Network packet timeline showing dual client-claim remotes evaluated concurrently without mutex lock.",
    suggestedImprovement:
      "Introduce an atomic ownership lock flag on the item table on the server tick.",
    resolutionStatus: "Resolved",
    category: "Economy",
    image: "/games/thumbs/cooked.jpg",
  },
  {
    id: "BUG-03",
    bugTitle: "Quest Dialogue Tracker Obstructs Jump Button on Mobile Viewports",
    game: "The Update Game",
    severity: "Medium",
    stepsToReproduce: [
      "Launch game on mobile device or set Studio emulator to iPhone 12 / 14 resolution.",
      "Accept active event quest with multi-line objectives.",
      "Observe bottom right corner of touchscreen overlay.",
    ],
    expectedBehaviour:
      "UI elements should anchor dynamically and respect GuiService safe-area insets, maintaining a clear margin around jump button.",
    actualBehaviour:
      "The active quest panel extends into the lower right quad, directly intercepting touch events intended for the jump button.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Touch emulator capture showing quest bounding frame covering 40% of the dynamic jump touch target.",
    suggestedImprovement:
      "Anchor the quest tracker to top-left on mobile screen sizes and enable AutomaticSize with clamped max dimensions.",
    resolutionStatus: "Resolved",
    category: "Mobile",
    image: "/games/thumbs/the-update-game.jpg",
  },
  {
    id: "BUG-04",
    bugTitle: "Proximity Trigger Debounce Failure Floods Server Memory",
    game: "Don't Wake Up The Baby",
    severity: "High",
    stepsToReproduce: [
      "Navigate to nursery hallway with floorboard hazards.",
      "Rapidly tap directional keys directly on the floorboard seam.",
      "Monitor Developer Console (F9) server memory and network ping.",
    ],
    expectedBehaviour:
      "Floorboard trigger should engage a cooldown timer per player instance to avoid spamming noise remotes.",
    actualBehaviour:
      "Touch event fires 30–50 times per second without debounce, generating dozens of sound instances and degrading tick rate.",
    evidenceType: "log",
    evidenceDescription:
      "Developer Console logs recording 240+ Sound instances spawned within 4 seconds, increasing ping by 120ms.",
    suggestedImprovement:
      "Add strict per-player debounce table using os.clock() checks before firing noise event handlers.",
    resolutionStatus: "Mitigated",
    category: "Replication",
    image: "/games/thumbs/dont-wake-up-the-baby.jpg",
  },
  {
    id: "BUG-05",
    bugTitle: "Garment Part Sinks Through Conveyor Floor on Framerate Drops",
    game: "Run a Dry Cleaner!",
    severity: "High",
    stepsToReproduce: [
      "Place 8 garments simultaneously on Tier 2 conveyor belt.",
      "Throttle client FPS to 20 via Studio microprofiler debug menu.",
      "Observe physics collision along the belt transition seam.",
    ],
    expectedBehaviour:
      "Garments should remain supported by the conveyor collision bounds regardless of framerate variations.",
    actualBehaviour:
      "Discrete physics sub-steps skip collision resolution at lower framerates, dropping garments through the floor mesh.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Garment physics asset trapped in sub-floor void causing customer order queue stalls.",
    suggestedImprovement:
      "Use kinematic CFrame translation for conveyor belts instead of raw physics friction constraints.",
    resolutionStatus: "Resolved",
    category: "Physics",
    image: "/games/thumbs/run-a-dry-cleaner.jpg",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Development",
    description:
      "Technical proficiency in Roblox game architecture, scripting, and engine tooling.",
    skills: [
      {
        name: "Roblox Studio",
        description:
          "Explorer hierarchy, Physics analyzer, MicroProfiler, and Developer Console.",
        level: "Core",
      },
      {
        name: "Luau Scripting",
        description:
          "Type-checked performant Luau code, clean architecture, and modular systems.",
        level: "Advanced",
      },
      {
        name: "Gameplay Systems",
        description:
          "Server-authoritative state machines, round lifecycles, and combat handlers.",
        level: "Proficient",
      },
    ],
  },
  {
    title: "Quality Assurance",
    description:
      "Systematic defect discovery, clear documentation, and developer-aligned diagnostics.",
    skills: [
      {
        name: "Gameplay Testing",
        description:
          "Evaluating rule adherence, game balance pacing, and player friction points.",
        level: "Core",
      },
      {
        name: "Bug Identification",
        description:
          "Spotting subtle mechanical glitches, memory leaks, and unhandled edge conditions.",
        level: "Advanced",
      },
      {
        name: "Bug Reproduction",
        description:
          "Formulating deterministic, 100% reproducible step-by-step reports.",
        level: "Core",
      },
      {
        name: "Multiplayer Testing",
        description:
          "Testing concurrency, race conditions, atomic item claims, and state divergence.",
        level: "Advanced",
      },
      {
        name: "UI Testing",
        description:
          "Evaluating mobile safe-area insets, touch button accessibility, and scaling.",
        level: "Proficient",
      },
      {
        name: "Hitbox & Physics Testing",
        description:
          "Verifying raycast bounds, lag compensation, and high-velocity tunneling.",
        level: "Advanced",
      },
    ],
  },
];

export const CONTACT_INFO = {
  discord: "beswinjoe",
  email: "beswinjoewrk@gmail.com",
  robloxProfile: "https://www.roblox.com/users/profile?username=beswinjee",
  qaCentralProfile: "https://qacentral.example.com/testers/beswinjee",
};
