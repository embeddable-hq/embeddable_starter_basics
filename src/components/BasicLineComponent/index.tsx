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
import Loading from '../util/Loading'
import Error from '../util/Error'

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

const format = text => {
  if(!text) {
    return text;
  }
  if (text.endsWith('T00:00:00.000')) {
    return new Intl.DateTimeFormat().format(new Date(text));
  }
  return new Date(text).toLocaleString();
}

const chartData = (data, xAxis, metrics) => {
  const labels = data.map(d => format(d[xAxis.name]));
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

export type Props = {
  title: string;
  showLegend: boolean;
  ds: Dataset;
  xAxis: Dimension; // { name, title }
  metrics: Measure[]; // [{ name, title }]
  results: DataResponse; // { isLoading, error, data: [{ <name>: <value>, ... }] }
};

export default (props: Props) => {
  console.log('BasicLineComponent.props', props); 
  const { results, xAxis, metrics, title, showLegend } = props;
  const { isLoading, data, error } = results;

  if(isLoading) {
    return <Loading />
  }
  if(error) {
    return <Error msg={error}/>;
  }

  return <Line options={chartOptions(title, showLegend)} 
              data={chartData(data, xAxis, metrics)} />
};
