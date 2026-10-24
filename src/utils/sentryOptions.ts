// Options shared by the client, server and edge Sentry configs
export const sentryBaseOptions = {
  // Sample 10% of visits for performance tracing; errors are always captured.
  tracesSampleRate: 0.1,

  // Sentry 11 collects more visitor data by default than v10 did. Keep the
  // previous, minimal behaviour: no IP address or user info, no cookie values,
  // no request/response bodies.
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpBodies: [],
  },

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
};
