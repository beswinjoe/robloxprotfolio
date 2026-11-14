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
    subtext: "Deduplicated testing records",
    verifiedStatus: "Documented",
  },
  {
    label: "Paid Tests",
    value: "9",
    subtext: "Documented studio QA contracts",
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

export const QA_RECORDS: QARecord[] = [
  // --- 1. Paid Testing Records (9 games) ---
  {
    id: "qa-paid-07",
    gameName: "Run a Dry Cleaner!",
    developer: "Playmade",
    verifiedDeveloper: true,
    maturity: "Minimal",
    likes: 11,
    dislikes: 3,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/run-a-dry-cleaner.jpg",
    testingSummary:
      "Evaluated tycoon progression curves, conveyor belt physics reliability, NPC order fulfillment queues, and multi-tier equipment upgrade economy math.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: [
      "Conveyor belt physics dropping garment parts through floor on frame drops",
      "Customer NPC queue freezing when two NPCs attempted to claim the same register",
      "Automated garment washer upgrade applying negative timer offset at tier 5",
    ],
    gameplayFeedback:
      "Provided balanced mathematical progression tables and suggested using CFrame translation over physics constraints for reliable conveyor transport.",
    focusAreas: ["Tycoon Math", "Conveyor Physics", "NPC Queue Handling"],
    evidenceAvailable: true,
    genre: "Tycoon / Simulator",
    verified: true,
  },
  {
    id: "qa-paid-06",
    gameName: "Miami Crime RP [BETA]",
    developer: "Blox Star Games",
    verifiedDeveloper: false,
    maturity: "Moderate",
    likes: 42,
    dislikes: 16,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/miami-crime-rp.jpg",
    testingSummary:
      "Conducted vehicle handling testing, weapon hit registration in dense urban zones, job payout balance, and door/building collision breach vulnerability testing.",
    bugsDiscoveredCount: 7,
    keyBugsHighlight: [
      "Vehicle collision breach allowing players to phase through bank vault walls",
      "Weapon fire rate desync between first-person and third-person camera angles",
      "Police arrest tool failing if suspect was seated in passenger vehicle seat",
    ],
    gameplayFeedback:
      "Detailed recommendations for reinforcing Raycast-based interior boundaries and standardizing vehicle seat state interaction flags.",
    focusAreas: ["Vehicle Physics", "Hit Registration", "Collision Breaches"],
    evidenceAvailable: true,
    genre: "Open World Roleplay",
    verified: true,
  },
  {
    id: "qa-paid-08",
    gameName: "Don't Wake Up The Baby",
    developer: "Lamp Studios!",
    verifiedDeveloper: false,
    maturity: "Minimal",
    likes: 18,
    dislikes: 4,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/dont-wake-up-the-baby.jpg",
    testingSummary:
      "Investigated stealth detection radii, noise meter threshold accumulation, sound trigger responsiveness, and progression checkpoint triggers in cooperative play.",
    bugsDiscoveredCount: 6,
    keyBugsHighlight: [
      "Noise meter failing to reset after spectating player rejoined round",
      "Creaking floorboard sound trigger firing repeatedly if player stood on surface edge",
      "Crouch speed multiplier failing to apply when toggling quickly during sprint",
    ],
    gameplayFeedback:
      "Recommended adding proximity debounce zones and sound trigger hysteresis to prevent auditory trigger flooding.",
    focusAreas: ["Stealth Mechanics", "Audio Triggers", "Movement States"],
    evidenceAvailable: true,
    genre: "Horror / Co-op Survival",
    verified: true,
  },
  {
    id: "qa-paid-09",
    gameName: "Duck Dominion [ALPHA]",
    developer: "Winter Wolves Studios",
    verifiedDeveloper: false,
    maturity: "Mild",
    likes: 31,
    dislikes: 7,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/duck-dominion.jpg",
    testingSummary:
      "Tested early alpha systems, unit flocking pathfinding, base upgrades, territory capture flag calculations, and multiplayer server replication stability.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: [
      "Flocking units grouping into unpathable clusters at narrow bridge choke points",
      "Territory capture percentage desynchronizing between opposing teams",
      "Alpha build debug commands left accessible in client-side script",
    ],
    gameplayFeedback:
      "Critical security note provided to strip dev debug remotes before moving from closed alpha to public testing.",
    focusAreas: ["Alpha Systems", "Flocking AI", "Remote Security"],
    evidenceAvailable: true,
    genre: "Strategy / Territory Alpha",
    verified: true,
  },
  {
    id: "qa-paid-05",
    gameName: "Cooked 🍳 [DEV]",
    developer: "lol just cooking",
    verifiedDeveloper: false,
    maturity: "Minimal • Ages 16+",
    likes: 0,
    dislikes: 0,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/cooked.jpg",
    testingSummary:
      "Rigorous multiplayer co-op kitchen testing: ingredient interaction states, cooking timers, fire spread logic, and cross-player item handoffs under variable ping.",
    bugsDiscoveredCount: 6,
    keyBugsHighlight: [
      "Ingredient item duplicate glitch when two players picked up same plate on same tick",
      "Extinguisher particle effect persisting infinitely after extinguish completed",
      "Order timer expiring without failing round if player held cooked meal in hand",
    ],
    gameplayFeedback:
      "Advised using atomic server pickup grants with acknowledgement IDs to prevent dual-claim ingredient duplication.",
    focusAreas: ["Network Handoffs", "State Synchronization", "Order Timers"],
    evidenceAvailable: true,
    genre: "Party / Co-op Kitchen",
    verified: true,
  },
  {
    id: "qa-paid-03",
    gameName: "The Update Game",
    developer: "The Woods Company",
    verifiedDeveloper: true,
    maturity: "Minimal • Ages 16+",
    likes: 8,
    dislikes: 2,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/the-update-game.jpg",
    testingSummary:
      "Tested weekly content update features, quest completion trigger debounce, dynamic event spawns, and mobile UI responsiveness across varying aspect ratios.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: [
      "Quest tracker UI overlapping mobile jump button on 16:9 phones",
      "Event boss despawning prematurely if all players exited zone boundary simultaneously",
      "Reward payout duplicating on rapid double-tap claim button",
    ],
    gameplayFeedback:
      "Advised implementing server-side claim state verification to eliminate duplicate currency claims, alongside responsive UI safe-zone insets for mobile devices.",
    focusAreas: ["Quest Logic", "Mobile UI Viewports", "Reward Claims"],
    evidenceAvailable: true,
    genre: "Live-Ops Simulator",
    verified: true,
  },
  {
    id: "qa-paid-02",
    gameName: "[🌊 UPD] Catch a Sea Monster",
    developer: "Like & Join For Rewards",
    verifiedDeveloper: false,
    maturity: "Minimal • Ages 16+",
    likes: 4,
    dislikes: 0,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/catch-a-sea-monster.png",
    testingSummary:
      "Focused on fishing rod minigame mechanics, water physics raycasting, monster AI aggregation behavior in deep-water zones, and equipment inventory persistence.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: [
      "Reel-in minigame lockup if player opened inventory menu mid-catch",
      "Monster model physics ragdoll jittering violently against shore geometry",
      "Bait consumption decrementing twice when reel failed due to timeout",
    ],
    gameplayFeedback:
      "Highlighted the need for input locks during active mini-games and smoother monster pathfinding interpolation away from shorelines.",
    focusAreas: ["Minigame State", "Inventory Debounce", "Creature AI"],
    evidenceAvailable: true,
    genre: "Action / Fishing Simulator",
    verified: true,
  },
  {
    id: "qa-paid-01",
    gameName: "Cannon Launch",
    developer: "Paid Studio Contract",
    verifiedDeveloper: false,
    maturity: "Minimal",
    likes: 54,
    dislikes: 8,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/featured-showcase.jpg",
    testingSummary:
      "Conducted extensive trajectory physics stress testing, multiplayer cannon queue synchronization, and projectile collision boundary validation across multiple server population loads.",
    bugsDiscoveredCount: 6,
    keyBugsHighlight: [
      "High-velocity projectile tunneling through terrain chunk seams",
      "Rapid click spam causing desynchronization in cannon launch power bar",
      "Player seat weld failing to detach on launch under high ping",
    ],
    gameplayFeedback:
      "Recommended clamping physics sub-stepping on server side and adding camera lead smoothing so players do not lose orientation during extreme velocity launches.",
    focusAreas: ["Trajectory Physics", "Seat Welds", "Network Sub-stepping"],
    evidenceAvailable: true,
    genre: "Physics / Arcade Simulator",
    verified: true,
  },
  {
    id: "qa-paid-04",
    gameName: "Create A Universe 2",
    developer: "Sandbox Studio Client",
    verifiedDeveloper: false,
    maturity: "Minimal",
    likes: 29,
    dislikes: 5,
    category: "Paid Testing",
    testingDate: "Paid Studio QA",
    image: "/games/featured-showcase.jpg",
    testingSummary:
      "Evaluated sandbox creation limits, object placement collision detection, save/load slot integrity for large world builds, and memory consumption during continuous sandbox expansion.",
    bugsDiscoveredCount: 8,
    keyBugsHighlight: [
      "Part count memory spike crashing low-end devices during world deserialization",
      "Object placement snapping inverted on angled planetary surfaces",
      "Undo/redo stack corrupting part hierarchy after deleting grouped models",
    ],
    gameplayFeedback:
      "Suggested batching world load operations across multiple frames (chunking) to prevent memory crashes on mobile/tablet platforms.",
    focusAreas: ["Sandbox Building", "Save/Load Slots", "Memory Profiling"],
    evidenceAvailable: true,
    genre: "Sandbox / World Builder",
    verified: true,
  },

  // --- 2. Additional Testing Records (Unconfirmed Category until verified) ---
  {
    id: "qa-unconfirmed-02",
    gameName: "+1 Ninja Leveling",
    developer: "Hidden Ninja World",
    verifiedDeveloper: false,
    maturity: "Mild • Ages 16+",
    likes: 24,
    dislikes: 1,
    category: "Unverified / Pending Audit",
    testingDate: "Community QA",
    image: "/games/ninja-leveling.jpg",
    testingSummary:
      "Evaluated stat allocation responsiveness, training ground XP multipliers, skill cooldown reset glitches, and leaderboard ranking accuracy.",
    bugsDiscoveredCount: 3,
    keyBugsHighlight: [
      "Chakra training multiplier stacking infinitely after reconnecting during double XP",
      "Dash ability clipping through dojo boundary wall",
      "Stat point reset button deducting gems without refunding points on timeout",
    ],
    gameplayFeedback:
      "Highlighted immediate need for transactional data-saving on gem expenditures and wall boundary collision volume widening.",
    focusAreas: ["Progression Multipliers", "Boundary Clipping", "Currency Locks"],
    evidenceAvailable: true,
    genre: "Action RPG / Anime",
    verified: false,
  },
  {
    id: "qa-unconfirmed-01",
    gameName: "Fishing",
    developer: "Community Project",
    verifiedDeveloper: false,
    maturity: "Minimal",
    likes: 12,
    dislikes: 2,
    category: "Unverified / Pending Audit",
    testingDate: "Pending Verification",
    image: "/games/catch-a-sea-monster.png",
    testingSummary:
      "Tested cast mechanics, water depth interaction, fish rarities table logic, and rod durability drain. Category status logged as pending audit to maintain absolute portfolio accuracy.",
    bugsDiscoveredCount: 3,
    keyBugsHighlight: [
      "Cast distance indicator failing to scale with charge duration",
      "Fish rarity RNG seed predictability under sequential casts",
      "Bobber sinking below ocean floor mesh on specific map coordinates",
    ],
    gameplayFeedback:
      "Recommended implementing server-side random seed generation and clamping bobber raycast targets to water top surface.",
    focusAreas: ["RNG Math", "Water Raycasts", "Cast Mechanics"],
    evidenceAvailable: true,
    genre: "Casual / Fishing",
    verified: false,
  },

  // --- 3. QA Central Tester Résumé Record (4 voluntary tests) ---
  {
    id: "qa-central-04",
    gameName: "Hitman's Days",
    developer: "@NoobyRequiem",
    verifiedDeveloper: false,
    maturity: "Minimal • Ages 16+",
    likes: 3,
    dislikes: 1,
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
    image: "/games/hitmans-days.png",
    testingSummary:
      "Stealth vision cones, guard patrol route loops, assassination prompt keybind responsiveness, and disguise detection logic in urban environments.",
    bugsDiscoveredCount: 5,
    keyBugsHighlight: [
      "Guard patrol route pausing permanently if obstructed by opening door instance",
      "Disguise detection meter remaining at 100% after breaking line-of-sight around corner",
      "Silent takedown animation playing without moving target humanoid into ragdoll state",
    ],
    gameplayFeedback:
      "Suggested adding patrol route waypoint timeouts so stuck NPCs recalculate paths after 3 seconds of zero displacement.",
    focusAreas: ["AI Patrol Routing", "Stealth Cones", "Animation Sync"],
    evidenceAvailable: true,
    genre: "Stealth / Tactical Action",
    verified: true,
  },
  {
    id: "qa-central-03",
    gameName: "[🎃 GIANT CROPS] Become the Farmer 🌾",
    developer: "@ozeafh394",
    verifiedDeveloper: false,
    maturity: "Minimal • Ages 16+",
    likes: 4,
    dislikes: 1,
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
    image: "/games/become-the-farmer.jpg",
    testingSummary:
      "Crop growth timer verification, plot expansion grid placement, harvest tool hitbox detection, and market selling calculations.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: [
      "Crop growth timer resetting back to stage 1 if player rejoined same server",
      "Irrigation sprinkler effect failing to update soil hydration attribute",
      "Tractor vehicle seat ejecting player when driving over furrowed soil boundaries",
    ],
    gameplayFeedback:
      "Detailed fix for saving absolute epoch timestamps for crop growth cycles rather than relying on active server elapsed time.",
    focusAreas: ["Crop Timestamps", "Grid Snapping", "Vehicle Interaction"],
    evidenceAvailable: true,
    genre: "Farming / Simulator",
    verified: true,
  },
  {
    id: "qa-central-01",
    gameName: "60s To Doomsday",
    developer: "QA Central Program",
    verifiedDeveloper: false,
    maturity: "Minimal",
    likes: 15,
    dislikes: 3,
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
    image: "/games/featured-showcase.jpg",
    testingSummary:
      "Survival bunker timer testing, disaster hazard collision radii, item hoarding inventory limits, and evacuation sequence trigger reliability.",
    bugsDiscoveredCount: 4,
    keyBugsHighlight: [
      "Bunker hatch door closing early while players were still inside entry trigger",
      "Radiation disaster effect damaging players already sealed safely inside shelter",
      "Item pickup highlight halo persisting on collected supplies",
    ],
    gameplayFeedback:
      "Advised using spatial overlap checks (`workspace:GetPartsInPart`) rather than simple Touch events for bunker safety verification.",
    focusAreas: ["Bunker Overlap", "Disaster Hazards", "Countdown Logic"],
    evidenceAvailable: true,
    genre: "Survival / Countdown",
    verified: true,
  },
  {
    id: "qa-central-02",
    gameName: "Beam And Steal An Egg",
    developer: "QA Central Program",
    verifiedDeveloper: false,
    maturity: "Minimal",
    likes: 9,
    dislikes: 2,
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
    image: "/games/duck-dominion.jpg",
    testingSummary:
      "UFO tractor beam physics, egg carrying weight balance, defense turret targeting range, and base deposit scoring accuracy.",
    bugsDiscoveredCount: 3,
    keyBugsHighlight: [
      "Tractor beam physics velocity launching eggs into stratosphere when beam canceled abruptly",
      "Egg respawn timer desyncing if stolen egg fell into out-of-bounds void",
      "Turret line-of-sight tracking players through opaque structural barriers",
    ],
    gameplayFeedback:
      "Recommended dampening egg velocity vector on beam detach and raycasting turret line-of-sight against terrain geometry.",
    focusAreas: ["Physics Velocities", "Line-of-Sight", "Scoring Integrity"],
    evidenceAvailable: true,
    genre: "Multiplayer Capture / Physics",
    verified: true,
  },
];

