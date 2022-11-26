import styles from './CompletionChart.module.scss';

/* eslint-disable-next-line */
export interface CompletionChartProps {
  name: string;
  gridItems: GridItem[];
}

export interface GridItem {
  day: number;
  leetcodeHREF?: string;
  language?: string;
  runtime?: number;
  memory?: number;
  status: status
}
export type status = 'completed' | 'failed' | 'not attempted';

export function CompletionChart(props: CompletionChartProps) {


  const generateColor = (status: status, day: number) => {
    // TODO add logic to calculate day
    if (day > 256) {
      console.log( new Date().getDay());
      return '';
      
    }
    switch(status) {
      case 'completed':
        return '#0b9e32';
      case 'failed':
        return '';
      case 'not attempted':
       return '#cc123e';
    }
  }

  return (
    <div className={styles['container']}>
      <div style={{width: '100%', padding: '0.25rem', textAlign: 'center'}}>{props.name}</div>
      {
        props.gridItems.map(item => 
          <div className={styles['grid-item']} style={{backgroundColor: generateColor(item.status, item.day)}}>
            <div className={styles['info-card']}></div>
          </div>
          )
      }
      
    </div>
  );
}

export default CompletionChart;
