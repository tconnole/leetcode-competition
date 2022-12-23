import {status, GridItem} from './app.model';

export const createMockItems = () => {
    const languages = ['Python, Rust', 'TypeScript', 'Java'];
    const statuses: status[] = ['completed', 'failed', 'not attempted', 'completed', 'completed', 'completed'];
    const items: GridItem[] = [];
    for(let i = 1; i <= 365; i++) {
      const item: GridItem = {
        day: i,
        leetcodeHREF: 'https://leetcode.com/problems/two-sum',
        language: languages[Math.floor(Math.random() * 4)],
        status: statuses[Math.floor(Math.random() * 6)],
        memoryPercentile: Math.random(),
        runtimePercentile: Math.random()
      };
      items.push(item);
    }
    return items;
  }