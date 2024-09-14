import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import BlockTextImage50 from '@/components/blocks/BlockTextImage50.vue'

const image = {
  src: '/',
  alt: 'text'
}

describe('BlockTextImage50 is mounted', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(BlockTextImage50, {
      props: { image },
  })
    expect(wrapper.vm).toBeTruthy()
  })
})