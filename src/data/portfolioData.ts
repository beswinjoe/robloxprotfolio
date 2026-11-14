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
    "I script gameplay systems, test game experiences, identify bugs and help developers deliver better Roblox games.",
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
    label: "Paid Tests",
    value: "9",
    subtext: "Studio QA contracts",
    verifiedStatus: "Verified",
  },
  {
    label: "Games Assisted",
    value: "2–3",
    subtext: "Gameplay systems & scripting",
    verifiedStatus: "Documented",
  },
  {
    label: "Verified Earnings",
    value: "$3+",
    subtext: "Buy Me a Coffee supporter earnings",
    verifiedStatus: "Verified",
  },
];

export const GALLERY_GAMES = [
  {
    title: "Run a Dry Cleaner!",
    studio: "Playmade",
    image: "/games/run-a-dry-cleaner.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Miami Crime RP [BETA]",
    studio: "Blox Star Games",
    image: "/games/miami-crime-rp.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Don't Wake Up The Baby",
    studio: "Lamp Studios!",
    image: "/games/dont-wake-up-the-baby.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Duck Dominion [ALPHA]",
    studio: "Winter Wolves Studios",
    image: "/games/duck-dominion.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "Cooked 🍳 [DEV]",
    studio: "lol just cooking",
    image: "/games/cooked.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "The Update Game",
    studio: "The Woods Company",
    image: "/games/the-update-game.jpg",
    category: "Paid Studio QA",
  },
  {
    title: "+1 Ninja Leveling",
    studio: "Hidden Ninja World",
    image: "/games/ninja-leveling.jpg",
    category: "Community QA",
  },
  {
    title: "[🎃 GIANT CROPS] Become the Farmer 🌾",
    studio: "@ozeafh394",
    image: "/games/become-the-farmer.jpg",
    category: "QA Central Voluntary",
  },
  {
    title: "[🌊 UPD] Catch a Sea Monster",
    studio: "Like & Join For Rewards",
    image: "/games/catch-a-sea-monster.png",
    category: "Paid Studio QA",
  },
  {
    title: "Hitman's Days",
    studio: "@NoobyRequiem",
    image: "/games/hitmans-days.png",
    category: "QA Central Voluntary",
  },
];

// ONLY the 10 games with verified uploaded thumbnails:
export const QA_RECORDS: QARecord[] = [
  {
    id: "qa-01",
    gameName: "Run a Dry Cleaner!",
    developer: "Playmade",
    verifiedDeveloper: true,
    category: "Paid Testing",
    image: "/games/run-a-dry-cleaner.jpg",
    testingSummary: "Tycoon progression and conveyor mechanics testing.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: ["Conveyor belt collision drop on frame rate drop"],
    gameplayFeedback: "Kinematic CFrame translation recommended for conveyors.",
    focusAreas: ["Tycoon", "Conveyor Physics"],
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
    image: "/games/miami-crime-rp.jpg",
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
    image: "/games/dont-wake-up-the-baby.jpg",
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
    image: "/games/duck-dominion.jpg",
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
    image: "/games/cooked.jpg",
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
    image: "/games/the-update-game.jpg",
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
    image: "/games/ninja-leveling.jpg",
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
    image: "/games/become-the-farmer.jpg",
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
    gameName: "[🌊 UPD] Catch a Sea Monster",
    developer: "Like & Join For Rewards",
    verifiedDeveloper: false,
    category: "Paid Testing",
    image: "/games/catch-a-sea-monster.png",
    testingSummary: "Fishing rod minigame and water raycast mechanics testing.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: ["Reel-in input sink lockup"],
    gameplayFeedback: "Centralized input unbinding when modal opens.",
    focusAreas: ["Minigame", "Input"],
    evidenceAvailable: true,
    genre: "Fishing",
    verified: true,
  },
  {
    id: "qa-10",
    gameName: "Hitman's Days",
    developer: "@NoobyRequiem",
    verifiedDeveloper: false,
    category: "QA Central Voluntary",
    image: "/games/hitmans-days.png",
    testingSummary: "Stealth vision cones and guard patrol routing testing.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: ["Guard patrol route stall on door instance"],
    gameplayFeedback: "Add waypoint timeouts to stuck NPC pathing.",
    focusAreas: ["Stealth", "AI"],
    evidenceAvailable: true,
    genre: "Stealth",
    verified: true,
  },
];

