export interface GridItem {
    day: number;
    leetcodeHREF?: string;
    language?: string;
    runtime?: number;
    runtimePercentile?: number;
    memory?: number;
    memoryPercentile?: number;
    status: status
  }

export type Language = 'JavaScript' | 'TypeScript' | 'Java' | 'Python' | 'Rust';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Problem {
  day: number;
  title: string;
  language: Language;
  difficulty: Difficulty;
  results: UserProblemAverageResults[];
}

export interface UserProblemAverageResults {
  user: User;
  runtime: number; // ms
  memory: number; //mb
  runtimePercentile: number; // 0-1
  memoryPercentile: number; // 0-1
}

export interface User {
  id: number;
  name: string;
  pictureHREF: string;
}


export type status = 'completed' | 'failed' | 'not attempted';