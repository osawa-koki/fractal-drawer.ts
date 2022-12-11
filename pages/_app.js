import 'bootstrap/dist/css/bootstrap.min.css';

import '../components/Layout.scss';
import '../pages/global.scss';

import '../pages/index.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
};
