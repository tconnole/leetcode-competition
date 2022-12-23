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

export type status = 'completed' | 'failed' | 'not attempted';