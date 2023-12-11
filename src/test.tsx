import React from 'react';
import ReactDOM from 'react-dom/client';

import BasicTextComponent from './components/BasicTextComponent';
import BasicLineComponent from './components/BasicLineComponent';
import BasicPieComponent from './components/BasicPieComponent';
import BasicToggleComponent from './components/BasicToggleComponent';
import BasicTableComponent from './components/BasicTableComponent';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='local-dev'>
      {/**/}
      <div className='embeddable-component'>
        <BasicTextComponent 
          title='Build Remarkable Analytics Experiences'
          body='The toolkit for building fast, interactive, fully-custom analytics experiences into your app'
        />
      </div>
      {/**/}
      <div className='embeddable-component'>
        <BasicToggleComponent
          defaultValue={true}
          label='Toggle me'
          onChange={console.log}
        />
      </div>
      {/**/}
      <div className='embeddable-component'>
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
      <div className='embeddable-component'>
        <BasicPieComponent
          ds={true}
          slice={{ name: 'country'}}
          metric={{ name: 'count'}}
          showLegend={true}
          results={{
            isLoading: false,
            error: null,
            data: [
              { country: 'US', count: 23 },
              { country: 'UK', count: 10 },
              { country: 'Germany', count: 5 }
            ]
          }}
        />
      </div>
      {/**/}
      <div className='embeddable-component'>
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
    </div>
  </React.StrictMode>
);