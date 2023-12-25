import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';

import Component from './index';

export const meta : EmbeddedComponentMeta = {
  name: 'BasicToggleComponent',
  label: 'Basic Toggle',
  inputs: [
    {
      name: 'defaultValue',
      type: 'boolean',
      label: 'Default value',
      description: 'The initial value'
    },
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      description: 'The text to show next to the checkbox'
    },
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

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs
    };
  },
  events: {
    onChange: (value) => ({ value })
  }
});