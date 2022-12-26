import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createMockProblems } from '../app.mock';
import { Problem, UserProblemAverageResults } from '../app.model';
import styles from './Problems.module.scss';

/* eslint-disable-next-line */
export interface ProblemsProps {}

export function Problems(props: ProblemsProps) {
  const { problemID } = useParams();
  const [problems, setProblems] = useState<Problem[]>([]);
  const pink = '#ff7bac';
  const tan = '#ffe3bf';
  const black = 'black';
  const blue = '#5fcfff';

  const colors = [pink, blue, tan];

  useEffect(() => {
    setProblems(createMockProblems())
  }, [])

  const percent = (user: UserProblemAverageResults) => {
    return `${100 - (((user.memoryPercentile + user.runtimePercentile) / 2) * 100)}%`;
  }

  return (
    <div className={styles['container']}>
      { problemID ? <h1><Link to={''}>Problems</Link> {` > ${problemID}`} </h1> : <h1>Problems</h1> }
      
      {
        problemID ? <></> :
        problems.map((problem) => 
          <Link to={`${problem.day}`} className={styles['problem-container']}>
            <div className={styles['icon']} style={{textDecoration: 'none'}}>{problem.day}</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <div className={styles['header']}>
                  <h2>{problem.title}</h2>
                  <div>{problem.language}</div>
                  <div>{problem.difficulty}</div>
              </div>
              <div className={styles['users-container']}>
                {problem.results.map((userResults) => 
                <div className={styles['user']} style={{backgroundColor: colors[problem.results.findIndex((result) => result === userResults)]}}>
                  <div className={styles['shadow']} style={{width: percent(userResults)}} />
                  <div className={styles['image']}></div>
                  <div className={styles['results']}>
                    <div>{userResults.runtime}ms</div>
                    <div>Runtime</div>
                  </div>
                  <div className={styles['results']}>
                    <div>{userResults.memory}mb</div>
                    <div>Memory</div>
                  </div>
                </div>)}
              </div>
            </div>
          </Link>
        )
      }
    </div>
  );
}

export default Problems;
