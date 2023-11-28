import React from 'react';
import ReactDOM from 'react-dom/client';

import BasicTextComponent from './components/BasicTextComponent/BasicTextComponent';
import BasicLineComponent from './components/BasicLineComponent/index';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BasicTextComponent 
      h1='Build Remarkable Analytics Experiences'
      h2='The toolkit for building fast, interactive, fully-custom analytics experiences into your app'
    />
    <BasicLineComponent/>
  </React.StrictMode>
);