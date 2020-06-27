import React, { StrictMode } from "react";
import type { NextPage } from "next";
import "~/styles.css";
import { ErrorBoundary } from "~/presenter/containers/ErrorBoundary";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: NextPage<any> = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  </ErrorBoundary>
);
export default App;
