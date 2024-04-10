import { EmbeddedComponentMeta, Inputs, defineComponent } from '@embeddable.com/react';
import { loadData, isMeasure, isDimension, Dimension, Measure } from '@embeddable.com/core';

import Component, { Props } from './index';

export const meta = {
  name: 'BasicDownloadButton',
  label: 'Download Button',
  defaultWidth: 100,
  defaultHeight: 40,
  inputs: [
    {
      name: 'ds',
      type: 'dataset',
      label: 'Dataset to download from'
    },
    {
      name: 'columns',
      type: 'dimensionOrMeasure',
      array: true,
      label: 'Columns to include in download',
      config: {
        dataset: 'ds'
      }
    },
    {
      name: 'buttonLabel',
      type: 'string',
      label: 'Button label',
      description: 'The text to show on the button',
      defaultValue: 'Download'
    },
    {
      name: 'maxRows',
      type: 'number',
      label: 'Maximum number of rows to download',
      defaultValue: 100
    }
  ]
} as const satisfies EmbeddedComponentMeta;

export default defineComponent<Props, typeof meta, { page: number }>(Component, meta, {
  props: (inputs: Inputs<typeof meta>) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.ds,
        dimensions: inputs.columns.filter((c) => isDimension(c)).map((c) => c as Dimension),
        measures: inputs.columns.filter((c) => isMeasure(c)).map((c) => c as Measure),
        limit: inputs.maxRows || undefined
      })
    };
  }
});
