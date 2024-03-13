import { EmbeddedComponentMeta, defineComponent, type Inputs } from '@embeddable.com/react';
import ColorType from '../../types/Color/Color.type.emb.js';

import Component from './index';

export const meta = {
  name: 'BasicToggleComponent',
  label: 'Basic Toggle',
  defaultWidth: 320,
  defaultHeight: 80,
  inputs: [
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      description: 'The text to show next to the checkbox'
    },
    {
      name: 'defaultValue',
      type: 'boolean',
      label: 'Default value',
      description: 'The initial value'
    },
    {
      name: 'color',
      type: ColorType as never,
      label: 'Color',
      defaultValue: { r: 97, g: 153, b: 243 }
    }
  ],
  events: [
    {
      name: 'onChange',
      label: 'Change',
      properties: [
        {
          name: 'value',
          type: 'boolean'
        }
      ]
    }
  ],
  variables: [
    {
      name: 'toggle value',
      type: 'boolean',
      defaultValue: true,
      inputs: ['defaultValue'],
      events: [{ name: 'onChange', property: 'value' }]
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
    onChange: (value) => ({ value })
  }
});
