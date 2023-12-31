import React from 'react';
import { DimensionOrMeasure } from "@embeddable.com/core";
import Loading from '../util/Loading'
import Error from '../util/Error'
import '../index.css'
import { DataResponse } from '@embeddable.com/react';

type Props = {
  columns: DimensionOrMeasure[];
  results: DataResponse;
};

export default (props: Props) => {
  console.log('BasicTableComponet.props', props); 
  const { results, columns } = props;
  const { isLoading, data, error } = results;

  if(isLoading) {
    return <Loading />
  }
  if(error) {
    return <Error msg={error}/>;
  }

  //build header row
  const headers = columns.map((col, i) => <th key={i}>{col.title}</th>)

  //build data rows
  const trs = data.map((row, i) => {
    const tds = columns.map((col, j) => {
      const value = row[col.name];
      return <td key={j}>{value}</td>
    })
    return <tr key={i}>{tds}</tr>
  })

  return (
      <table className='basic-table-component'>
        <thead><tr>{headers}</tr></thead>
        <tbody>{trs}</tbody>
      </table>
    )
}