import React from "react";
import { ThemeProvider } from "styled-components";

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

  return StyledComponentsProxy;
};

export default createStyledComponentsProxy;
