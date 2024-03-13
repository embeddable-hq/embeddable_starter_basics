import { EmbeddedComponentMeta, Inputs, defineComponent } from '@embeddable.com/react';
import { loadData, isMeasure, isDimension, Dimension, Measure } from '@embeddable.com/core';

import Component, { Props } from './index';

export const meta = {
  name: 'BasicTableComponent',
  label: 'Basic Table',
  classNames: ['overflow-scroll', 'add-border'],
  inputs: [
    {
      name: 'ds',
      type: 'dataset',
      label: 'Dataset to display'
    },
    {
      name: 'columns',
      type: 'dimensionOrMeasure',
      array: true,
      label: 'Columns',
      config: {
        dataset: 'ds'
      }
    },
    {
      name: 'rowsPerPage',
      type: 'number',
      label: 'Rows per page'
    }
  ]
} as const satisfies EmbeddedComponentMeta;

export default defineComponent<Props, typeof meta, { page: number }>(Component, meta, {
  props: (inputs: Inputs<typeof meta>, [state]) => {
    const page = state?.page || 1;
    return {
      ...inputs,
      results: loadData({
        from: inputs.ds,
        dimensions: inputs.columns.filter((c) => isDimension(c)).map((c) => c as Dimension),
        measures: inputs.columns.filter((c) => isMeasure(c)).map((c) => c as Measure),
        limit: inputs.rowsPerPage,
        offset: (page - 1) * inputs.rowsPerPage
      })
    };
  }
});
