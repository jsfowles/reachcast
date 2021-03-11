import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
