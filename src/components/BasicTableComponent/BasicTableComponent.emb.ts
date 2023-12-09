import { defineComponent } from '@embeddable.com/react';
import { loadData, isMeasure, isDimension } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicTableComponent',
  label: 'Basic Table',
  classNames: ['overflow-scroll', 'add-border'],
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
    },
    {
      name: "columns",
      type: "dimensionOrMeasure",
      array: true,
      label: "Columns",
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
        dimensions: inputs.columns.filter((c) => isDimension(c)),
        measures: inputs.columns.filter((c) => isMeasure(c)),
      })
    };
  }
});