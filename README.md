# 📦 Lucide Resolver

# Usage

1. `npm i lucide-resolver -D`

2. `npm i lucide-vue-next` or `npm i lucide-react`

3. vite.config.ts

```typescript
import LucideVueResolver from 'lucide-resolver/vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [

    Component({
      resolvers: [
        LucideVueResolver(),
      ],
    }),
  ],
})
```
