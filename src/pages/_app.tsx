import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <MantineProvider withCssVariables>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </MantineProvider>
  );
}
