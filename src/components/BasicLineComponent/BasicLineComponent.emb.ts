import { defineComponent } from '@embeddable.com/react';
import { loadData } from '@embeddable.com/core';

import Component from './index';

export const meta = {
  name: 'BasicLineComponent',
  label: 'Basic Line',
  inputs: [
    
  ],
  events: []
};

export default defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      
    };
  }
});