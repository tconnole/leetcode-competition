import { createMockItems } from '../app.mock';
import CompletionChart from '../CompletionChart/CompletionChart';
import styles from './Overview.module.scss';

/* eslint-disable-next-line */
export interface OverviewProps {}

export function Overview(props: OverviewProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['profile-container']}>
        <div className={styles['profile']}>
          <div className={styles['photo-container']}>
            <div className={styles['photo']}>
              <div className={styles['photo-image']}>

              </div>
            </div>
          </div>

          <div className={styles['stats-container']}>
            <div className={styles['stats']} style={{backgroundColor: '#ff7bac'}}>
              <div className={styles['stats-block']}>
                stats
              </div>
            </div>
          </div>

          <div className={styles['completion-chart-container']}>
            <div className={styles['completion-chart']} style={{backgroundColor: '#ff7bac'}}>
              <div className={styles['chart']}>
                chart
                {/* <CompletionChart name={'test'} gridItems={createMockItems()}/> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={styles['profile-container']}>
        <div className={styles['profile']}>
          <div className={styles['photo-container']}>
            <div className={styles['photo']}>
              <div className={styles['photo-image']}>

              </div>
            </div>
          </div>

          <div className={styles['stats-container']}>
            <div className={styles['stats']}>
              <div className={styles['stats-block']}>
                stats
              </div>
            </div>
          </div>

          <div className={styles['completion-chart-container']}>
            <div className={styles['completion-chart']}>
              <div className={styles['chart']}>
                chart
                {/* <CompletionChart name={'test'} gridItems={createMockItems()}/> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Overview;
