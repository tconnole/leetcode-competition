import styles from './HeaderWave.module.scss';

/* eslint-disable-next-line */
export interface HeaderWaveProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export function HeaderWave(props: HeaderWaveProps) {
  return (
    <div style={{height: '50px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922 101.1">
      {/* <defs><style>.cls-1{fill:gray;}.cls-2{fill:#fff;}</style></defs> */}
      <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
        <path style={{fill: props.secondaryColor ?? 'grey'}} d="M1921.5,71V0H.5V49l-.5.1c23.22,25.2,63.86,19.36,94.8,5.41s61.25-34.47,95-32.93c44.53,2,83.43,42.54,127.52,35.74,39.18-6,67.65-48.15,107.26-49.23,53-1.44,88.77,70.69,141.57,65.71,48.91-4.61,81.27-74.47,129.09-62.95,20.84,5,37.63,25.5,59,23.92,11.08-.83,20.75-7.6,30.84-12.36,44.73-21.12,97.44-2.63,140.77,21.34s86.2,54.18,135.35,57.13c34.35,2.06,69.31-10.3,95.14-33.64,15.37-13.9,27.86-31.65,45.9-41.63,39.42-21.8,87.22.94,126.64,22.74s88.67,42.77,126.57,18.29c21.82-14.1,34.81-41.06,58.81-50.73,61.53-24.79,123.1,82.26,182.17,51.81,14.61-7.53,24.32-22.17,37-32.81,22.53-19,55.29-24.15,82.33-13,37.1,15.26,67.34,58.62,106.29,49.41"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="137.5" cy="57" r="6.5"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="472.5" cy="57" r="6.5"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="501.5" cy="85" r="10.5"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="851.5" cy="86" r="9.5"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="1501" cy="53.5" r="3"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="1751.5" cy="54" r="6.5"/>
        <circle style={{fill: props.secondaryColor ?? 'grey'}} cx="1771.34" cy="75.82" r="3"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="67.5" cy="20" r="12.5"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="267" cy="22.5" r="3"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="589.5" cy="26" r="6.5"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="1091" cy="13.5" r="6"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="1358" cy="29.5" r="8"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="1380.5" cy="43" r="4.5"/>
        <circle style={{fill: props.primaryColor ?? 'white'}} cx="1872" cy="25.5" r="6"/>
        </g></g>
      </svg>
    </div>
  );
}

export default HeaderWave;
