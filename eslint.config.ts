import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    './playground/**/*',
  ],
}, {
  rules: {
    'ts/no-empty-object-type': 'off',
  },
})
