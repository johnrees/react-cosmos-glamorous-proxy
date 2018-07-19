# react-cosmos-styled-components-proxy

A simple proxy for [react-cosmos](https://github.com/react-cosmos/react-cosmos) to load [styled-components](https://github.com/styled-components/styled-components) themes.

It's basically wrapping your components with a [`ThemeProvider`](https://www.styled-components.com/docs/advanced#theming).

Forked from [react-cosmos-glamorous-proxy](https://github.com/alp82/react-cosmos-glamorous-proxy)

## Getting started

Be sure to have all needed peer dependencies installed.

Import `styled-components-proxy` and create a new proxy instance with your theme:

```js
// cosmos.proxies.js
const createStyledComponentsProxy = require("react-cosmos-styled-components-proxy");
const theme = require("theme/myTheme");

const styledComponentsProxy = createStyledComponentsProxy({
  theme
});

module.exports = [styledComponentsProxy];
```
