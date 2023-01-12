import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import WelcomeBlurb from '../WelcomeBlurb.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeBlurb, { props: {} });
    expect(wrapper.text()).toContain('Welcome to Consensus Check');
  });
});
