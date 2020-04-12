# react-use-pkg

> The custom react hooks library

[![NPM](https://img.shields.io/npm/v/react-use-pkg.svg)](https://www.npmjs.com/package/react-use-pkg) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-pkg
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-use-pkg'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [irhamputra](https://github.com/irhamputra)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
