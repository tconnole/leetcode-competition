import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderButton.module.scss';
import { AboutIcon, OverviewIcon, ProblemsIcon, SubmitIcon } from './headerIcons';

/* eslint-disable-next-line */
export interface HeaderButtonProps {
  label: string;
  link: string;
  selected: boolean;
  dark: boolean;
  small?: boolean
}

export function HeaderButton(props: HeaderButtonProps) {
  const [small, setSmall] = useState<boolean>(false)
  const blue = '#5fcfff';

  useEffect(() => {
    if (props.small !== undefined) {
      setSmall(props.small);
    }
  }, [props.small])

const backgroundColor = () => {
  if (props.dark) {
    return props.selected ? blue : 'white';
  }
    return props.selected ? 'black' : 'white';
}

const shadowColor = () => {
  return props.dark ? blue : 'black';
}

const color = () => {
  if (props.dark) {
    return 'black';
  }
    return props.selected ? 'white' : 'black';
}

const icon = () => {
  switch(props.link) {
    case 'overview':
      return OverviewIcon(color());
    case 'problems':
      return ProblemsIcon(color());
    case 'submit':
      return SubmitIcon(color());
    default: return AboutIcon(color());
  }
}

const iconSize = () => {
  switch(props.link) {
    case 'overview':
      return '80%';
    case 'problems':
      return '50%';
    case 'submit':
      return '60%';
    default: return '40%';
  }
}

  return small ?
      (<Link to={props.link} className={styles['small-container']} style={{backgroundColor: shadowColor(), borderColor: shadowColor()}}>
      <div className={styles[props.selected ? 'label-container-selected' : 'label-container']}
        style={{backgroundColor: backgroundColor(), borderColor: shadowColor(), color: color()}}>
          <div style={{width: iconSize(), height: iconSize(), display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {icon()}
          </div>
        </div>
      </Link>) :

      (<Link to={props.link} className={styles['container']} style={{backgroundColor: shadowColor(), borderColor: shadowColor()}}>
      <div className={styles[props.selected ? 'label-container-selected' : 'label-container']}
        style={{backgroundColor: backgroundColor(), borderColor: shadowColor(), color: color()}}>{props.label}</div>
      </Link>);
}

export default HeaderButton;
