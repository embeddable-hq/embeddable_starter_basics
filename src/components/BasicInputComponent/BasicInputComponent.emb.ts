import { defineComponent } from '@embeddable.com/react';
import { Value } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicInputComponent',
  label: 'Basic Input',
  inputs: [
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      description: 'The text to show next to the textbox'
    },
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
    }],
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs
    };
  },
  events: {
    onChange: (value) => ({ value: value || Value.noFilter() })
  }
});