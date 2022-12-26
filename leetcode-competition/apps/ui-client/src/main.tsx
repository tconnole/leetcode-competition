import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './app/app';
import { Overview } from './app/Overview/Overview';
import Problems from './app/Problems/Problems';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={''} element={<Navigate to={'overview'}/>} />
          <Route path={'*'} element={<Navigate to={'overview'}/>} />
          <Route path={'overview'} element={<Overview />} />
          <Route path={'problems'} element={<Problems/>}>
            <Route path={':problemID'}/>
          </Route>
          <Route path={'submit'} element={<div>submit</div>} />
          <Route path={'about'} element={<div>about</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
