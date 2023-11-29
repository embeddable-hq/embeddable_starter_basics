import { defineComponent } from '@embeddable.com/react';
import { loadData } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicTextComponent',
  label: 'Basic Text',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title for the chart'
    },
    {
      name: 'body',
      type: 'string',
      label: 'Body',
      description: 'The text content'
    },
  ],
  events: []
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      title: inputs.title,
      body: inputs.body
    };
  }
});