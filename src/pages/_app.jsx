import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '../components/nav'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
