const React = require("react");
const { proxyPropTypes } = require("react-cosmos-shared/lib/react");
const { ThemeProvider } = require("styled-components");

const defaults = {
  theme: {}
};

const createStyledComponentsProxy = options => {
  const { theme } = { ...defaults, ...options };

  const StyledComponentsProxy = ({ nextProxy, ...rest }) => {
    const { value: NextProxy, next } = nextProxy;

    return (
      <ThemeProvider theme={theme}>
        <NextProxy {...rest} nextProxy={next()} />
      </ThemeProvider>
    );
  };

  StyledComponentsProxy.propTypes = proxyPropTypes;

  return StyledComponentsProxy;
};

module.exports = createStyledComponentsProxy;
