import { describe, expect, it } from 'vitest'
import LucideVueResolver from '../src/vue'

describe('lucide-resolver', () => {
  it('should work', () => {
    const { resolve } = LucideVueResolver()

    expect(resolve('LucideIcon'))
      .toEqual({
        as: 'LucideIcon',
        from: 'lucide-vue-next',
        name: 'Icon',
      })
  })

  it('should work with prefix', () => {
    const { resolve } = LucideVueResolver({
      prefix: ['Lucide', 'L'],
    })

    expect(resolve('LucideIcon'))
      .toEqual({
        as: 'LucideIcon',
        from: 'lucide-vue-next',
        name: 'Icon',
      })

    expect(resolve('LIcon'))
      .toEqual({
        as: 'LIcon',
        from: 'lucide-vue-next',
        name: 'Icon',
      })

    expect(resolve('XXX'))
      .toBeUndefined()
  })
})
