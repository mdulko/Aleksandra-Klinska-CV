import Head from 'next/head';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import MainLayout from '@/components/shared/MainLayout';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default App;
