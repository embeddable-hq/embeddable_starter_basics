import { defineComponent } from '@embeddable.com/react';
import { loadData } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicLineComponent',
  label: 'Basic Line',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title for the chart'
    },
    {
      name: "data",
      type: "dataset",
      label: "Dataset to display",
    },
    {
      name: "xAxis",
      type: "dimension",
      label: "X-axis",
      config: {
        dataset: "data",
      },
    },
    {
      name: "yAxis",
      type: "measure",
      label: "Y-axis",
      config: {
        dataset: "data",
      },
    },
  ],
  events: []
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.data,
        dimensions: [inputs.xAxis],
        measures: [inputs.yAxis],
      })
    };
  }
});