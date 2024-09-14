import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import Checkbox from '~/components/common/VCheckbox.vue';

describe('Checkbox.vue', () => {
  let modelValue: string[];

  beforeEach(() => {
    modelValue = [];
  });

  it('renders checkbox with correct initial state', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue,
        value: 'test',
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    const el: any = input.element;
    expect(el.checked).toBe(false);
    expect(wrapper.text()).toContain('test');
  });

  it('updates modelValue when checkbox is checked', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue,
        value: 'test',
      },
    });

    const input: any = wrapper.find('input[type="checkbox"]');
    await input.setChecked();

    expect(modelValue).toContain('test');
    expect(input.element.checked).toBe(true);
  });

  it('removes value from modelValue when checkbox is unchecked', async () => {
    modelValue.push('test');
    const wrapper = mount(Checkbox, {
      props: {
        modelValue,
        value: 'test',
      },
    });

    const input: any = wrapper.find('input[type="checkbox"]');
    await input.setChecked();

    expect(input.element.checked).toBe(true);
    await input.setChecked(false);

    expect(modelValue).not.toContain('test');
    expect(input.element.checked).toBe(false);
  });

  it('should reflect modelValue correctly when initialized', () => {
    modelValue.push('test');

    const wrapper = mount(Checkbox, {
      props: {
        modelValue,
        value: 'test',
      },
    });

    const input: any = wrapper.find('input[type="checkbox"]');
    expect(input.element.checked).toBe(true);
  });
});