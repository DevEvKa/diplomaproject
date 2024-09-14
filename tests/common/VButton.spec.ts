import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { config, mount } from '@vue/test-utils'
import VButton from '~/components/common/VButton.vue';

describe('VButton.vue', () => {

  beforeAll(() => {
    config.global.renderStubDefaultSlot = true
  })
  
  afterAll(() => {
    config.global.renderStubDefaultSlot = false
  })

  it('renders a VButton component', () => {
    const wrapper = mount(VButton, {
      props: {
        text: 'Click Me'
      },
      shallow: true
    })
  
    expect(wrapper.html()).toContain('Click Me')
    expect(wrapper.classes()).toContain('v-button')
  })

  it('emits click event when not disabled', async () => {
    const wrapper = mount(VButton)
    
    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('emits disabled-click event when clicking disabled button', async () => {
    const wrapper = mount(VButton, {
      props: {
        disabled: true
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('disabled-click')
  })

  it('applies rounded class when rounded prop is true', () => {
    const wrapper = mount(VButton, {
      props: {
        rounded: true
      }
    })

    expect(wrapper.classes()).toContain('is-rounded')
  })

  it('applies correct size class based on size prop', () => {
    const wrapper = mount(VButton, {
      props: {
        size: 'lg'
      }
    })

    expect(wrapper.classes()).toContain('v-button--lg')
  })

  it('applies disabled styles when disabled prop is true', () => {
    const wrapper = mount(VButton, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('displays the correct text color', () => {
    const wrapper = mount(VButton, {
      props: {
        textColor: 'light'
      }
    })

    expect(wrapper.classes()).toContain('text-light')
  })
})