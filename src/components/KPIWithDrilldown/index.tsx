import React, { useState } from 'react';
import { Dimension, Measure, Dataset } from "@embeddable.com/core";
import { DataResponse } from "@embeddable.com/react";
import Loading from '../util/Loading'
import Error from '../util/Error'
import BasicTableComponent from '../BasicTableComponent'

type Props = {
  ds: Dataset;
  columns: Dimension[]; // { name, title }
  metric: Measure; // [{ name, title }]
  kpi: DataResponse;
  underlying: DataResponse; // { isLoading, error, data: [{ <name>: <value>, ... }] }
};

export default (props: Props) => {
  console.log('KPIWithDrilldown.props', props); 
  const { columns, metric, kpi, underlying } = props;
  const { isLoading, data, error } = kpi;
  const [open, setOpen] = useState(false)

  if(isLoading) {
    return <Loading />
  }
  if(error) {
    return <Error msg={error}/>;
  }

  console.log('KPI', kpi)
  return (
      <div>
        <h1>{props.title}</h1>
        <p>{data[0][metric.name]}</p>
        <button disabled={underlying.isLoading} onClick={() => setOpen(true)}>drill down</button>
        {open && <BasicTableComponent columns={columns} results={underlying}/>}
      </div>
    )
};
