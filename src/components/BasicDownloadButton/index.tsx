import React from 'react';
import { DataResponse, DimensionOrMeasure } from '@embeddable.com/core';
import Loading from '../util/Loading';
import Error from '../util/Error';

export type Props = {
  columns: DimensionOrMeasure[];
  results: DataResponse;
  maxRows: number;
  buttonLabel: string;
};

export default (props: Props) => {
  const { results, columns, buttonLabel } = props;
  const { isLoading, data, error } = results;

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error msg={error} />;
  }

  function arrayToCsv(data){
    return data.map(row =>
      row
        .map(String)  // convert every value to String
        .map(v => v.replaceAll('"', '""'))  // escape double quotes
        .map(v => `"${v}"`)  // quote it
        .join(',')  // comma-separated
    ).join('\r\n');  // rows starting on new lines
  }

  function downloadBlob(content, filename, contentType) {
    // Create a blob
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);

    // Create a link to download it
    const pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
  }

  function formatValue(v) {
    if(v === null || v === undefined) {
      return '';
    }
    return v;
  }

  function handleClick() {
    const rows = [];
    rows.push(columns.map(c => c.title));
    data.map(row => {
      rows.push(columns.map(c => formatValue(row[c.name])));
    })
    const csv = arrayToCsv(rows);
    downloadBlob(csv, 'export.csv', 'text/csv;charset=utf-8;')
  }

  return (
    <div>
      <button onClick={handleClick} type="button">{buttonLabel}</button>
    </div>
  );
};
