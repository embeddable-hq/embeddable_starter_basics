import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Dimension, Measure, Dataset } from "@embeddable.com/core";
import { DataResponse } from "@embeddable.com/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const COLORS = [
  '#A9DBB0',
  '#F59E54',
  '#F77A5F',
  '#8FCBCF',
  '#C3B0EA',
  ];

const chartOptions = (title, showLegend) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: showLegend
    },
    title: {
      display: true,
      text: title,
    },
  },
});

const chartData = (data, xAxis, metrics) => {
  const labels = data.map(d => d[xAxis.name]);
  return {
    labels,
    datasets: metrics.map((yAxis, i) =>
      ({
        label: yAxis.title,
        data: data.map(d => d[yAxis.name]),
        backgroundColor: COLORS[i % COLORS.length],
        borderColor: COLORS[i % COLORS.length],
      })
    ) 
  };
}

const msg = message => <div>{message}</div>

type Props = {
  title: string;
  showLegend: boolean;
  ds: Dataset;
  xAxis: Dimension;
  metrics: Measure;
  results: DataResponse;
};

export default (props: Props) => {
  console.log(props);//TODO: cleanup
  
  const { results, xAxis, metrics, title, showLegend } = props;
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

  return <Line options={chartOptions(title, showLegend)} 
              data={chartData(data, xAxis, metrics)} />
};
