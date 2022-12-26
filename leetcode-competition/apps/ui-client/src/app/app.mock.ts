import {status, GridItem, Problem, User, UserProblemAverageResults} from './app.model';

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


export const createMockUserResults= (): UserProblemAverageResults[] => {
  return [
    {
      user: {
        id: 0,
        name: 'Thomas Connole',
        pictureHREF: '',
      },
      runtime: 88,
      memory: 44,
      runtimePercentile: 0.9,
      memoryPercentile: 0.75
    },
    {
      user: {
        id: 1,
        name: 'Caelan Bryan',
        pictureHREF: '',
      },
      runtime: 107,
      memory: 56,
      runtimePercentile: 0.82,
      memoryPercentile: 0.71
    }
  ]
}

export const createMockProblems = (): Problem[] => {
  return [
    {
      day: 1,
      title: 'Two Sum',
      language: 'JavaScript',
      difficulty: 'Easy',
      results: createMockUserResults()
    },
    {
      day: 2,
      title: 'Revers Integer',
      language: 'Python',
      difficulty: 'Medium',
      results: createMockUserResults()
    },
    {
      day: 3,
      title: 'Rotten Oranges',
      language: 'Rust',
      difficulty: 'Hard',
      results: createMockUserResults()
    },
    {
      day: 4,
      title: 'Problem 4',
      language: 'JavaScript',
      difficulty: 'Easy',
      results: createMockUserResults()
    },
    {
      day: 5,
      title: 'Problem 5',
      language: 'Python',
      difficulty: 'Medium',
      results: createMockUserResults()
    },
    {
      day: 6,
      title: 'Problem 6',
      language: 'Rust',
      difficulty: 'Hard',
      results: createMockUserResults()
    },
    {
      day: 7,
      title: 'Problem 7',
      language: 'JavaScript',
      difficulty: 'Easy',
      results: createMockUserResults()
    },
    {
      day: 8,
      title: 'Problem 8',
      language: 'Python',
      difficulty: 'Medium',
      results: createMockUserResults()
    },
    {
      day: 9,
      title: 'Problem 9',
      language: 'Rust',
      difficulty: 'Hard',
      results: createMockUserResults()
    }
  ];
}