import { defineComponent } from '@embeddable.com/react';
import { Value } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicTextInputComponent',
  label: 'Basic Text Input',
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
  variables: [
    {
      name: 'text value',
      type: 'string',
      defaultValue: Value.noFilter(),
      inputs: [],
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
    onChange: (value) => ({ value: value || Value.noFilter() })
  }
});