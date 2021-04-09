// @ts-nocheck
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout route={router.route}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
