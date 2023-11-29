import React from 'react';
import ReactDOM from 'react-dom/client';

import BasicTextComponent from './components/BasicTextComponent/index';
import BasicLineComponent from './components/BasicLineComponent/index';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BasicTextComponent 
      title='Build Remarkable Analytics Experiences'
      body='The toolkit for building fast, interactive, fully-custom analytics experiences into your app'
    />
    <div style={{width: '100%', height: '300px'}}>
      <BasicLineComponent/>
    </div>
  </React.StrictMode>
);