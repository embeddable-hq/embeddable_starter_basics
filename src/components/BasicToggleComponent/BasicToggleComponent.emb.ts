import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import ColorType from '../../types/Color/Color.type.emb.js';

import Component from './index';

export const meta : EmbeddedComponentMeta = {
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
      name: 'onColor',
      type: ColorType,
      label: 'On Color',
      defaultValue: { r: 97, g: 153, b: 243 }
    },
    {
      name: 'offColor',
      type: ColorType,
      label: 'Off Color',
      defaultValue: { r: 86, g: 91, b: 100 }
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
    }],
  variables: [
    {
      name: 'toggle value',
      type: 'boolean',
      defaultValue: true,
      inputs: ['defaultValue'],
      events: [{ name: 'onChange', property: 'value'}]
    }
  ]
};

type Inputs = {
  defaultValue: boolean;
  label: string;
}

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs
    };
  },
  events: {
    onChange: (value) => ({ value })
  }
});