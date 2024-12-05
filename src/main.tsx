import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a9fc05da12a643e34550c32c70f388a8@o4508413719150592.ingest.us.sentry.io/4508413722755072",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
