import { GridItem, status } from '../app.model';
import styles from './CompletionChart.module.scss';

/* eslint-disable-next-line */
export interface CompletionChartProps {
  name: string;
  gridItems: GridItem[];
}

export function CompletionChart(props: CompletionChartProps) {

  const currentDay = 315;
  const opacity = (day: number, status: status, runtime?: number, memory?: number) => {
    if (status === 'completed' && day < currentDay) {
      return (((runtime ?? 0) + (memory ?? 0)) / 2) + 0.2;
    }
    return 1;
  }

  const generateColor = (status: status, day: number) => {
    // TODO add logic to calculate day
    if (day > currentDay) {
      return '';
    }
    switch(status) {
      case 'completed':
        return '#ffffff';
      case 'failed':
        return '';
      case 'not attempted':
      //  return '#cc123e';
      return '#000000';
    }
  }

  return (
    <div className={styles['container']}>
      {
        props.gridItems.map(item => 
          <div className={styles['grid-item']} style={{backgroundColor: generateColor(item.status, item.day), opacity: opacity(item.day, item.status, item.runtimePercentile, item.memoryPercentile)}}>
            <div className={styles['info-card']}></div>
          </div>
          )
      }
      
    </div>
  );
}

export default CompletionChart;
