import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import { Dataset, Dimension, Measure, loadData } from '@embeddable.com/core';

import Component from './index';

export const meta : EmbeddedComponentMeta = {
  name: 'KPIWithDrilldown',
  label: 'KPI with drilldown',
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
      category: 'Configure chart',
    },
    {
      name: "metric",
      type: "measure",
      label: "Metric",
      config: {
        dataset: "ds",
      },
      category: 'Configure chart',
    },
    {
      name: "columns",
      type: "dimension",
      array: true,
      label: "Underlying columns",
      config: {
        dataset: "ds",
      },
      category: 'Configure chart',
    }
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
      kpi: loadData({
        from: inputs.ds,
        measures: [inputs.metric],
      }),
      underlying: loadData({
        from: inputs.ds,
        dimensions: inputs.columns,
        measures: [inputs.metric],
      })
    };
  }
});