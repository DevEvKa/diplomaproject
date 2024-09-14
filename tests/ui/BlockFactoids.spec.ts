import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BlockFactoids from '@/components/blocks/BlockFactoids.vue'

describe('BlockFactoids is mounted', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(BlockFactoids)
    expect(wrapper.vm).toBeTruthy()
  })
})