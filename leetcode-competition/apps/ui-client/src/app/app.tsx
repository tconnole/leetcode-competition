// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import styles from './app.module.scss';
import HeaderButton from './HeaderButton/HeaderButton';
import HeaderWave from './HeaderWave/HeaderWave';

export type Route = 'overview' | 'about' | 'submit' | 'problems'

export function App() {
  const location = useLocation();

  const pink = '#ff7bac';
  const tan = '#ffe3bf';
  const black = 'black';
  const blue = '#5fcfff';

  const tab = (): Route => {
    if (location.pathname.includes('problems')) {
      return 'problems';
    }
    if (location.pathname.includes('submit')) {
      return 'submit';
    }
    if (location.pathname.includes('about')) {
      return 'about';
    }
    if (location.pathname.includes('overview')) {
      return 'overview';
    }
    return 'overview';
  }

  const top = (): string => {
    switch(tab()) {
      case 'overview':
        return '0';
      case 'problems':
        return '-100%';
      case 'submit':
        return '-200%';
      case 'about':
        return '-300%';
      default:
        return '0'
    }
  }

  const headerColor = (): string => {
    switch(tab()) {
      case 'overview':
        return 'white';
      case 'problems':
        return black;
      case 'submit':
        return 'white';
      case 'about':
        return black;
      default:
        return 'white'
    }
  }

  const yearColor = (): string => {
    switch(tab()) {
      case 'overview':
        return black;
      case 'problems':
        return blue;
      case 'submit':
        return pink;
      case 'about':
        return tan;
      default:
        return '0'
    }
  }

  const shadowColor = (): string => {
    switch(tab()) {
      case 'overview':
        return tan;
      case 'problems':
        return black;
      case 'submit':
        return blue;
      case 'about':
        return pink;
      default:
        return ''
    }
  }

  const dark = (tab() === 'submit');

  return (
    <div className={styles['app']} style={{backgroundColor: pink}}>
      <div className={styles['background']} style={{top: top()}}>
        <div className={styles['tab']} style={{backgroundColor: tan}}>
          <div className={styles['header']} style={{backgroundColor: pink}}>
            <div className={styles['wave']}>
              <HeaderWave primaryColor={tan} secondaryColor={pink} />
            </div>
          </div>
        </div>
        <div className={styles['tab']} style={{backgroundColor: black}}>
          <div className={styles['header']} style={{backgroundColor: tan}}>
            <div className={styles['wave']}>
              <HeaderWave primaryColor={black} secondaryColor={tan} />
            </div>
          </div>
        </div>
        <div className={styles['tab']} style={{backgroundColor: blue}}>
          <div className={styles['header']} style={{backgroundColor: black}}>
            <div className={styles['wave']}>
              <HeaderWave primaryColor={blue} secondaryColor={black} />
            </div>
          </div>
        </div>
        <div className={styles['tab']} style={{backgroundColor: pink}}>
          <div className={styles['header']} style={{backgroundColor: blue}}>
            <div className={styles['wave']}>
              <HeaderWave primaryColor={pink} secondaryColor={blue} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <div>
            <div style={{fontFamily: 'Bauh', fontSize: '29px', color: headerColor(), transition: 'color 1s ease-out'}}>Leetcode Competition</div>
            <div style={{fontFamily: 'Bauh', fontSize: '25px', color: yearColor(), transition: 'color 1s ease-out'}}>2023</div>
          </div>
          <div className={styles['app-list-full']}>
            <HeaderButton 
              selected={tab() === 'overview'}
              label={'OVERVIEW'}
              link={'overview'}
              dark={dark}
              />
            <HeaderButton selected={tab() === 'problems'} label={'PROBLEMS'} link={'problems'} dark={dark}/>
            <HeaderButton selected={tab() === 'submit'} label={'SUBMIT'} link={'submit'} dark={dark}/>
            <HeaderButton selected={tab() === 'about'} label={'ABOUT'} link={'about'} dark={dark}/>
          </div>
          <div className={styles['app-list-small']}>
          <HeaderButton 
              selected={tab() === 'overview'}
              label={'OVERVIEW'}
              link={'overview'}
              dark={dark}
              small={true}
              />
            <HeaderButton selected={tab() === 'problems'} label={'PROBLEMS'} link={'problems'} dark={dark} small={true}/>
            <HeaderButton selected={tab() === 'submit'} label={'SUBMIT'} link={'submit'} dark={dark} small={true}/>
            <HeaderButton selected={tab() === 'about'} label={'ABOUT'} link={'about'} dark={dark} small={true}/>
          </div>
        </div>
        <div className={styles['body']}>
          <Outlet />
        </div>
        {/* <div className={styles['top-shadow']} style={{background: `linear-gradient(${shadowColor()}, #00000000)`}}></div> */}
      </div>
    </div>
  );
}

export default App;
