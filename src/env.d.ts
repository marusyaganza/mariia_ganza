declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SENTRY_DSN?: string;
    SENTRY_DSN?: string;
    SENTRY_ORG?: string;
    SENTRY_PROJECT?: string;
    SENTRY_AUTH_TOKEN?: string;
  }
}
