import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import { Dataset, Dimension, Granularity, Measure, TimeDimension, loadData } from '@embeddable.com/core';
import CurrencyType from '../../types/Currency.type.emb.js';

import Component from './index';


export const meta : EmbeddedComponentMeta = {
  name: 'BasicLineComponent',
  label: 'Basic Line',
  classNames: ['add-border'],
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title for the chart',
      category: 'Configure chart',
    },
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
      category: 'Configure chart',
    },
    {
      name: 'xAxis',
      type: 'dimension',
      label: 'X-Axis',
      config: {
        dataset: 'ds',
        supportedTypes: ['time']
      },
      category: 'Configure chart',
    },
    {
      name: 'granularity',
      type: 'granularity',
      label: 'Granularity',
      category: 'Configure chart',
    },
    {
      name: "metrics",
      type: "measure",
      array: true,
      label: "Metrics",
      config: {
        dataset: "ds",
      },
      category: 'Configure chart',
    },
    {
      name: 'showLegend',
      type: 'boolean',
      label: 'Turn on the legend',
      category: 'Chart settings',
    },
    {
      name: "currency",
      type: CurrencyType,
      label: "Currency",
      category: 'Chart settings',
    }
  ],
};

type Inputs = {
  title: string;
  ds: Dataset;
  xAxis: Dimension;
  granularity: Granularity;
  metrics: Measure[];
  showLegend: boolean;
}

const timeDimension = (dimension, granularity) => {
  return ({
    dimension: dimension.name,
    granularity: granularity,
  });
}

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.ds,
        timeDimensions: [
          timeDimension(inputs.xAxis, inputs.granularity)
        ],
        measures: inputs.metrics,
      })
    };
  }
});