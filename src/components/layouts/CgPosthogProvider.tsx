'use client';

import config from '@/config';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(config.posthogApiKey, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com'
  });
}

export const CSPostHogProvider = ({ children }: React.PropsWithChildren) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
