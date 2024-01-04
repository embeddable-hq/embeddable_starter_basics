import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import { Value } from '@embeddable.com/core';

import Component from './index';

export const meta: EmbeddedComponentMeta = {
  name: 'BasicMultiSelectComponent',
  label: 'Basic Multi Select',
  defaultWidth: 320,
  defaultHeight: 80,
  inputs: [
    {
      name: 'options',
      type: 'string',
      array: true,
      label: 'Options',
      description: 'The options for the dropdown'
    },
  ],
  events: [
    {
      name: 'onChange',
      label: 'Change',
      properties: [
        {
          name: 'value',
          type: 'string',
          array: true
        }
      ]
    }],
  variables: [
      {
          name: 'selected values',
          type: 'string',
          array: true,
          defaultValue: Value.noFilter(),
          events: [{ name: 'onChange', property: 'value'}]
      }
    ]
};

type Inputs = {
  options: string[];
}

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs
    };
  },
  events: {
    onChange: (selected) => ({ value: selected.length ? selected : Value.noFilter() })
  }
});