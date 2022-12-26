import styles from './ProblemListItem.module.scss';

/* eslint-disable-next-line */
export interface ProblemListItemProps {}

export function ProblemListItem(props: ProblemListItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProblemListItem!</h1>
    </div>
  );
}

export default ProblemListItem;