export const SCRIPTING_PROJECTS: ScriptingProject[] = [
  {
    id: "proj-01-core-combat",
    title: "Server-Authoritative Combat Architecture",
    subtitle: "Raycast Hitbox Sub-stepping & Client Prediction",
    contribution:
      "Engineered the client-server melee combat architecture, server-authoritative raycast hitbox validation, and network replication layer to prevent reach exploits and hit desynchronization.",
    systemsScripted: [
      "Spatial hit-box detection with raycast sub-stepping to prevent tunneling at high ping",
      "Client-predicted attack animations with server rollback & sanity checks",
      "State-machine combo counter with input buffering and cancel windows",
      "Stun and poise mechanics linked to attribute-based character states",
    ],
    technologies: [
      "Luau",
      "Roblox Studio",
      "RaycastParams",
      "RunService",
      "TweenService",
      "CollectionService",
    ],
    developmentDetails:
      "Designed to maintain responsiveness under 150ms+ latency conditions. Integrated server-side cooldown timers and distance verification to eliminate exploitable client-fired remote events.",
    projectStatus: "Core Gameplay Architecture",
    isPlaceholderNotice: true,
    image: "/games/featured-showcase.jpg",
    codeSnippetPreview: {
      filename: "HitboxService.luau",
      code: `-- Server-Authoritative Hitbox Validation with Distance Check
local HitboxService = {}
local MAX_REACH_STUDS = 12.5

function HitboxService:ValidateHit(attacker: Player, targetCharacter: Model, weaponId: string): boolean
    local attackerChar = attacker.Character
    if not attackerChar or not attackerChar:FindFirstChild("HumanoidRootPart") then
        return false
    end
    
    local targetHrp = targetCharacter:FindFirstChild("HumanoidRootPart")
    if not targetHrp then return false end

    -- Distance threshold validation to reject teleport/reach exploits
    local distance = (attackerChar.HumanoidRootPart.Position - targetHrp.Position).Magnitude
    if distance > MAX_REACH_STUDS then
        warn(string.format("[HitboxService] Rejected hit: distance %.1f exceeds limit", distance))
        return false
    end

    -- State verification: ensure attacker is in valid attack frame
    local currentState = attackerChar:GetAttribute("CombatState")
    if currentState ~= "Attacking" then
        return false
    end

    return true
end

return HitboxService`,
      explanation:
        "Sanitizes combat hit inputs on the server using position delta checks, reach limits, and attribute state guards to reject malicious remote events.",
    },
    metrics: [
      { label: "Hit Validation", value: "Server-Authoritative" },
      { label: "Sub-stepping", value: "60 Hz Raycast" },
      { label: "Latency Feel", value: "Client Predicted" },
    ],
  },
  {
    id: "proj-02-movement-physics",
    title: "Locomotion & Parkour Physics Controller",
    subtitle: "Custom Character Movement & Bezier Vaulting",
    contribution:
      "Architected custom character movement mechanics including ledge-grabbing, momentum-preserving sliding, and dynamic vaulting over obstacles without humanoid physics jitter.",
    systemsScripted: [
      "Procedural ledge detection using multi-point raycasting and surface normal alignment",
      "Slope-aware slide physics utilizing VectorForce and Raycast world queries",
      "Vaulting trajectory calculator interpolating character CFrame through bezier arcs",
      "Custom camera spring physics responsive to high-velocity movement",
    ],
    technologies: [
      "Luau",
      "VectorForce",
      "RaycastParams",
      "ContextActionService",
      "UserInputService",
      "Camera Scripting",
    ],
    developmentDetails:
      "Eliminated default Roblox humanoid physics jitter on stepped surfaces by transitioning the character to a custom physics state while sliding. Implemented input buffering so players can queue wall climbs and vaults smoothly.",
    projectStatus: "Movement Systems Module",
    isPlaceholderNotice: true,
    image: "/games/featured-showcase.jpg",
    codeSnippetPreview: {
      filename: "VaultController.luau",
      code: `-- Ledge Detection & Surface Normal Calculation
local function CheckVaultLedge(rootPart: BasePart, direction: Vector3): (boolean, Vector3?, Vector3?)
    local rayOrigin = rootPart.Position + Vector3.new(0, 1.5, 0)
    local rayDirection = direction * 4.0

    local rayParams = RaycastParams.new()
    rayParams.FilterType = RaycastFilterType.Exclude
    rayParams.FilterDescendantsInstances = {rootPart.Parent}

    local forwardHit = workspace:Raycast(rayOrigin, rayDirection, rayParams)
    if forwardHit and forwardHit.Instance.CanCollide then
        -- Secondary downward ray to find ledge top edge
        local topOrigin = forwardHit.Position + (direction * 0.5) + Vector3.new(0, 3, 0)
        local topHit = workspace:Raycast(topOrigin, Vector3.new(0, -4, 0), rayParams)
        if topHit then
            return true, topHit.Position, forwardHit.Normal
        end
    end
    return false, nil, nil
end`,
      explanation:
        "Two-stage raycast calculation detecting both the obstacle face normal and the top ledge landing position for procedural vaulting.",
    },
    metrics: [
      { label: "Raycast Checks", value: "Multi-Point Step" },
      { label: "Controls", value: "Keyboard & Gamepad" },
      { label: "Transitions", value: "CFrame Bezier" },
    ],
  },
  {
    id: "proj-03-session-lifecycle",
    title: "Round Lifecycle & Data Persistence Framework",
    subtitle: "State Machine Synchronization & Session Locks",
    contribution:
      "Built the round lifecycle state machine (Lobby -> Intermission -> Match -> Post-Match) alongside atomic session-locked DataStore persistence guarding against item write duplication bugs.",
    systemsScripted: [
      "Finite State Machine (FSM) managing match transitions and player teleportation",
      "Session-locking data persistence pattern guarding against duplicate item write bugs",
      "Dynamic team balancer automatically reconciling uneven player departures",
      "Replicated state manager synchronizing round countdowns via RemoteEvents",
    ],
    technologies: [
      "Luau",
      "DataStoreService",
      "ProfileService Architecture",
      "BindableEvents",
      "ReplicatedStorage",
    ],
    developmentDetails:
      "Constructed a modular framework where game modes plug into a standardized lifecycle interface. Integrated robust pcall retry wrappers around Roblox DataStore calls to handle throttling during service degradation.",
    projectStatus: "Match Architecture",
    isPlaceholderNotice: true,
    image: "/games/featured-showcase.jpg",
    codeSnippetPreview: {
      filename: "MatchLifecycle.luau",
      code: `-- State Machine Dispatcher for Round States
local MatchLifecycle = {}
MatchLifecycle.__index = MatchLifecycle

export type MatchState = "Lobby" | "Intermission" | "ActiveRound" | "PostMatch"

function MatchLifecycle:SetState(newState: MatchState, payload: table?)
    if self._currentState == newState then return end
    
    local previousState = self._currentState
    self._currentState = newState
    
    -- Fire internal lifecycle hooks
    self.StateChanged:Fire(newState, previousState, payload)
    
    -- Replicate concise state token to all clients
    RemoteStorage.Events.RoundStateUpdate:FireAllClients({
        state = newState,
        timestamp = os.time(),
        duration = payload and payload.duration or 0
    })
end`,
      explanation:
        "Strictly typed state dispatcher ensuring deterministic server-to-client round transitions with lightweight payload replication.",
    },
    metrics: [
      { label: "Data Integrity", value: "Session-Locked" },
      { label: "State Transitions", value: "Deterministic FSM" },
      { label: "Replication", value: "Lightweight Payload" },
    ],
  },
];

