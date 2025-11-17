import { createRequire } from 'node:module'

const requireModule = createRequire(import.meta.url)

export interface LucideResolverOptions {
  /**
   * prefix for component name
   * @default ['Lucide']
   */
  prefix?: string[]
}

export function createResolver(packName: string) {
  return (options: LucideResolverOptions = { prefix: ['Lucide'] }) => {
    const icons = requireModule(packName)
    const components = new Set(Object.keys(icons))

    return {
      type: 'component',
      resolve: (name: string) => {
        const prefix = options.prefix?.find(i => name.startsWith(i))

        if (!prefix)
          return

        const rawName = name.slice(prefix.length)
        if (components.has(rawName)) {
          return {
            name: rawName,
            from: packName,
            as: name,
          }
        }
      },
    } as const
  }
}
