import React from 'react';
import ReactDOM from 'react-dom/client';

import BasicTextComponent from './components/BasicTextComponent/index';
import BasicLineComponent from './components/BasicLineComponent/index';
import BasicToggleComponent from './components/BasicToggleComponent/index';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/**/}
    <BasicTextComponent 
      title='Build Remarkable Analytics Experiences'
      body='The toolkit for building fast, interactive, fully-custom analytics experiences into your app'
    />
    {/**/}
    <BasicToggleComponent
      defaultValue={true}
      label='Toggle me'
      onChange={console.log}
    />
    {/**/}
    <div style={{width: '100%', height: '300px'}}>
      <BasicLineComponent
        title='My first line chart'
        showLegend={true}
        ds={true}
        xAxis={{ name: 'country'}}
        metrics={[
          { name: 'count', title: '# of customers'},
          { name: 'avg', title: 'Average'},
          ]}
        results={{
          isLoading: false,
          error: null,
          data: [
            { country: 'US', count: 23, avg: 15 },
            { country: 'UK', count: 10, avg: 11 },
            { country: 'Germany', count: 5, avg: 7 }
          ]
        }}
      />
    </div>
    {/**/}
  </React.StrictMode>
);