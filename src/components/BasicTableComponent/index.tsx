import React from 'react';
import { DimensionOrMeasure } from "@embeddable.com/core";

const msg = message => <div>{message}</div>

type Props = {
  columns: DimensionOrMeasure[];
  results: DataResponse;
};

export default (props: Props) => {
  const { results, columns } = props;
  const { isLoading, data, error } = results;

  if(isLoading) {
    return msg('Loading...');
  }
  if(error) {
    return msg('Unexpected error: '+error);
  }
  if(!data) {
    return msg('!!!'); // fixes BUG: isLoading returns false before data is ready
  }

  const trs = data.map((row, i) => {
    const tds = columns.map((col, j) => {
      const value = row[col.name];
      return <td key={j}>{value}</td>
    })
    return <tr key={i}>{tds}</tr>
  })

  const headers = columns.map((col, i) => <th key={i}>{col.title}</th>)

  return (
      <table style={{ width: '100%', border: 'solid 1px black'}}>
        <thead><tr>{headers}</tr></thead>
        <tbody>{trs}</tbody>
      </table>
    )
}