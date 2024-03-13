import React from 'react';
import { DataResponse, DimensionOrMeasure } from '@embeddable.com/core';
import Loading from '../util/Loading';
import Error from '../util/Error';
import '../index.css';
import { useEmbeddableState } from '@embeddable.com/react';

export type Props = {
  columns: DimensionOrMeasure[];
  results: DataResponse;
  rowsPerPage: number;
};

export default (props: Props) => {
  console.log('BasicTableComponet.props', props);
  const { results, columns, rowsPerPage } = props;
  const { isLoading, data, error } = results;
  const [embeddableState, setEmbeddableState] = useEmbeddableState<{
    page: number;
  }>({ page: 1 }) as unknown as [
    { page: number },
    React.Dispatch<React.SetStateAction<{ page: number }>>
  ];

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error msg={error} />;
  }

  //build header row
  const headers = columns.map((col, i) => <th key={i}>{col.title}</th>);

  //build data rows
  const trs = data?.map((row, i) => {
    const tds = columns.map((col, j) => {
      const value = row[col.name];
      return <td key={j}>{value}</td>;
    });
    return <tr key={i}>{tds}</tr>;
  });

  const isDisabled = !data?.length || data.length < rowsPerPage;

  return (
    <div>
      <table className="basic-table-component">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
      <br />
      <div>
        <button
          disabled={embeddableState.page == 1}
          onClick={() => setEmbeddableState({ page: embeddableState.page - 1 })}
        >
          previous
        </button>
        <span>Page {embeddableState.page}</span>
        <button
          disabled={isDisabled}
          onClick={() => setEmbeddableState({ page: embeddableState.page + 1 })}
        >
          next
        </button>
      </div>
    </div>
  );
};
