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
  tagline:
    "I build gameplay systems, test game experiences and help developers deliver better Roblox games.",
  availability: "Available for select QA testing & Luau scripting contracts",
  location: "Remote / Global",
  specialization: "Luau Gameplay Architecture • Regression QA • Bug Diagnostics",
};

export const SCRIPTING_PROJECTS: ScriptingProject[] = [
  {
    id: "proj-01-core-combat",
    title: "Project Alpha [Unannounced Title]",
    subtitle: "Combat State Machine & Hit Detection Pipeline",
    contribution:
      "Engineered the client-server melee combat architecture, server-authoritative raycast hitbox validation, and network replication layer.",
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
      "Designed to maintain responsiveness under 150ms+ latency conditions. Integrated server-side cooldown timers and distance verification to eliminate exploitable client-fired remote events. Utilized CollectionService tags to dynamically bind combatants without coupling code to rigid object hierarchies.",
    projectStatus: "In Active Studio Development",
    isPlaceholderNotice: true,
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
      { label: "Architecture", value: "Server-Authoritative" },
      { label: "Sub-stepping", value: "60 Hz Raycast" },
      { label: "Exploit Mitigation", value: "Distance & Cooldown Capped" },
    ],
  },
  {
    id: "proj-02-movement-physics",
    title: "Project Kinetic [Physics & Movement]",
    subtitle: "Modular Character Locomotion & Parkour Controller",
    contribution:
      "Architected custom character movement mechanics including ledge-grabbing, momentum-preserving sliding, and dynamic vaulting over obstacles.",
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
      "Eliminated default Roblox humanoid physics jitter on stepped surfaces by transitioning the character to a custom physics state while sliding. Implemented input buffering so players can queue wall climbs and vaults without feeling input lag.",
    projectStatus: "Prototype & Systems Testing",
    isPlaceholderNotice: true,
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
      { label: "Physics Queries", value: "Multi-ray Step" },
      { label: "Latency Feel", value: "Client-Predicted" },
      { label: "Platform Compatibility", value: "PC & Gamepad" },
    ],
  },
  {
    id: "proj-03-session-lifecycle",
    title: "Modular Match & Progression Framework",
    subtitle: "Round Lifecycle Management & DataStore Persistence",
    contribution:
      "Built the round lifecycle state machine (Lobby -> Intermission -> Match -> Post-Match) alongside atomic session data saving.",
    systemsScripted: [
      "Finite State Machine (FSM) managing match transitions and player teleportation",
      "Session-locking data persistence pattern guarding against duplicate item write bugs",
      "Dynamic team balancer automatically reconciling uneven player departures",
      "Replicated state manager synchronizing round countdowns via RemoteEvents",
    ],
    technologies: [
      "Luau",
      "DataStoreService",
      "ProfileService-inspired Session Locks",
      "BindableEvents",
      "ReplicatedStorage",
    ],
    developmentDetails:
      "Constructed a modular framework where game modes plug into a standardized lifecycle interface. Integrated robust pcall retry wrappers around Roblox DataStore calls to handle throttling during service degradation.",
    projectStatus: "Internal Architecture Framework",
    isPlaceholderNotice: true,
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
      { label: "Modularity", value: "Pluggable Modes" },
      { label: "State Sync", value: "Deterministic FSM" },
    ],
  },
];

