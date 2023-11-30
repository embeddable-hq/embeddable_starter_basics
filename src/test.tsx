import React from 'react';
import ReactDOM from 'react-dom/client';

import BasicTextComponent from './components/BasicTextComponent/index';
import BasicLineComponent from './components/BasicLineComponent/index';
import BasicToggleComponent from './components/BasicToggleComponent/index';
import BasicTableComponent from './components/BasicTableComponent/index';


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
    <div style={{ width: '500px', height: '300px'}}>
      <BasicTableComponent
        columns={[
          { name: 'name', title: 'Name'},
          { name: 'age', title: 'Age'},
          { name: 'gender', title: 'Gender'},
          ]}
        results={{
          isLoading: false,
          error: null,
          data: [
            { name: 'Bob', age: 36, gender: 'male' },
            { name: 'Sam', age: 24, gender: 'female' },
            { name: 'Charlie', age: 73, gender: 'male' },
          ]
        }}
      />
    </div>
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