export const BUG_REPORTS: BugReport[] = [
  {
    id: "BUG-MCR-001",
    bugTitle: "Vehicle Seat Ejection Exploits Vault Wall Collision Bounds",
    game: "Miami Crime RP [BETA]",
    severity: "Critical",
    stepsToReproduce: [
      "Spawn Sedan or Sports Coupe vehicle.",
      "Reverse the vehicle flush against the exterior south brick wall of the Downtown Bank.",
      "While pressing against the wall surface, tap the Exit Vehicle key (Space / Button Y).",
      "Observe spawn position of player character.",
    ],
    expectedBehaviour:
      "Vehicle exit logic should raycast for safe vacant space around the vehicle. If the primary exit side is obstructed by a wall, player should dismount on the clear opposite side.",
    actualBehaviour:
      "The exit offset pushes the player character directly through the single-sided wall mesh, bypassing the locked security vault doors without initiating alarm triggers.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Video demonstrating 100% reproducible vault breach via passenger dismount geometry offset.",
    suggestedImprovement:
      "Wrap vehicle exit positions in a Raycast query verifying clear line-of-sight from vehicle root to dismount point. If ray hits collidable geometry, fallback to vehicle center top.",
    resolutionStatus: "Confirmed by Dev",
    category: "Physics",
    affectedPlatform: ["PC", "Mobile"],
    dateReported: "QA Log #MCR-22",
    image: "/games/miami-crime-rp.jpg",
  },
  {
    id: "BUG-CKD-002",
    bugTitle: "Atomic Pickup Race Condition Causes Infinite Ingredient Duplication",
    game: "Cooked 🍳 [DEV]",
    severity: "High",
    stepsToReproduce: [
      "Place any high-tier prepared meal (e.g., Deluxe Stew) on central counter prep surface.",
      "Position two players directly adjacent to the counter.",
      "Both players press interact key (E / Mobile Tap) simultaneously on the same frame.",
      "Inspect inventories and counter surface.",
    ],
    expectedBehaviour:
      "The server should grant ownership to the first verified packet and immediately reject or cancel the second interaction with a 'Item Already Claimed' response.",
    actualBehaviour:
      "Both client requests are approved because the server checks item existence before locking it, resulting in both players receiving a clone of the meal while one remains on the counter.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Network packet timeline showing dual client-claim remotes evaluated concurrently without mutex lock.",
    suggestedImprovement:
      "Introduce an atomic ownership lock flag on the item table on the server tick. Wrap item transfer in a single-threaded server lock token.",
    resolutionStatus: "Resolved",
    category: "Economy",
    affectedPlatform: ["PC", "Mobile", "Console"],
    dateReported: "QA Log #CK-88",
    image: "/games/cooked.jpg",
  },
  {
    id: "BUG-TUG-003",
    bugTitle: "Quest Dialogue Tracker Obstructs Jump Button on Mobile 16:9 Viewports",
    game: "The Update Game",
    severity: "Medium",
    stepsToReproduce: [
      "Launch game on mobile device or set Roblox Studio emulator to iPhone 12 / 14 resolution (16:9 - 19.5:9 aspect ratio).",
      "Accept any active event quest with multi-line objectives.",
      "Observe bottom right corner of touchscreen overlay.",
    ],
    expectedBehaviour:
      "UI elements should anchor dynamically and respect GuiService safe-area insets, maintaining a clear 24px margin around mobile action buttons.",
    actualBehaviour:
      "The active quest panel extends into the lower right quad, directly intercepting touch events intended for the jump and sprint touch buttons.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Touch emulator capture showing quest bounding frame covering 40% of the dynamic jump touch target.",
    suggestedImprovement:
      "Anchor the quest tracker to top-left or top-center on mobile screen sizes and enable AutomaticSize with clamped max dimensions.",
    resolutionStatus: "Resolved",
    category: "Mobile",
    affectedPlatform: ["Mobile", "Tablet"],
    dateReported: "QA Log #TUG-41",
    image: "/games/the-update-game.jpg",
  },
  {
    id: "BUG-DWTB-004",
    bugTitle: "Proximity Trigger Debounce Failure Floods Server Memory",
    game: "Don't Wake Up The Baby",
    severity: "High",
    stepsToReproduce: [
      "Navigate to second-floor nursery hallway with squeaky floorboard hazards.",
      "Rapidly tap directional keys (A/D or thumbstick jitter) directly on the floorboard seam.",
      "Monitor Developer Console (F9) server memory and network ping.",
    ],
    expectedBehaviour:
      "Floorboard trigger should engage a cooldown timer (e.g. 1.5 seconds) per player instance to avoid spamming noise calculation remotes.",
    actualBehaviour:
      "Touch event fires 30–50 times per second without debounce, generating dozens of sound instances and rapid network packets that degrade server tick rate.",
    evidenceType: "log",
    evidenceDescription:
      "Developer Console logs recording 240+ Sound instances spawned within 4 seconds, increasing ping by 120ms.",
    suggestedImprovement:
      "Add strict per-player debounce table using `os.clock()` checks before firing noise event handlers.",
    resolutionStatus: "Mitigated",
    category: "Replication",
    affectedPlatform: ["PC", "Mobile", "Console"],
    dateReported: "QA Log #DWTB-09",
    image: "/games/dont-wake-up-the-baby.jpg",
  },
  {
    id: "BUG-RDC-005",
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
    affectedPlatform: ["PC", "Mobile"],
    dateReported: "QA Log #RDC-14",
    image: "/games/run-a-dry-cleaner.jpg",
  },
  {
    id: "BUG-CSM-006",
    bugTitle: "Inventory Menu Toggle Mid-Reel Freezes Character Controls",
    game: "[🌊 UPD] Catch a Sea Monster",
    severity: "Medium",
    stepsToReproduce: [
      "Hook a rare or higher sea creature in Deep Ocean Zone.",
      "Enter the active tension reel-in minigame.",
      "Press the Backpack hotkey ('`' / Back button) while tension meter is active.",
      "Close the backpack menu.",
    ],
    expectedBehaviour:
      "Backpack toggle should be disabled during minigames, or opening it should pause/cancel the minigame safely and restore character movement.",
    actualBehaviour:
      "The minigame UI is hidden, but the ContextActionService input sink remains bound, leaving the player permanently immobilized until character reset.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Screen capture of immobilized character in ocean zone with UI disabled and movement controls locked.",
    suggestedImprovement:
      "Use a centralized InputManager that handles UI focus states and guarantees unbinding of action sinks whenever modal interfaces open.",
    resolutionStatus: "Resolved",
    category: "UI/UX",
    affectedPlatform: ["PC", "Console"],
    dateReported: "QA Log #CSM-17",
    image: "/games/catch-a-sea-monster.png",
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
          "In-depth command of Studio tools, Explorer hierarchy, Physics analyzer, MicroProfiler, and Developer Console.",
        level: "Core",
      },
      {
        name: "Luau Scripting",
        description:
          "Writing type-checked, performant Luau code with modern syntax, modular structures, and clean API boundaries.",
        level: "Advanced",
      },
      {
        name: "Gameplay Systems",
        description:
          "Architecting server-authoritative state machines, round lifecycles, weapon handlers, and clean remote communication.",
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
          "Evaluating rule adherence, game balance pacing, mini-game precision, input buffering, and player friction points.",
        level: "Core",
      },
      {
        name: "Bug Identification",
        description:
          "Spotting subtle mechanical glitches, memory leaks, security oversights, and unhandled edge conditions before public release.",
        level: "Advanced",
      },
      {
        name: "Bug Reproduction",
        description:
          "Formulating concise, deterministic, 100% reproducible step-by-step reports with isolated test parameters.",
        level: "Core",
      },
      {
        name: "Multiplayer Testing",
        description:
          "Stress testing high player concurrency, race conditions, atomic item claims, and server-client state divergence.",
        level: "Advanced",
      },
      {
        name: "UI Testing",
        description:
          "Evaluating mobile safe-area insets, aspect ratio scaling, touch button accessibility, and visual hierarchy under pressure.",
        level: "Proficient",
      },
      {
        name: "Hitbox & Physics Testing",
        description:
          "Verifying raycast sub-stepping, spatial bounds, lag compensation, tunneling at high velocities, and seam breaches.",
        level: "Advanced",
      },
    ],
  },
];

export const CONTACT_INFO = {
  discord: "beswinjoe",
  email: "beswinjoewrk@gmail.com",
  github: "https://github.com/beswinjoe",
  robloxProfile: "https://www.roblox.com/users/profile?username=beswinjee",
  qaCentralProfile: "https://qacentral.example.com/testers/beswinjee",
};
