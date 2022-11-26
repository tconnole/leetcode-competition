// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import CompletionChart, { GridItem, status } from './CompletionChart/CompletionChart';

export function App() {


const createMockItems = () => {
  const languages = ['Python, Rust', 'TypeScript', 'Java'];
  const statuses: status[] = ['completed', 'failed', 'not attempted', 'completed', 'completed', 'completed'];
  const items: GridItem[] = [];
  for(let i = 1; i <= 365; i++) {
    const item: GridItem = {
      day: i,
      leetcodeHREF: 'https://leetcode.com/problems/two-sum',
      language: languages[Math.floor(Math.random() * 4)],
      status: statuses[Math.floor(Math.random() * 6)]
    };
    items.push(item);
  }
  return items;
}

const thomasCompletion = createMockItems();
const caelanCOmpletion = createMockItems()

  return (
    <div className={styles['app']}>
      <CompletionChart name={'Thomas'} gridItems={thomasCompletion}/>
      <CompletionChart name={'Caelan'} gridItems={caelanCOmpletion}/>
    </div>
  );
}

export default App;
