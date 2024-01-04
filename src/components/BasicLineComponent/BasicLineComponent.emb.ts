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
      description: 'The title for the chart'
    },
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
    },
    {
      name: 'xAxis',
      type: 'dimension',
      label: 'X-Axis',
      config: {
        dataset: 'ds',
        supportedTypes: ['time']
      }
    },
    {
      name: 'granularity',
      type: 'granularity',
      label: 'Granularity'
    },
    {
      name: "metrics",
      type: "measure",
      array: true,
      label: "Metrics",
      config: {
        dataset: "ds",
      },
    },
    {
      name: 'showLegend',
      type: 'boolean',
      label: 'Turn on the legend',
    },
    {
      name: "currency",
      type: CurrencyType,
      label: "Currency",
    }
  ],
};

const timeDimension = (dimension, granularity) => {
  return ({
    dimension: dimension.name,
    granularity: granularity
  });
}

type Inputs = {
  title: string;
  ds: Dataset;
  xAxis: Dimension;
  granularity: Granularity;
  metrics: Measure[];
  showLegend: boolean;
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