export const BUG_REPORTS: BugReport[] = [
  {
    id: "BUG-CL-001",
    bugTitle: "High-Velocity Projectile Phasing Through Terrain Seams",
    game: "Cannon Launch",
    severity: "Critical",
    stepsToReproduce: [
      "Equip Maximum Charge Cannon (Tier 4 or higher).",
      "Aim launch angle between 12° and 18° directly toward Sector 3 canyon entrance.",
      "Release launch trigger at 100% power gauge while server ping is above 90ms.",
      "Observe character capsule upon impact with the terrain wedge intersection.",
    ],
    expectedBehaviour:
      "Character capsule should trigger collision solver, register surface impact, bounce according to restitution coefficient, and remain on top of terrain.",
    actualBehaviour:
      "At velocities exceeding 280 studs/sec, the character capsule tunnels through the collision seam between voxels and falls into the void, causing instant death and score reset.",
    evidenceType: "screenshot",
    evidenceDescription:
      "Frame capture showing velocity vector reading 312 studs/sec passing through terrain vertex with zero collision event triggered.",
    suggestedImprovement:
      "Implement client-side continuous collision detection (CCD) or cast predictive sub-step raycasts along the velocity trajectory vector every frame prior to CFrame updates.",
    resolutionStatus: "Resolved",
    category: "Physics",
    affectedPlatform: ["PC", "Mobile", "Console"],
    dateReported: "QA Log #CL-104",
    image: "/games/featured-showcase.jpg",
  },
  {
    id: "BUG-MCR-002",
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
    evidenceType: "video",
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
    id: "BUG-CKD-003",
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
    id: "BUG-TUG-004",
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
    id: "BUG-DWTB-005",
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
    id: "BUG-RDC-006",
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
    id: "BUG-CSM-007",
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
  discord: "beswinjee",
  email: "beswinjoe@example.com",
  github: "https://github.com/beswinjee",
  robloxProfile: "https://www.roblox.com/users/beswinjee",
  qaCentralProfile: "https://qacentral.example.com/testers/beswinjee",
};
