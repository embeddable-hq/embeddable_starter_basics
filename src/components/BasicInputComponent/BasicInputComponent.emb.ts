import { EmbeddedComponentMeta, defineComponent, Inputs } from '@embeddable.com/react';
import { Value } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicInputComponent',
  label: 'Basic Input',
  defaultWidth: 320,
  defaultHeight: 80,
  inputs: [
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      description: 'The text to show next to the textbox'
    }
  ],
  events: [
    {
      name: 'onChange',
      label: 'Change',
      properties: [
        {
          name: 'value',
          type: 'string'
        }
      ]
    }
  ]
} as const satisfies EmbeddedComponentMeta;

export default defineComponent(Component, meta, {
  props: (inputs: Inputs<typeof meta>) => {
    return {
      ...inputs
    };
  },
  events: {
    onChange: (value) => ({ value: value || Value.noFilter() })
  }
});
