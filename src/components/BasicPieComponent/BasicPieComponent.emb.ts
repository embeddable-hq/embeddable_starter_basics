import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import { Dataset, Dimension, Measure, loadData } from '@embeddable.com/core';

import Component from './index';

export const meta : EmbeddedComponentMeta = {
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
    {
      name: 'showLegend',
      type: 'boolean',
      label: 'Turn on the legend',
    },
  ],
};

type Inputs = {
  ds: Dataset;
  slice: Dimension;
  metric: Measure;
  showLegend: boolean;
}

export default defineComponent<Inputs>(Component, meta, {
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