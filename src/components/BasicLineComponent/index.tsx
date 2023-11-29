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
import { Dimension, Measure } from "@embeddable.com/core";
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
    legend: {
      display: false
    },
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
        data: data.map(d => d[yAxis.name]),
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      },
    ],
  };
}

type Props = {
  title: string;
  xAxis: Dimension;
  yAxis: Measure;
  results: DataResponse;
};

export default (props: Props) => {
  // console.log(props);
  const { results, xAxis, yAxis, title } = props;
  const { isLoading, data, error } = results;
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error}</div>
  }
  if(!data) {
    return; // fixes BUG: isLoading returns false before data is ready
  }

  return <Bar options={chartOptions(title)} 
              data={chartData(data, xAxis, yAxis)} />;
};
