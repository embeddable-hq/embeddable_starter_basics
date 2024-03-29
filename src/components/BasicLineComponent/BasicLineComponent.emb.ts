import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import { loadData } from '@embeddable.com/core';

import Component, { Props } from './index';
import { Inputs } from '@embeddable.com/react';

export const meta = {
  name: 'BasicLineComponent',
  label: 'Basic Line',
  classNames: ['add-border'],
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title for the chart',
      category: 'Configure chart'
    },
    {
      name: 'ds',
      type: 'dataset',
      label: 'Dataset to display',
      category: 'Configure chart'
    },
    {
      name: 'xAxis',
      type: 'dimension',
      label: 'X-Axis',
      config: {
        dataset: 'ds',
        supportedTypes: ['time']
      },
      category: 'Configure chart'
    },
    {
      name: 'granularity',
      type: 'granularity',
      label: 'Granularity',
      category: 'Configure chart'
    },
    {
      name: 'metrics',
      type: 'measure',
      array: true,
      label: 'Metrics',
      config: {
        dataset: 'ds'
      },
      category: 'Configure chart'
    },
    {
      name: 'showLegend',
      type: 'boolean',
      label: 'Turn on the legend',
      category: 'Chart settings'
    }
  ]
} as const satisfies EmbeddedComponentMeta;

const timeDimension = (dimension, granularity) => {
  return {
    dimension: dimension.name,
    granularity: granularity
  };
};

export default defineComponent(Component, meta, {
  props: (inputs: Inputs<typeof meta>) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.ds,
        timeDimensions: [timeDimension(inputs.xAxis, inputs.granularity)],
        measures: inputs.metrics
      })
    };
  }
});