import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Dimension, Measure, Dataset } from "@embeddable.com/core";
import { DataResponse } from "@embeddable.com/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = (title) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: title,
    },
  },
});

const chartData = (data, xAxis, yAxis) => {
  const labels = data.map(d => d[xAxis.name]);
  return {
    labels,
    datasets: [
      {
        label: yAxis.title,
        data: data.map(d => d[yAxis.name]),
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      },
    ],
  };
}

const msg = message => <div>{message}</div>

const validate = props => {
  const { results, ds, xAxis, yAxis, title } = props;
  const { isLoading, data, error } = results;
  if(!ds) {
    return msg('Choose your dataset')
  }
  if(!xAxis) {
    return msg('Choose your x-axis')
  }
  if(!yAxis) {
    return msg('Choose your y-axis');
  }
  if(isLoading) {
    return msg('Loading...');
  }
  if(error) {
    return msg('Unexpected error: '+error);
  }
}

type Props = {
  title: string;
  ds: Dataset;
  xAxis: Dimension;
  yAxis: Measure;
  results: DataResponse;
};

export default (props: Props) => {
  const { results, xAxis, yAxis, title } = props;
  const { data } = results;

  console.log(props);//TODO: cleanup
  if(!data) {
    return msg('!!!'); // fixes BUG: isLoading returns false before data is ready
  }

  const error = validate(props);
  if(error) 
    return error;

  return <Bar options={chartOptions(title)} 
              data={chartData(data, xAxis, yAxis)} />;
};
