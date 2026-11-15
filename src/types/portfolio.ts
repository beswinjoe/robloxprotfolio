export type Severity = "Critical" | "High" | "Medium" | "Low";

export type ResolutionStatus =
  | "Resolved"
  | "Confirmed by Dev"
  | "Pending Review"
  | "Mitigated";

export type TestingCategory =
  | "Paid Testing"
  | "QA Central Voluntary"
  | "Unverified / Pending Audit";

export interface BugReport {
  id: string;
  bugTitle: string;
  game: string;
  severity: Severity;
  stepsToReproduce: string[];
  expectedBehaviour: string;
  actualBehaviour: string;
  evidenceType: "screenshot" | "video" | "log";
  evidenceDescription: string;
  suggestedImprovement: string;
  resolutionStatus: ResolutionStatus;
  category: "Physics" | "Replication" | "UI/UX" | "Economy" | "Logic" | "Mobile";
  affectedPlatform?: string[];
  dateReported?: string;
  image?: string;
}

export interface QARecord {
  id: string;
  gameName: string;
  developer?: string;
  developerUrl?: string;
  verifiedDeveloper?: boolean;
  maturity?: string;
  likes?: number;
  dislikes?: number;
  category: TestingCategory;
  testingDate?: string;
  testingSummary: string;
  bugsDiscoveredCount: number;
  keyBugsHighlight: string[];
  gameplayFeedback: string;
  focusAreas: string[];
  evidenceAvailable: boolean;
  evidenceNotes?: string;
  genre: string;
  verified: boolean;
  image: string;
  visits?: string;
}

export interface ScriptingProject {
  id: string;
  title: string;
  subtitle: string;
  contribution: string;
  systemsScripted: string[];
  technologies: string[];
  developmentDetails: string;
  projectStatus: string;
  isPlaceholderNotice: boolean;
  image?: string;
  codeSnippetPreview?: {
    filename: string;
    code: string;
    explanation: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    level: "Core" | "Advanced" | "Proficient";
  }[];
}

export interface PortfolioStatistic {
  label: string;
  value: string;
  subtext: string;
  verifiedStatus: "Verified" | "Audited" | "Documented";
}