export const QA_RECORDS: QARecord[] = [
  // --- 1. Paid Testing Records (9 games) ---
  {
    id: "qa-paid-01",
    gameName: "Cannon Launch",
    developer: "Undisclosed Studio / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Recorded video logs of trajectory desync and camera detachment bugs.",
    genre: "Physics / Arcade Simulator",
    verified: true,
  },
  {
    id: "qa-paid-02",
    gameName: "The Update Game #3",
    developer: "Independent Developer / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Screenshots demonstrating mobile viewport clipping and duplication reproduction steps.",
    genre: "Live-Ops Simulator",
    verified: true,
  },
  {
    id: "qa-paid-03",
    gameName: "Create A Universe 2",
    developer: "Sandbox Studio / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Memory profiler graphs and reproduction logs for hierarchy corruption.",
    genre: "Sandbox / World Builder",
    verified: true,
  },
  {
    id: "qa-paid-04",
    gameName: "Catch a Sea Monster",
    developer: "Studio Development / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Video capture of reel-in state lock and menu interaction conflict.",
    genre: "Action / Fishing Simulator",
    verified: true,
  },
  {
    id: "qa-paid-05",
    gameName: "Miami Crime RP #2",
    developer: "Roleplay Development / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Reproduced collision wall breach with video evidence and coordinate coordinates.",
    genre: "Open World Roleplay",
    verified: true,
  },
  {
    id: "qa-paid-06",
    gameName: "Don't Wake Up The Baby",
    developer: "Horror / Stealth Studio / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Detailed bug ticket with step-by-step trigger flooding reproduction.",
    genre: "Horror / Co-op Survival",
    verified: true,
  },
  {
    id: "qa-paid-07",
    gameName: "Duck Dominion [ALPHA]",
    developer: "Alpha Development / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "Report flagged unauthorized remote endpoint discovery and unit pathing knots.",
    genre: "Strategy / Territory Alpha",
    verified: true,
  },
  {
    id: "qa-paid-08",
    gameName: "Run a Dry Cleaner!",
    developer: "Tycoon Developer / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
    testingSummary:
      "Evaluated tycoon progression curves, conveyor belt physics reliability, NPC order fulfillment queues, and multi-tier equipment upgrade math.",
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
    evidenceNotes:
      "Data charts highlighting conveyor fall-through rates and NPC queue stall states.",
    genre: "Tycoon / Management",
    verified: true,
  },
  {
    id: "qa-paid-09",
    gameName: "Cooked",
    developer: "Party Game Studio / Paid Client",
    category: "Paid Testing",
    testingDate: "Documented QA Record",
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
    evidenceNotes:
      "High-priority bug ticket detailing frame-perfect item duplication exploit.",
    genre: "Party / Co-op Kitchen",
    verified: true,
  },

  // --- 2. Additional Testing Records (Unconfirmed Category until verified) ---
  {
    id: "qa-unconfirmed-01",
    gameName: "Fishing",
    developer: "Unverified / Community Project",
    category: "Unverified / Pending Audit",
    testingDate: "Pending Verification",
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
    evidenceNotes:
      "Preliminary test notes recorded; awaiting client verification receipt.",
    genre: "Casual / Fishing",
    verified: false,
  },
  {
    id: "qa-unconfirmed-02",
    gameName: "Ninja Leveling",
    developer: "Unverified / Community Project",
    category: "Unverified / Pending Audit",
    testingDate: "Pending Verification",
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
    evidenceNotes:
      "Exploit reproduction logs documented; category pending full audit.",
    genre: "Action RPG / Anime",
    verified: false,
  },

  // --- 3. QA Central Tester Résumé Record (4 voluntary tests) ---
  {
    id: "qa-central-01",
    gameName: "60s To Doomsday",
    developer: "QA Central Program Submission",
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
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
    evidenceNotes: "Archived QA Central report with test matrices.",
    genre: "Survival / Countdown",
    verified: true,
  },
  {
    id: "qa-central-02",
    gameName: "Beam And Steal An Egg",
    developer: "QA Central Program Submission",
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
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
    evidenceNotes:
      "Logged QA Central bug ticket with tractor beam physics parameters.",
    genre: "Multiplayer Capture / Physics",
    verified: true,
  },
  {
    id: "qa-central-03",
    gameName: "Become the Farmer",
    developer: "QA Central Program Submission",
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
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
    evidenceNotes: "QA Central submission record with timestamp bug writeup.",
    genre: "Farming / Simulator",
    verified: true,
  },
  {
    id: "qa-central-04",
    gameName: "Hitman's Days",
    developer: "QA Central Program Submission",
    category: "QA Central Voluntary",
    testingDate: "QA Central Résumé Archive",
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
    evidenceNotes: "Archived QA Central case study with AI patrol route logs.",
    genre: "Stealth / Tactical Action",
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
  },
  {
    id: "BUG-MCR-002",
    bugTitle: "Vehicle Seat Ejection Exploits Vault Wall Collision Bounds",
    game: "Miami Crime RP #2",
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
  },
  {
    id: "BUG-CKD-003",
    bugTitle: "Atomic Pickup Race Condition Causes Infinite Ingredient Duplication",
    game: "Cooked",
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
  },
  {
    id: "BUG-TUG-004",
    bugTitle: "Quest Dialogue Tracker Obstructs Jump Button on Mobile 16:9 Viewports",
    game: "The Update Game #3",
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
  },
  {
    id: "BUG-CAU-006",
    bugTitle: "Group Model Deserialization Memory Spike Causes Low-End Mobile Crashes",
    game: "Create A Universe 2",
    severity: "Critical",
    stepsToReproduce: [
      "Save a custom world containing 1,500+ grouped parts across 4 planetary orbits.",
      "Attempt to load world slot on 2GB RAM mobile device (e.g., iPhone 8 or lower-tier Android).",
      "Observe app lifecycle during load progress bar.",
    ],
    expectedBehaviour:
      "Parts should stream in progressively over several frames with garbage collection breathing room to stay within memory budget.",
    actualBehaviour:
      "All parts are cloned into workspace within a single frame loop, spiking memory allocation over 650MB and triggering OS low-memory termination.",
    evidenceType: "log",
    evidenceDescription:
      "Crash stack trace showing memory threshold exceeded during bulk Clone() operation in single thread.",
    suggestedImprovement:
      "Batch object generation in chunks of 50 parts per `task.wait()` yield, displaying a progressive loading status to prevent main thread blocking.",
    resolutionStatus: "Confirmed by Dev",
    category: "Logic",
    affectedPlatform: ["Mobile"],
    dateReported: "QA Log #CAU-53",
  },
  {
    id: "BUG-CSM-007",
    bugTitle: "Inventory Menu Toggle Mid-Reel Freezes Character Controls",
    game: "Catch a Sea Monster",
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
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Gameplay Testing",
    description:
      "Core game-feel, mechanical stress analysis, and multiplayer edge-case validation.",
    skills: [
      {
        name: "Hitbox & Hit Detection",
        description:
          "Verifying raycast sub-stepping, spatial bounds, lag compensation, and latency desynchronization in real combat scenarios.",
        level: "Core",
      },
      {
        name: "Multiplayer Functionality",
        description:
          "Stress testing high player concurrency, race conditions, atomic item claims, and server-client state divergence.",
        level: "Advanced",
      },
      {
        name: "Gameplay Mechanics",
        description:
          "Evaluating rule adherence, game balance pacing, mini-game precision, input buffering, and player friction points.",
        level: "Core",
      },
      {
        name: "Physics & Movement",
        description:
          "Detecting tunneling at high velocities, collision seam breaches, vehicle constraint stability, and ragdoll recovery.",
        level: "Advanced",
      },
      {
        name: "Progression Systems",
        description:
          "Auditing economy progression curves, XP multipliers, upgrade math tables, and quest completion triggers.",
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
        name: "Bug Identification",
        description:
          "Spotting subtle mechanical glitches, memory leaks, security oversights, and unhandled edge conditions before public release.",
        level: "Advanced",
      },
      {
        name: "Reproduction Steps",
        description:
          "Formulating concise, deterministic, 100% reproducible step-by-step reports with isolated test parameters.",
        level: "Core",
      },
      {
        name: "Regression Testing",
        description:
          "Systematically re-verifying resolved issues across weekly live-ops patches to prevent bug reoccurrence.",
        level: "Core",
      },
      {
        name: "UI/UX Testing",
        description:
          "Evaluating mobile safe-area insets, aspect ratio scaling, touch button accessibility, and visual hierarchy under pressure.",
        level: "Proficient",
      },
      {
        name: "Gameplay Feedback",
        description:
          "Delivering actionable, constructive design feedback focused on player retention, onboarding clarity, and session pacing.",
        level: "Core",
      },
    ],
  },
  {
    title: "Development",
    description:
      "Technical proficiency in Roblox game architecture, scripting, and engine tooling.",
    skills: [
      {
        name: "Luau Scripting",
        description:
          "Writing type-checked, performant Luau code with modern syntax, modular structures, and clean API boundaries.",
        level: "Proficient",
      },
      {
        name: "Roblox Studio",
        description:
          "In-depth command of Studio tools, Explorer hierarchy, Physics analyzer, MicroProfiler, and Developer Console.",
        level: "Core",
      },
      {
        name: "Gameplay Systems",
        description:
          "Architecting server-authoritative state machines, round lifecycles, weapon handlers, and clean remote communication.",
        level: "Proficient",
      },
    ],
  },
];

export const PORTFOLIO_STATS: PortfolioStatistic[] = [
  {
    label: "Documented QA Games",
    value: "15",
    subtext: "Deduplicated test records across paid, voluntary & unconfirmed logs",
    verifiedStatus: "Documented",
  },
  {
    label: "Confirmed Paid Tests",
    value: "9",
    subtext: "Individually documented paid studio QA contracts",
    verifiedStatus: "Verified",
  },
  {
    label: "QA Central Voluntary",
    value: "4",
    subtext: "Structured test submissions in QA Central résumé archive",
    verifiedStatus: "Audited",
  },
  {
    label: "Scripting Projects",
    value: "2–3",
    subtext: "Core gameplay systems & architecture contributions",
    verifiedStatus: "Documented",
  },
];

export const CONTACT_INFO = {
  discord: "beswinjee",
  email: "beswinjoe@example.com",
  github: "https://github.com/beswinjee",
  robloxProfile: "https://www.roblox.com/users/beswinjee",
  qaCentralProfile: "https://qacentral.example.com/testers/beswinjee",
};
