import { defineComponent } from '@embeddable.com/react';
import { loadData } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicPieComponent',
  label: 'Basic Pie',
  classNames: ['add-border'],
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
    },
    {
      name: "slice",
      type: "dimension",
      label: "Slice",
      config: {
        dataset: "ds",
      },
    },
    {
      name: "metric",
      type: "measure",
      label: "Metric",
      config: {
        dataset: "ds",
      },
    },
  ],
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.ds,
        dimensions: [inputs.slice],
        measures: [inputs.metric],
      })
    };
  }
});