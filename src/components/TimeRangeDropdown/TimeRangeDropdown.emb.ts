import { defineComponent } from '@embeddable.com/react';
import { loadData, Value } from '@embeddable.com/core';

import Component from './index';
import MyTimeRange from '../../types/MyTimeRange.type.emb.js'

export const meta = {
  name: 'TimeRangeDropdown',
  label: 'Time Range dropdown',
  defaultHeight: 80,
  defaultWidth: 300,
  inputs: [
    {
      name: 'defaultValue',
      type: MyTimeRange,
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
          type: MyTimeRange
        }
      ]
    }],
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    const now = new Date();
    return {
      ...inputs,
      options: [
        { 
          name: '3 hours ago', 
          from: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()-3),
          to: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()-2),
        },
        { name: 'Today', relativeTimeString: 'today' },
        { name: 'Last week', relativeTimeString: 'last week' },
        { name: 'Last month', relativeTimeString: 'last month' }
        ]
    }
  },
  events: {
    onChange: (value) => ({ value: value || Value.noFilter() })
  }
});