import { defineComponent } from '@embeddable.com/react';
import { loadData, Value } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicDropdownComponent',
  label: 'Basic Dropdown',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The text to show next to the dropdown'
    },
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
    },
    {
      name: "values",
      type: "dimension",
      label: "Values",
      config: {
        dataset: "ds",
      },
    },
    {
      name: 'defaultValue',
      type: 'string',
      label: 'Default value',
      description: 'The initial value'
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
      name: 'chosen value',
      type: 'string',
      defaultValue: Value.noFilter(),
      inputs: ['defaultValue'],
      events: [{ name: 'onChange', property: 'value'}]
    }
  ]
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs,
      results: loadData({
        from: inputs.ds,
        dimensions: [inputs.values],
      })
    };
  },
  events: {
    onChange: (value) => ({ value: value || Value.noFilter() })
  }
});